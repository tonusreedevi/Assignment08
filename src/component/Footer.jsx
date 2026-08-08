import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B3D6F] border-t-4 border-[#F6B914] text-white">
      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#F46C06]">
              SunCart
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Fresh groceries delivered to your doorstep with quality,
              affordability, and speed.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-[#F46C06] mb-4">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#F6B914] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-[#F6B914] transition">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#F6B914] transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#F6B914] transition">
                  Contact
                </Link >
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold text-[#F46C06] mb-4">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link  href="/" className="hover:text-[#F6B914] transition">
                  Help Center
                </Link >
              </li>

              <li>
                <Link  href="/" className="hover:text-[#F6B914] transition">
                  Privacy Policy
                </Link >
              </li>

              <li>
                <Link  href="/" className="hover:text-[#F6B914] transition">
                  Terms & Conditions
                </Link >
              </li>

              <li>
                <Link  href="/" className="hover:text-[#F6B914] transition">
                  FAQ
                </Link >
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-[#F46C06] mb-4">
              Newsletter
            </h3>

            <p className="text-gray-300 mb-5">
              Get updates on our latest offers and fresh arrivals.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 outline-none"
              />

              <button className="bg-[#F46C06] hover:bg-[#d85b03] px-5 rounded-r-lg transition font-semibold">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-300 text-sm">
            © 2026 <span className="text-[#F46C06] font-semibold">SunCart</span>.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F46C06] transition">
              Facebook
            </a>

            <a href="#" className="hover:text-[#F46C06] transition">
              Instagram
            </a>

            <a href="#" className="hover:text-[#F46C06] transition">
              Twitter
            </a>

            <a href="#" className="hover:text-[#F46C06] transition">
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;