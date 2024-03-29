import "./globals.css";
// next.js fonts
import { barlow } from "@/lib/fonts";

// custom components
import MainHeader from "@/components/rootLayout/main-header";
import MainContentContainer from "@/components/rootLayout/main-content";
import Template from "./template";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-primary-black`}>
        <MainHeader />
          <Template>{children}</Template>
        <div id="aside" className="md:hidden"></div>
      </body>
    </html>
  );
}
