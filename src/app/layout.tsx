import type { Metadata } from "next";
import "./globals.css";
import { Bodoni_Moda } from 'next/font/google'

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
      <body className={`antialiased ${bodoni_Moda.className}`}>{children}</body>
    </html>
  );
}
