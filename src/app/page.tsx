"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // State for animations
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      {/* Modern gradient hero with animated text */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-fadeInUp">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-sm font-semibold">
                  ⚡ Solar Energy Revolution
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Power Your Future with Solar Energy
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Professional solar panel installation, sales, and maintenance services. Transform your energy consumption with sustainable, cost-effective solutions for your home or business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex gap-8 pt-8 border-t border-gray-700">
                <div>
                  <p className="text-3xl font-bold text-blue-400">50+</p>
                  <p className="text-gray-400">Installations</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">100%</p>
                  <p className="text-gray-400">Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-400">24/7</p>
                  <p className="text-gray-400">Support</p>
                </div>
              </div>
            </div>

            {/* Right side - Animated illustration */}
            <div className="relative h-96 md:h-full animate-slideInRight">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>

              {/* SVG Solar illustration */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full relative z-10 filter drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sun with glow */}
                <defs>
                  <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFA500" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Animated sun */}
                <circle cx="100" cy="80" r="45" fill="url(#sunGradient)" filter="url(#glow)" className="animate-pulse" />

                {/* Sun rays */}
                <g stroke="#FFD700" strokeWidth="3" fill="none">
                  <line x1="100" y1="20" x2="100" y2="0" />
                  <line x1="145" y1="35" x2="160" y2="20" />
                  <line x1="160" y1="80" x2="180" y2="80" />
                  <line x1="145" y1="125" x2="160" y2="140" />
                </g>

                {/* Solar panel array */}
                <g className="animate-slideInUp">
                  {/* Panel 1 */}
                  <rect x="60" y="200" width="45" height="80" fill="#0066CC" rx="4" />
                  <rect x="65" y="210" width="10" height="12" fill="#4DD9FF" />
                  <rect x="80" y="210" width="10" height="12" fill="#4DD9FF" />
                  <rect x="65" y="230" width="10" height="12" fill="#4DD9FF" />
                  <rect x="80" y="230" width="10" height="12" fill="#4DD9FF" />
                  <rect x="65" y="250" width="10" height="12" fill="#4DD9FF" />
                  <rect x="80" y="250" width="10" height="12" fill="#4DD9FF" />

                  {/* Panel 2 */}
                  <rect x="140" y="190" width="50" height="90" fill="#0066CC" rx="4" />
                  <rect x="146" y="200" width="10" height="12" fill="#4DD9FF" />
                  <rect x="162" y="200" width="10" height="12" fill="#4DD9FF" />
                  <rect x="146" y="225" width="10" height="12" fill="#4DD9FF" />
                  <rect x="162" y="225" width="10" height="12" fill="#4DD9FF" />
                  <rect x="146" y="250" width="10" height="12" fill="#4DD9FF" />
                  <rect x="162" y="250" width="10" height="12" fill="#4DD9FF" />
                </g>

                {/* Leaf symbol */}
                <g fill="#10B981">
                  <path d="M 220 320 Q 240 300 250 270 Q 240 280 220 300 Z" />
                  <path d="M 220 320 Q 200 300 190 270 Q 200 280 220 300 Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      {/* Modern cards with hover effects */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="section-container">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-purple-900">
              Why Choose Green Power Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar energy solutions tailored to your needs with professional expertise
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Professional Installation</h3>
              <p className="text-gray-600">Expert solar panel installation with certified technicians and guaranteed quality</p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Maintenance & Support</h3>
              <p className="text-gray-600">Ongoing maintenance to keep your system running at peak efficiency 24/7</p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Affordable Pricing</h3>
              <p className="text-gray-600">Competitive rates with flexible payment options and financing available</p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Sustainable energy solutions that help the environment and your wallet</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      {/* Showcase main services with modern cards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="section-container">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-purple-900">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete solar energy solutions from design to installation and ongoing support
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📦</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Solar Panel Installation</h3>
              <p className="text-gray-600 mb-6">Complete solar system design and professional installation for residential and commercial properties</p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-transparent hover:border-purple-500 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🔍</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">System Maintenance</h3>
              <p className="text-gray-600 mb-6">Regular maintenance services to ensure optimal performance and longevity of your system</p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-transparent hover:border-green-500 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🛠️</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Repairs & Upgrades</h3>
              <p className="text-gray-600 mb-6">Professional repair and system upgrade services to enhance your installation</p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300">
                Learn More →
              </Link>
            </div>
          </div>

          {/* View all button */}
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      {/* Final call-to-action with modern design */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation from our solar energy experts. We'll help you find the perfect solution for your home or business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}