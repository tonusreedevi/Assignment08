"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { data: session } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/");
    router.refresh();
  };

  // Get first two letters of user's name
  const getInitials = (name) => {
    if (!name) return "U";

    return name
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  return (
    <nav className="bg-white border-t-4 border-[#F6B914] shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide text-[#0B3D6F]"
        >
          SunCart
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-12 font-medium text-[#0B3D6F]">

          {/* Home */}
          <li>
            <Link
              href="/"
              className="relative transition-all duration-300 hover:text-[#F46C06]
              after:absolute after:left-0 after:-bottom-2 after:h-[2px]
              after:w-0 after:bg-[#F46C06] after:transition-all
              hover:after:w-full"
            >
              Home
            </Link>
          </li>

          {/* Products */}
          <li>
            <Link
              href="/products"
              className="relative transition-all duration-300 hover:text-[#F46C06]
              after:absolute after:left-0 after:-bottom-2 after:h-[2px]
              after:w-0 after:bg-[#F46C06] after:transition-all
              hover:after:w-full"
            >
              Products
            </Link>
          </li>

          {/* My Profile */}
          {mounted && session && (
            <li>
              <Link
                href="/profile"
                className="relative transition-all duration-300 hover:text-[#F46C06]
                after:absolute after:left-0 after:-bottom-2 after:h-[2px]
                after:w-0 after:bg-[#F46C06] after:transition-all
                hover:after:w-full"
              >
                My Profile
              </Link>
            </li>
          )}

        </ul>

        {/* Authentication */}
        <div className="flex items-center gap-4">

          {!mounted ? (
            <div className="w-40 h-10" />
          ) : session ? (

            /* ================= LOGGED IN ================= */
            <div className="flex items-center gap-3">

              {/* Avatar */}
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "Profile"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#F6B914]"
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-full bg-[#0B3D6F]
                  text-white flex items-center justify-center
                  font-bold border-2 border-[#F6B914]"
                >
                  {getInitials(session.user.name)}
                </div>
              )}

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-full bg-[#0B3D6F]
                text-white font-semibold shadow-md
                hover:bg-[#082D50] transition-all duration-300"
              >
                Logout
              </button>

            </div>

          ) : (

            /* ================= LOGGED OUT ================= */
            <>
              <Link
                href="/signup"
                className="px-5 py-2 rounded-full border-2
                border-[#0B3D6F] text-[#0B3D6F] font-semibold
                hover:bg-[#0B3D6F] hover:text-white
                transition-all duration-300"
              >
                Signup
              </Link>

              <Link
                href="/signin"
                className="px-5 py-2 rounded-full bg-[#F46C06]
                text-white font-semibold shadow-md
                hover:bg-[#d85b03] transition-all duration-300"
              >
                Signin
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;