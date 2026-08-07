import Image from "next/image";
import { FaStar, FaShoppingBag, FaHeart, FaSun, FaLeaf, FaWater, FaShieldAlt } from "react-icons/fa";

export default function TopBrands() {
  const brands = [
    {
      id: 1,
      name: "Supergoop!",
      category: "Mineral Sunscreen",
      description: "Revolutionary mineral sunscreens with weightless feel. Their iconic Unseen Sunscreen is a cult favorite.",
      rating: 4.9,
      reviews: 8452,
      products: 67,
      logo: "/images/brands/supergoop.png",
      image: "images/products/7.jpg",
      colors: ["#FF6B35", "#FF8A5C", "#FFB088"],
      badge: "Bestseller",
      badgeColor: "bg-orange-500",
      icon: FaSun
    },
    {
      id: 2,
      name: "Coola",
      category: "Organic Suncare",
      description: "Organic, sustainable sunscreens with SPF 50+. Their Classic Face Sunscreen is dermatologist-recommended.",
      rating: 4.8,
      reviews: 6234,
      products: 52,
      logo: "/images/brands/coola.png",
      image: "/images/brands/coola.jpg",
      colors: ["#2ECC71", "#58D68D", "#82E0AA"],
      badge: "Organic",
      badgeColor: "bg-green-500",
      icon: FaLeaf
    },
    {
      id: 3,
      name: "Sun Bum",
      category: "Beach Essentials",
      description: "Premium beach sunscreens with nourishing ingredients. Made for those who live in the sun.",
      rating: 4.7,
      reviews: 7891,
      products: 94,
      logo: "/images/brands/sunbum.png",
      image: "/images/brands/sunbum.jpg",
      colors: ["#F39C12", "#F5B041", "#F7DC6F"],
      badge: "Popular",
      badgeColor: "bg-yellow-500",
      icon: FaSun
    },
    {
      id: 4,
      name: "EltaMD",
      category: "Dermatologist Suncare",
      description: "Doctor-developed sunscreens with UV protection and skin-nourishing ingredients. Trusted by dermatologists.",
      rating: 4.9,
      reviews: 9345,
      products: 48,
      logo: "/images/brands/eltamd.png",
      image: "/images/brands/eltamd.jpg",
      colors: ["#1A5276", "#2471A3", "#5DADE2"],
      badge: "Medical Grade",
      badgeColor: "bg-blue-600",
      icon: FaShieldAlt
    },

  ];

  return (
    <section className="bg-[#FFF9F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="bg-[#F46C06]/10 p-3 rounded-full">
            
            </div>
            <h1 className="text-5xl  md:text-4xl font-black text-[#0B3D6F]">
              Top Summer Brands
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most trusted sunscreen and skincare brands for summer protection
          </p>
          <div className="w-20 h-1 bg-[#F46C06] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {brands.map((brand) => {
            const IconComponent = brand.icon;
            return (
              <div
                key={brand.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Brand Header with Gradient */}
                <div 
                  className="relative h-48 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${brand.colors[0]}, ${brand.colors[2]})`
                  }}
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full"></div>
                  </div>

                  {/* Brand Icon/Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <IconComponent className="text-4xl" />
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${brand.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm`}>
                    {brand.badge}
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 group/fav">
                    <FaHeart className="text-gray-400 group-hover/fav:text-red-500 transition-colors text-sm" />
                  </button>

                  {/* Products Count */}
                  <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                    {brand.products} Products
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-sm font-bold text-[#0B3D6F]">{brand.rating}</span>
                    <span className="text-xs text-gray-500">({brand.reviews.toLocaleString()})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Name & Category */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-[#0B3D6F] group-hover:text-[#F46C06] transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-500">{brand.category}</p>
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
                          className="w-5 h-5 rounded-full border-2 border-white shadow-sm hover:scale-125 transition-transform duration-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-[#F46C06] hover:bg-[#d85b03] text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95">
                      Shop Now
                    </button>
                    <button className="px-4 py-2.5 border-2 border-[#F46C06] text-[#F46C06] rounded-full hover:bg-[#F46C06] hover:text-white transition-all duration-300 text-sm font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-95">
                      Learn
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Brands Button */}
   
      </div>
    </section>
  );
}