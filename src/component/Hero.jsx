import React from "react";
import Image from "next/image";
import HeroImage from "@/image/3.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FFF8E8] via-white to-[#FFE9D1]">
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#F6B914]/20 blur-3xl"></div>
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#F46C06]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
     {/* Left Content */}
<div>
  <span className="inline-flex items-center gap-2 bg-[#F46C06] text-white px-5 py-2 rounded-full font-semibold shadow-lg">
    🔥 Hot Deals
  </span>

  <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-[#0B3D6F]">
    Fresh Summer
    <span className="block text-[#F46C06]">
      Sale 50% OFF
    </span>
  </h1>

  <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
    Fill your basket with farm-fresh fruits, vegetables, dairy, and everyday
    essentials at unbeatable summer prices. Shop smarter, save bigger, and
    enjoy freshness delivered to your doorstep.
  </p>

  <div className="flex flex-wrap gap-5 mt-10">
    <button className="bg-[#F46C06] hover:bg-[#d65b05] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300">
      Shop Now
    </button>

    <button className="border-2 border-[#0B3D6F] text-[#0B3D6F] hover:bg-[#0B3D6F] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
      Explore Deals
    </button>
  </div>

  {/* Trust Badges */}
  <div className="flex flex-wrap gap-6 mt-12">
    <div className="flex items-center gap-2">
      <span className="text-2xl">🌿</span>
      <p className="text-gray-700 font-medium">100% Fresh</p>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-2xl">🚚</span>
      <p className="text-gray-700 font-medium">Free Delivery</p>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-2xl">🛒</span>
      <p className="text-gray-700 font-medium">Best Prices</p>
    </div>
  </div>
</div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            {/* Background Circle */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[#F6B914]/20"></div>

            {/* Main Image */}
            <Image
              src={HeroImage}
              alt="Summer Fruits"
              width={520}
              height={520}
              priority
              className="relative z-10 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Offer Card */}
            <div className="absolute top-8 left-0 bg-white rounded-2xl shadow-xl p-5 z-20">
              <p className="text-gray-500 text-sm">Summer Offer</p>
              <h2 className="text-4xl font-black text-[#F46C06]">
                50% OFF
              </h2>
            </div>

            {/* Delivery Card */}
            <div className="absolute bottom-10 left-0 bg-white rounded-xl shadow-xl px-5 py-4 z-20">
              <h3 className="font-bold text-[#0B3D6F]">
                🚚 Free Delivery
              </h3>
              <p className="text-sm text-gray-500">
                On orders above $30
              </p>
            </div>

            {/* Fresh Badge */}
            <div className="absolute bottom-8 right-0 bg-[#0B3D6F] text-white px-6 py-4 rounded-2xl shadow-xl z-20">
              <h3 className="font-bold">🌿 100% Fresh</h3>
              <p className="text-sm text-white/80">
                Organic Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;