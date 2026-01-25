import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dafon.online';
  const securityEmail = process.env.SECURITY_EMAIL || 'dafondeveloper@gmail.com';
  const securityPolicy = process.env.SECURITY_POLICY_URL || `${siteUrl}/security-policy`;

  const securityTxt = `Contact: mailto:${securityEmail}
Expires: ${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()}
Preferred-Languages: en, pt, es
Canonical: ${siteUrl}/.well-known/security.txt
Policy: ${securityPolicy}
Acknowledgments: ${siteUrl}/security-acknowledgments
Hiring: ${siteUrl}/careers

# Security Policy
# For security vulnerabilities, please contact us at the email above.
# We appreciate responsible disclosure and will respond within 48 hours.

# Encryption
# We support PGP encryption for sensitive security reports.
# Please request our PGP key via email if needed.

# Scope
# This security policy applies to all Dafon services and infrastructure.
# Please do not test vulnerabilities on production systems without authorization.

# Rewards
# We appreciate security researchers who help us keep our systems secure.
# While we don't have a formal bug bounty program, we acknowledge
# responsible disclosures and may provide recognition or rewards at our discretion.
`;

  return new NextResponse(securityTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
