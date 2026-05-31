import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: Props) {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
