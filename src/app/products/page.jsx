"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-20 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-black text-center text-[#0B3D6F] mb-16">
          All Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="relative h-72">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-5">

                <h2 className="text-xl font-bold text-[#0B3D6F]">
                  {product.name}
                </h2>

                <p className="text-yellow-500 mt-2">
                  ⭐ {product.rating}
                </p>

                <p className="text-[#F46C06] font-bold text-2xl mt-2">
                  ${product.price}
                </p>

                <Link href={`/products/${product.id}`}>
                  <button className="w-full mt-5 bg-[#0B3D6F] text-white py-3 rounded-full hover:bg-[#082D50] transition">
                    View Details
                  </button>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}