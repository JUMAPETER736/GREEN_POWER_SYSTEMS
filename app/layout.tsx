import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Green Power Systems | Solar Energy Solutions in Lilongwe",
  description:
    "Professional solar panel installation, sales, and maintenance services in Lilongwe, Malawi. Renewable energy solutions for homes and businesses.",
  keywords:
    "solar panels, solar energy, installation, maintenance, renewable energy, Lilongwe, Malawi",
  authors: [{ name: "Green Power Systems" }],
  openGraph: {
    title: "Green Power Systems",
    description:
      "Professional solar panel installation and maintenance services",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}