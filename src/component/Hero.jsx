import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/products/11.jpg"
          alt="Summer Banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-block bg-[#F46C06] text-white px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-[2px]">
            WE ARE CREATIVE
          </span>
          <h1 className="mt-6 text-5xl lg:text-7xl font-black text-white leading-tight">
            Fresh Summer
            <span className="block text-[#F46C06]">
              Sale 50% OFF
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Fill your basket with 
            farm-fresh fruits, vegetables, and everyday essentials at 
            unbeatable summer prices.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-[#F46C06] hover:bg-[#d65b05] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-colors">
              See More
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold border-2 border-white transition-colors">
              Hire Me
            </button>
          </div>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">🌿</span>
              <p className="font-medium">100% Fresh</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">🚚</span>
              <p className="font-medium">Free Delivery</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">🛒</span>
              <p className="font-medium">Best Prices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;