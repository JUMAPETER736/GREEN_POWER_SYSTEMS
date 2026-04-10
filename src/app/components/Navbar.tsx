"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

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
              <h1 className="text-xl font-bold text-primary">
                Green Power
              </h1>
              <p className="text-xs text-gray-600">Solar Solutions</p>
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <button className="hidden md:block btn-primary">
            Get Quote
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={toggleMenu}
          >
            <span
              className={lock w-6 h-0.5 bg-primary transition-all duration-300 }
            ></span>
            <span
              className={lock w-6 h-0.5 bg-primary transition-all duration-300 }
            ></span>
            <span
              className={lock w-6 h-0.5 bg-primary transition-all duration-300 }
            ></span>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-0 text-gray-700 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary w-full mt-4">Get Quote</button>
          </div>
        )}
      </div>
    </nav>
  );
}
