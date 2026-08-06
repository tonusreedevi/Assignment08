"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
 const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
            const name = form.email.value.trim();
            const email = form.email.value.trim();
            const password = form.password.value;
            const image = form.email.value.trim();
   

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
    
      });


      if (error) {
        alert(error.message || "Signup failed!");
        return;
      }
      
      alert("Account created successfully!");
    
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-[#0B3D6F]">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Join SunCart and start shopping today.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-[#0B3D6F]">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6B914]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#0B3D6F]">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6B914]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#0B3D6F]">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="********"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6B914]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#0B3D6F]">
              Image URL
            </label>
            <input
              name="image"
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6B914]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B3D6F] hover:bg-[#092f56] disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t"></div>
        </div>

        <button className="w-full border py-3 rounded-xl font-medium hover:bg-gray-50 transition">
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-[#0B3D6F] font-semibold hover:text-[#F6B914]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}