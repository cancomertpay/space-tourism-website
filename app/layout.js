import "./globals.css";
// next.js fonts
import { barlow } from "@/lib/fonts";

// custom components
import MainHeader from "@/components/root-layout/main-header";

export const metadata = {
  title: "Space Tourism Co.",
  description:
    "An template company production app which for Can Cömertpay's portfollio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-primary-black relative overflow-x-hidden`}>
          <MainHeader />
        {children}
        <div id="aside" className="md:hidden"></div>
      </body>
    </html>
  );
}
