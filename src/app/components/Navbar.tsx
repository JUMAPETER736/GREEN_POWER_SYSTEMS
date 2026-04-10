"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.jpeg"
                alt="Green Power Systems"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">Green Power</h1>
              <p className="text-xs text-gray-600">Solar Solutions</p>
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 font-medium hover:text-primary">Home</Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-primary">About</Link>
            <Link href="/services" className="text-gray-700 font-medium hover:text-primary">Services</Link>
            <Link href="/products" className="text-gray-700 font-medium hover:text-primary">Products</Link>
            <Link href="/testimonials" className="text-gray-700 font-medium hover:text-primary">Testimonials</Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-primary">Contact</Link>
          </div>

          <button className="hidden md:block btn-primary">Get Quote</button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary">About</Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-primary">Services</Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-primary">Products</Link>
            <Link href="/testimonials" className="block py-2 text-gray-700 hover:text-primary">Testimonials</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary">Contact</Link>
            <button className="btn-primary w-full mt-4">Get Quote</button>
          </div>
        )}
      </div>
    </nav>
  );
}
