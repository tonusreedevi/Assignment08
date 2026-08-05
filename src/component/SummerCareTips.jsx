import Image from "next/image";
import { FaSun, FaWater, FaLeaf, FaShieldAlt, FaClock, FaAppleAlt } from "react-icons/fa";
import { MdSpa, MdWbSunny } from "react-icons/md";

export default function SummerCareTips() {
  // Static blog posts data
  const summerTips = [
    {
      id: 1,
      title: "Essential Sun Protection Guide",
      excerpt: "Learn how to protect your skin from harmful UV rays with the right SPF and application techniques for all skin types.",
      category: "Skincare",
      image: "/images/sun-protection.jpg",
      author: "Dr. Sarah Johnson",
      date: "June 15, 2026",
      readTime: "5 min read",
      tags: ["SPF", "UV Protection", "Sunscreen"]
    },
    {
      id: 2,
      title: "Hydration Secrets for Glowing Skin",
      excerpt: "Discover the best ways to keep your skin hydrated and radiant during the hot summer months with these expert tips.",
      category: "Hydration",
      image: "/images/hydration.jpg",
      author: "Emma Wilson",
      date: "June 12, 2026",
      readTime: "4 min read",
      tags: ["Hydration", "Water Intake", "Glowing Skin"]
    },
    {
      id: 3,
      title: "After-Sun Care Routine",
      excerpt: "Essential steps to soothe and repair your skin after a day in the sun for lasting health and comfort.",
      category: "Aftercare",
      image: "/images/after-sun.jpg",
      author: "Dr. Michael Chen",
      date: "June 10, 2026",
      readTime: "6 min read",
      tags: ["Soothing", "Aloe Vera", "Repair"]
    },
    {
      id: 4,
      title: "Best Foods for Summer Skin",
      excerpt: "Nourish your skin from within with these summer superfoods packed with vitamins and antioxidants.",
      category: "Nutrition",
      image: "/images/summer-foods.jpg",
      author: "Nutritionist Lisa Park",
      date: "June 8, 2026",
      readTime: "3 min read",
      tags: ["Nutrition", "Antioxidants", "Healthy Eating"]
    },
    {
      id: 5,
      title: "Best Time to Apply Sunscreen",
      excerpt: "Maximize your sun protection by understanding the optimal timing and reapplication schedule for maximum effectiveness.",
      category: "Skincare",
      image: "/images/sunscreen-timing.jpg",
      author: "Dr. Amanda Foster",
      date: "June 5, 2026",
      readTime: "4 min read",
      tags: ["Timing", "Reapplication", "Protection"]
    },
    {
      id: 6,
      title: "Natural Summer Skincare Remedies",
      excerpt: "Explore natural ingredients and DIY remedies to keep your skin healthy and glowing all summer long.",
      category: "Natural Care",
      image: "/images/natural-remedies.jpg",
      author: "Herbalist Maria Rodriguez",
      date: "June 1, 2026",
      readTime: "7 min read",
      tags: ["Natural", "DIY", "Organic"]
    }
  ];

  const categories = ["All Tips", "Skincare", "Hydration", "Nutrition", "Aftercare", "Natural Care"];

  return (
    <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <MdWbSunny className="text-[#F46C06] text-5xl animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black text-[#0B3D6F]">
              Summer Care Tips
            </h2>
            <MdWbSunny className="text-[#F46C06] text-5xl animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your ultimate guide to staying protected, hydrated, and glowing all summer long
          </p>
          <div className="w-24 h-1 bg-[#F46C06] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto min-h-[300px] bg-gradient-to-br from-orange-100 to-yellow-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaSun className="text-[#F46C06] text-8xl opacity-30" />
                </div>
                <div className="absolute top-4 left-4 bg-[#F46C06] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#F46C06] font-semibold text-sm uppercase tracking-wider">
                  Ultimate Guide
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-[#0B3D6F] mt-3 mb-4">
                  Complete Summer Skin Protection Protocol
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Discover the science-backed approach to protecting your skin from sun damage, 
                  including the latest SPF technologies, application techniques, and lifestyle changes 
                  that make a real difference.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FFF9F2] rounded-full flex items-center justify-center">
                      <FaSun className="text-[#F46C06]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0B3D6F]">Dr. Emily Carter</p>
                      <p className="text-xs text-gray-500">June 20, 2026 • 8 min read</p>
                    </div>
                  </div>
                  <button className="bg-[#F46C06] hover:bg-[#d65b05] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Read Full Guide →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2.5 rounded-full font-semibold transition-colors ${
                index === 0 
                  ? 'bg-[#F46C06] text-white hover:bg-[#d65b05]' 
                  : 'bg-white text-[#0B3D6F] border-2 border-[#0B3D6F] hover:bg-[#0B3D6F] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summerTips.map((tip) => (
            <article 
              key={tip.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                {tip.id === 1 && <FaShieldAlt className="text-[#F46C06] text-6xl opacity-40" />}
                {tip.id === 2 && <FaWater className="text-[#0B3D6F] text-6xl opacity-40" />}
                {tip.id === 3 && <MdSpa className="text-green-500 text-6xl opacity-40" />}
                {tip.id === 4 && <FaAppleAlt className="text-red-500 text-6xl opacity-40" />}
                {tip.id === 5 && <FaClock className="text-purple-500 text-6xl opacity-40" />}
                {tip.id === 6 && <FaLeaf className="text-green-600 text-6xl opacity-40" />}
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#F46C06]">
                  {tip.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                  {tip.id === 1 && <FaShieldAlt className="text-[#F46C06] text-xl" />}
                  {tip.id === 2 && <FaWater className="text-[#0B3D6F] text-xl" />}
                  {tip.id === 3 && <MdSpa className="text-green-500 text-xl" />}
                  {tip.id === 4 && <FaAppleAlt className="text-red-500 text-xl" />}
                  {tip.id === 5 && <FaClock className="text-purple-500 text-xl" />}
                  {tip.id === 6 && <FaLeaf className="text-green-600 text-xl" />}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{tip.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{tip.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0B3D6F] mb-3 group-hover:text-[#F46C06] transition-colors line-clamp-2">
                  {tip.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {tip.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tip.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#FFF9F2] text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#F46C06] to-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {tip.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-[#0B3D6F]">{tip.author}</span>
                  </div>
                  <button className="text-[#F46C06] font-semibold text-sm hover:text-[#d65b05] transition-colors group-hover:translate-x-1 transform inline-flex items-center gap-1">
                    Read More
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-[#F46C06] to-orange-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Get Weekly Summer Care Tips
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for exclusive summer skincare advice, product recommendations, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="bg-[#0B3D6F] hover:bg-[#092d52] text-white px-8 py-4 rounded-full font-semibold transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 10,000+ subscribers • No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}