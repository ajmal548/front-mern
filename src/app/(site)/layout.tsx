import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header/page";
import Footer
 from "./footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className="bg-slate-100" >{children}</div>
        <Footer/>
      </body>
    </html>
  );
}