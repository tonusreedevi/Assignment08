import Image from "next/image";
import { FaStar, FaShoppingBag, FaHeart } from "react-icons/fa";

export default function TopBrands() {
  const brands = [
    {
      id: 1,
      name: "SunShield Pro",
      category: "Sunscreen & Protection",
      description: "Premium sun protection with SPF 50+ and broad-spectrum coverage for all skin types.",
      rating: 4.8,
      reviews: 1247,
      products: 45,
      logo: "/images/brands/sunshield-logo.png",
      image: "/images/brands/sunshield.jpg",
      colors: ["#F46C06", "#FF8C38", "#FFB366"],
      badge: "Best Seller",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Glow & Hydrate",
      category: "Hydration & Skincare",
      description: "Advanced hydration technology with natural ingredients for radiant, glowing skin.",
      rating: 4.9,
      reviews: 2034,
      products: 38,
      logo: "/images/brands/glow-logo.png",
      image: "/images/brands/glow.jpg",
      colors: ["#0B3D6F", "#1A5A8C", "#4A8AB5"],
      badge: "Top Rated",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "PureSun Naturals",
      category: "Natural & Organic",
      description: "Chemical-free, organic suncare products made with natural plant-based ingredients.",
      rating: 4.7,
      reviews: 892,
      products: 29,
      logo: "/images/brands/puresun-logo.png",
      image: "/images/brands/puresun.jpg",
      colors: ["#2D8B46", "#4CAF50", "#81C784"],
      badge: "Organic",
      badgeColor: "bg-green-600"
    },
    {
      id: 4,
      name: "Summer Luxe",
      category: "Luxury Suncare",
      description: "Premium luxury suncare with anti-aging benefits, vitamins, and exotic ingredients.",
      rating: 4.6,
      reviews: 1567,
      products: 52,
      logo: "/images/brands/summer-luxe-logo.png",
      image: "/images/brands/summer-luxe.jpg",
      colors: ["#6C3483", "#8E44AD", "#AF7AC5"],
      badge: "Luxury",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <section className="bg-[#FFF9F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaShoppingBag className="text-[#F46C06] text-3xl" />
            <h2 className="text-3xl md:text-4xl font-black text-[#0B3D6F]">
              Top Brands
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most trusted and popular suncare brands trusted by millions
          </p>
          <div className="w-20 h-1 bg-[#F46C06] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Brand Image / Gradient Background */}
              <div 
                className="relative h-48 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${brand.colors[0]}, ${brand.colors[1]})`
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300">
                  {/* Decorative Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                </div>

                {/* Brand Icon/Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-black text-4xl shadow-lg">
                    {brand.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>

                {/* Badge */}
                <div className={`absolute top-4 right-4 ${brand.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                  {brand.badge}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors group/fav">
                  <FaHeart className="text-gray-400 group-hover/fav:text-red-500 transition-colors" />
                </button>

                {/* Product Count */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  {brand.products} Products
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Brand Name & Rating */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B3D6F] group-hover:text-[#F46C06] transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-500">{brand.category}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-sm font-semibold text-[#0B3D6F]">{brand.rating}</span>
                    <span className="text-xs text-gray-400">({brand.reviews})</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {brand.description}
                </p>

                {/* Color Palette */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500 font-medium">Colors:</span>
                  <div className="flex gap-1.5">
                    {brand.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-[#F46C06] hover:bg-[#d65b05] text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors">
                    Shop Now
                  </button>
                  <button className="px-4 py-2.5 border-2 border-[#F46C06] text-[#F46C06] rounded-full hover:bg-[#F46C06] hover:text-white transition-colors text-sm font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

   
     
      </div>
    </section>
  );
}