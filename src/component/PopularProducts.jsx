"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/data/products.json");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#FFF9F2]">
        <h2 className="text-center text-3xl font-bold text-[#0B3D6F]">
          Loading Products...
        </h2>
      </section>
    );
  }

  return (
    <section  id="products"  className="py-24 bg-[#FFF9F2]">
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

        {/* Products */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              {/* Image */}

              <div className="relative h-[380px] bg-[#FFF5EA] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />

              </div>

              {/* Body */}

              <div className="p-7">

                <span className="inline-block bg-[#F6B914]/20 text-[#F46C06] text-sm font-semibold px-4 py-1 rounded-full">
                  {product.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#0B3D6F]">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-6">

                  <div>

                    <p className="text-yellow-500 font-semibold text-lg">
                      ⭐ {product.rating}
                    </p>

                    <p className="text-3xl font-black text-[#F46C06] mt-2">
                      ${product.price}
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


        {/* View All Products Button */}

      
        </div>
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