import type { Metadata } from "next";
import { Inter, Noto_Sans_Bassa_Vah } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social media app",
  description: "app is built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-white px-4 md:px-8 lg:md-16 xl:px-32 xlx:px-64">
        <Navbar/>
        </div>
        <div className="w-full bg-slate-100 px-4 md:px-8 lg:md-16 xl:px-32 xlx:px-64">
        {children}
        </div>
        </body>
    </html>
  );
}