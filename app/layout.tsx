import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Loader from "@/components/Loader";

const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Samuel's Portfolio",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsmono.variable}>    
        <Loader />  
        <Header />
        {children}
      </body>
    </html>
  );
}
