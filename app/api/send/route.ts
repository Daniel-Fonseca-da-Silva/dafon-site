import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { render } from '@react-email/render'; 

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  turnstileToken: string;
}

const verifyTurnstileToken = async (token: string): Promise<boolean> => {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not configured');
    return false;
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message, turnstileToken } = body;
    
    const mailFrom = process.env.MAIL_FROM;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY environment variable is not configured' },
        { status: 500 }
      );
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Invalid verification token' },
        { status: 400 }
      );
    }

    if (!mailFrom) {
      return NextResponse.json(
        { error: 'MAIL_FROM environment variable is not configured' },
        { status: 500 }
      );
    }

    const mailTo = process.env.MAIL_TO;
    if (!mailTo) {
      return NextResponse.json(
        { error: 'MAIL_TO environment variable is not configured' },
        { status: 500 }
      );
    }

    const emailHtml = render(EmailTemplate({ name, email, subject, message }));

    const { data, error } = await resend.emails.send({
      from: mailFrom,
      to: [mailTo],
      replyTo: email,
      subject: `Contact: ${subject}`,
      html: await emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: error.message || JSON.stringify(error)
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Unexpected error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { 
        error: 'Error sending email',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
