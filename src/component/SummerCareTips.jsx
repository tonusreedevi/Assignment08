"use client";

import { useState } from "react";
import {
  FaSun,
  FaTint,
  FaShieldAlt,
  FaLeaf,
  FaAppleAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

export default function SummerCareTips() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // All tips data
  const allTips = [
    {
      id: 1,
      icon: FaShieldAlt,
      iconColor: "text-[#F46C06]",
      title: "Wear Sunscreen Every Day",
      content: "Apply a broad-spectrum sunscreen with SPF 30 or higher at least 15–20 minutes before going outside. Reapply every two hours, especially after swimming or sweating. Don't forget often-missed spots like your ears, neck, and the tops of your feet."
    },
    {
      id: 2,
      icon: FaTint,
      iconColor: "text-sky-500",
      title: "Stay Hydrated Throughout the Day",
      content: "Drink plenty of water throughout the day to maintain healthy skin and prevent dryness caused by hot weather. Aim for at least 8-10 glasses daily, and increase your intake if you're spending time outdoors or exercising."
    },
    {
      id: 3,
      icon: FaLeaf,
      iconColor: "text-green-600",
      title: "Moisturize After Sun Exposure",
      content: "After spending time outdoors, cleanse your skin gently and apply a lightweight moisturizer or aloe vera gel to soothe and replenish moisture. This helps repair any damage caused by sun exposure and keeps your skin soft and supple."
    },
    {
      id: 4,
      icon: FaAppleAlt,
      iconColor: "text-red-500",
      title: "Eat Fresh Fruits & Vegetables",
      content: "Watermelon, cucumber, berries, oranges, and leafy vegetables are rich in vitamins and antioxidants that nourish your skin from the inside out. A diet rich in these foods helps protect your skin against sun damage and keeps it looking vibrant."
    },
    {
      id: 5,
      icon: FaSun,
      iconColor: "text-yellow-500",
      title: "Wear Protective Clothing",
      content: "In addition to sunscreen, wear protective clothing like wide-brimmed hats, sunglasses, and lightweight long-sleeved shirts when spending extended time outdoors. This provides an extra layer of protection against harmful UV rays."
    },
    {
      id: 6,
      icon: FaShieldAlt,
      iconColor: "text-purple-500",
      title: "Avoid Peak Sun Hours",
      content: "Try to limit your sun exposure between 10 AM and 4 PM when UV rays are at their strongest. If you need to be outdoors during these hours, seek shade whenever possible and ensure you're well-protected with sunscreen and protective clothing."
    }
  ];

  // Show first 2 tips initially
  const initialTips = allTips.slice(0, 2);
  const remainingTips = allTips.slice(2);

  // Navigation functions
  const nextSlide = () => {
    const totalTips = showAll ? allTips.length : initialTips.length;
    setCurrentSlide((prev) => (prev + 1) % totalTips);
  };

  const prevSlide = () => {
    const totalTips = showAll ? allTips.length : initialTips.length;
    setCurrentSlide((prev) => (prev - 1 + totalTips) % totalTips);
  };

  // Get current tips to display
  const currentTips = showAll ? allTips : initialTips;
  const currentTip = currentTips[currentSlide];

  return (
    <section className="bg-[#F46C06] min-h-screen py-16 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Summer Care Tips
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Keep your skin healthy, hydrated, and glowing throughout the summer with these simple everyday habits.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center">
          <p className="text-white/90 leading-relaxed text-lg">
            Summer brings sunshine, vacations, and outdoor adventures, but it also exposes your skin to strong UV rays, heat, and dehydration. Following a simple skincare routine can help protect your skin and keep it looking fresh all season long.
          </p>
        </div>

        {/* Slide Container */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Slide Content */}
          <div className="min-h-[300px] flex flex-col items-center text-center">
            {/* Icon */}
            <div className={`text-5xl mb-4 ${currentTip.iconColor}`}>
              <currentTip.icon />
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {currentTip.title}
            </h2>

            {/* Content */}
            <p className="text-white/80 leading-relaxed text-base md:text-lg max-w-2xl">
              {currentTip.content}
            </p>

            {/* Slide Counter */}
            <div className="mt-6 flex items-center gap-2">
              {currentTips.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {currentTips.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </>
          )}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-8">
          {!showAll ? (
            <button
              onClick={() => {
                setShowAll(true);
                setCurrentSlide(0);
              }}
              className="px-8 py-3 bg-white text-[#F46C06] font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              View More Tips ({remainingTips.length} more)
            </button>
          ) : (
            <button
              onClick={() => {
                setShowAll(false);
                setCurrentSlide(0);
              }}
              className="px-8 py-3 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 border-2 border-white"
            >
              Show Less
            </button>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Simple habits. Healthy skin. Happy summer.
          </p>
        </div>
      </div>
    </section>
  );
}