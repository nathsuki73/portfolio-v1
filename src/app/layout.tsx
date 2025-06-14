import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/headers";
import { Bodoni_Moda } from 'next/font/google'
import localFont from 'next/font/local'

const welcome_Web = localFont({
  src: '../assets/WelcomewebRegular.woff2',
  variable: '--font-welcome',
})

const bodoni_Moda = Bodoni_Moda({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tan",
  description: "Portfolio Version 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${bodoni_Moda.className} ${welcome_Web.variable}`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
