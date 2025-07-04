import type { Metadata } from "next";
import "./globals.css";
import { Bodoni_Moda, Inter } from "next/font/google";
import localFont from "next/font/local";
import ClientWrapper from "@/components/loading/ClientWrapper";
import Loading from "@/components/loading/loading";
import { LoadingProvider } from "@/components/loading/LoadingContext";

const welcome_Web = localFont({
  src: "../assets/WelcomewebRegular.woff2",
  variable: "--font-welcome",
});

const bodoni_Moda = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon:  "/svg/icon.svg",
  },
  title: "Nat",
  description: "Portfolio Version 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className} ${bodoni_Moda.variable} ${welcome_Web.variable} mx-4 sm:mx-6 md:10 lg:mx-16 xl:mx-24 2xl:mx-32`}
      >
        <LoadingProvider>
          <ClientWrapper>
            <Loading />
          </ClientWrapper>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
