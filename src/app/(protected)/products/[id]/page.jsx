import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(id) {
  const res = await fetch("https://suncart-sepia.vercel.app/data/products.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return products.find((product) => product.id === Number(id));
}

export default async function ProductDetails({ params }) {
  // Next.js 16: params is a Promise
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF9F2] py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 bg-white shadow-xl rounded-3xl overflow-hidden">

          {/* Product Image */}
          <div className="relative h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="p-8 md:p-12 flex flex-col justify-center">

            <p className="text-[#F46C06] font-semibold uppercase tracking-wider">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-[#0B3D6F] mt-3">
              {product.name}
            </h1>

            <p className="text-yellow-500 text-xl mt-5">
              ⭐ {product.rating}
            </p>

            <p className="text-4xl font-black text-[#F46C06] mt-5">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-7 mt-6">
              {product.description}
            </p>

            <button className="mt-8 bg-[#0B3D6F] hover:bg-[#082D50] text-white py-4 px-8 rounded-full font-semibold transition">
              Add to Cart
            </button>

          </div>
        </div>

      </div>
    </main>
  );
}