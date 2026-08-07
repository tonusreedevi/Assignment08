"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/products.json");

        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`);
        }

        const data = await res.json();
        
        // Ensure data is an array before setting it
        if (Array.isArray(data)) {
          setProducts(data.slice(0, 3));
        } else {
          console.error("Data is not an array:", data);
          setProducts([]);
          setError("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
        setProducts([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-24 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0B3D6F]">
            Loading Products...
          </h2>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-24 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-red-500 text-lg">Error loading products</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </section>
    );
  }

  // Check if products is an array and has items
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <section className="py-24 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">No products available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#F46C06] font-semibold uppercase tracking-[4px]">
            Featured Collection
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0B3D6F] mt-3">
            Popular Products
          </h2>
          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-7">
            Discover our best-selling summer essentials at unbeatable prices.
            Shop the latest trends and enjoy exclusive offers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[380px] bg-[#FFF5EA] overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name || "Product"}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-7">
                <span className="inline-block bg-[#F6B914]/20 text-[#F46C06] text-sm font-semibold px-4 py-1 rounded-full">
                  {product.category || "Uncategorized"}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#0B3D6F]">
                  {product.name || "Product Name"}
                </h3>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <div className="flex items-center gap-1">
                      <svg 
                        className="w-5 h-5 text-yellow-500 fill-yellow-500" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold text-[#0B3D6F]">
                        {product.rating || "N/A"}
                      </span>
                    </div>

                    <p className="text-3xl font-black text-[#F46C06] mt-2">
                      ${product.price || "0.00"}
                    </p>
                  </div>

                  <Link href={`/products/${product.id}`}>
                    <button className="bg-[#F46C06] hover:bg-[#d65b05] text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center mt-14">
          <Link href="/products">
            <button className="bg-[#F46C06] hover:bg-[#d65b05] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 cursor-pointer">
              View All Products →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;