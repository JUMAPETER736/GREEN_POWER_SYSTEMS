import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Green Power Systems | Solar Energy Solutions in Lilongwe",
  description:
    "Professional solar panel installation, sales, and maintenance services in Lilongwe, Malawi.",
  keywords: "solar panels, solar energy, installation, maintenance, renewable energy, Lilongwe, Malawi",
  authors: [{ name: "Green Power Systems" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
