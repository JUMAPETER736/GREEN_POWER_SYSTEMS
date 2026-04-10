"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/services",     label: "Services" },
  { href: "/products",     label: "Products" },
  { href: "/contact",      label: "Contact" },
];

const serviceLinks = [
  { href: "/services#installation",  label: "Installation" },
  { href: "/services#maintenance",   label: "Maintenance" },
  { href: "/services#consultation",  label: "Consultation" },
  { href: "/services#repairs",       label: "Repairs" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-container py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-[var(--green-primary)]">
              <Image src="/logo.jpeg" alt="Green Power Systems" width={36} height={36} className="object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-none">Green Power</p>
              <p className="text-xs text-gray-400 mt-0.5">Solar Solutions</p>
            </div>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed">
            Professional solar energy solutions for a sustainable future.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Navigation</h4>
          <ul className="space-y-2.5">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-gray-500">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Email</p>
              <a href="mailto:greenpowersystemsltd@gmail.com" className="text-[var(--green-primary)] hover:underline break-all">
                greenpowersystemsltd@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Address</p>
              <address className="not-italic leading-relaxed">
                QuickTrip Shopping Complex<br />
                Area 25 Sungwi, Lilongwe<br />
                P.O Box 40135, Malawi
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Green Power Systems Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">Lilongwe, Malawi</p>
        </div>
      </div>
    </footer>
  );
}