"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/",            label: "Home" },
  { href: "/about",       label: "About" },
  { href: "/services",    label: "Services" },
  { href: "/products",    label: "Products" },
  { href: "/testimonials",label: "Testimonials" },
  { href: "/contact",     label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 relative rounded-lg overflow-hidden bg-[var(--green-primary)] flex items-center justify-center">
              <Image src="/logo.jpeg" alt="Green Power Systems" width={36} height={36} className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900 leading-none">Green Power</p>
              <p className="text-xs text-gray-400 mt-0.5">Solar Solutions</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm">
              Get Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-0.5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 px-3">
              <Link href="/contact" className="btn-primary w-full justify-center">Get Quote</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}