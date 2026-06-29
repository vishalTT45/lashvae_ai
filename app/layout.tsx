import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageMotion from "./components/PageMotion";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lashvae - AI Powered Omnichannel Inbox | Reply in ~3 Seconds",
  description: "Advanced AI infrastructure for modern support teams. Automate chat, ticket resolving, and sales across multiple channels.",
  keywords: ["AI customer service", "conversational AI", "support automation", "omni-channel chat"],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0a]">
        <PageMotion />
        <PromoBanner />
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
