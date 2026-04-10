"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo.jpeg"
                  alt="Green Power Systems"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold">Green Power</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Professional solar energy solutions for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#installation" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#consultation" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-200">Email:</p>
                <a href="mailto:greenpowersystemsltd@gmail.com" className="text-accent hover:underline">
                  greenpowersystemsltd@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-200">Location:</p>
                <p className="text-gray-200">
                  QuickTrip Shopping Complex
                  Area 25 Sungwi, Lilongwe
                  P.O Box 40135, Malawi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-200 text-sm">
              © {currentYear} Green Power Systems. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
