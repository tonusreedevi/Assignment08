import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-t-4 border-[#F6B914] shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-[#0B3D6F] cursor-pointer">
        SunCart
        </h1>

        {/* Menu */}
        <ul className="flex items-center gap-12 font-medium text-[#0B3D6F]">
          <li>
            <a
              href="/"
              className="relative transition-all duration-300 hover:text-[#F46C06]
              after:absolute after:left-0 after:-bottom-2 after:h-[2px]
              after:w-0 after:bg-[#F46C06] after:transition-all
              hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/#products"
              className="relative transition-all duration-300 hover:text-[#F46C06]
              after:absolute after:left-0 after:-bottom-2 after:h-[2px]
              after:w-0 after:bg-[#F46C06] after:transition-all
              hover:after:w-full"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="/profile"
              className="relative transition-all duration-300 hover:text-[#F46C06]
              after:absolute after:left-0 after:-bottom-2 after:h-[2px]
              after:w-0 after:bg-[#F46C06] after:transition-all
              hover:after:w-full"
            >
              My Profile
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-full border-2 border-[#0B3D6F] text-[#0B3D6F] font-semibold hover:bg-[#0B3D6F] hover:text-white transition-all duration-300">
           <Link href={"/signup"}>Signup</Link>
          </button>

          <button className="px-5 py-2 rounded-full bg-[#F46C06] text-white font-semibold shadow-md hover:bg-[#d85b03] transition-all duration-300">
            <Link href={"/signin"}>Signin</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;