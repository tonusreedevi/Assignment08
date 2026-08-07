"use client";

import { useState } from "react";

export default function SummerCareTips() {
  const [showAll, setShowAll] = useState(false);

  const allTips = [
    {
      id: 1,
      title: "Wear Sunscreen Every Day",
      content: "Apply a broad-spectrum sunscreen with SPF 30 or higher at least 15–20 minutes before going outside. Reapply every two hours, especially after swimming or sweating. Don't forget often-missed spots like your ears, neck, and the tops of your feet."
    },
    {
      id: 2,
      title: "Stay Hydrated Throughout the Day",
      content: "Drink plenty of water throughout the day to maintain healthy skin and prevent dryness caused by hot weather. Aim for at least 8-10 glasses daily, and increase your intake if you're spending time outdoors or exercising."
    },
    {
      id: 3,
      title: "Moisturize After Sun Exposure",
      content: "After spending time outdoors, cleanse your skin gently and apply a lightweight moisturizer or aloe vera gel to soothe and replenish moisture. This helps repair any damage caused by sun exposure and keeps your skin soft and supple."
    },
    {
      id: 4,
      title: "Eat Fresh Fruits and Vegetables",
      content: "Watermelon, cucumber, berries, oranges, and leafy vegetables are rich in vitamins and antioxidants that nourish your skin from the inside out. A diet rich in these foods helps protect your skin against sun damage and keeps it looking vibrant."
    },
    {
      id: 5,
      title: "Wear Protective Clothing",
      content: "In addition to sunscreen, wear protective clothing like wide-brimmed hats, sunglasses, and lightweight long-sleeved shirts when spending extended time outdoors. This provides an extra layer of protection against harmful UV rays."
    },
    {
      id: 6,
      title: "Avoid Peak Sun Hours",
      content: "Try to limit your sun exposure between 10 AM and 4 PM when UV rays are at their strongest. If you need to be outdoors during these hours, seek shade whenever possible and ensure you're well-protected with sunscreen and protective clothing."
    },
    {
      id: 7,
      title: "Exfoliate Gently Weekly",
      content: "Gentle exfoliation once a week helps remove dead skin cells and allows your moisturizers and sunscreens to penetrate more effectively. Use a mild exfoliant and avoid harsh scrubs that can irritate sun-exposed skin."
    }
  ];

  const initialTips = allTips.slice(0, 1);
  const remainingTips = allTips.slice(4);

  return (
    <section className="bg-[#F46C06] py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white/80 text-sm font-medium uppercase tracking-[4px]">
            Summer Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Summer Care Tips
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Keep your skin healthy, hydrated, and glowing throughout the summer with these simple everyday habits.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <p className="text-white/90 leading-relaxed text-lg">
            Summer brings sunshine, vacations, and outdoor adventures, but it also exposes your skin to strong UV rays, heat, and dehydration. Following a simple skincare routine can help protect your skin and keep it looking fresh all season long.
          </p>
        </div>

        {/* Display Tips */}
        {initialTips.map((tip) => (
          <div key={tip.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-3">
              {tip.title}
            </h2>
            <p className="text-white/80 leading-relaxed">
              {tip.content}
            </p>
          </div>
        ))}

        {/* Remaining Tips with Animation */}
        {showAll && (
          <div className="space-y-6 animate-fadeIn">
            {remainingTips.map((tip) => (
              <div key={tip.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6 animate-slideUp">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {tip.title}
                </h2>
                <p className="text-white/80 leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* View More / View Less Button */}
        <div className="text-center mt-10 flex justify-center gap-4">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 bg-white text-[#F46C06] font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              View More Tips ({remainingTips.length} more)
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="px-10 py-4 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 border-2 border-white"
            >
              Show Less
            </button>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Simple habits. Healthy skin. Happy summer.
          </p>
        </div>
      </div>

      {/* Add these styles in your global CSS or in a style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}