import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(id) {
  try {
    const res = await fetch("http://localhost:3000/data/products.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const products = await res.json();
    
    // Ensure products is an array
    if (!Array.isArray(products)) {
      throw new Error("Products data is not an array");
    }

    return products.find((product) => product.id === Number(id));
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductDetails({ params }) {
  // In Next.js 15+, params is a Promise that needs to be awaited
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-[#FFF9F2] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex justify-center">
            <div className="relative w-full h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="bg-orange-100 text-[#F46C06] px-4 py-2 rounded-full font-semibold">
              {product.category}
            </span>

            <h1 className="text-5xl font-black text-[#0B3D6F] mt-6">
              {product.name}
            </h1>

            <p className="text-xl text-gray-500 mt-4">
              Brand: <span className="font-semibold">{product.brand}</span>
            </p>

            <p className="mt-8 text-gray-600 leading-8">
              {product.description}
            </p>

            <div className="mt-10 space-y-4">
              <h2 className="text-2xl">
                ⭐ {product.rating}
              </h2>

              <h2 className="text-2xl">
                Stock: {product.stock}
              </h2>

              <h2 className="text-5xl font-black text-[#F46C06]">
                ${product.price}
              </h2>
            </div>

            <button className="mt-10 bg-[#F46C06] hover:bg-[#d65b05] text-white px-10 py-4 rounded-full text-lg font-semibold transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}