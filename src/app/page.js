

import "./globals.css";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import PopularProducts from "@/component/PopularProducts";
import SummerCareTips from "@/component/SummerCareTips";
import TopBrands from "@/component/TopBrands";
export default function Home() {
  return (
    <div >
      <main >
      <Hero />
      <PopularProducts />
      <SummerCareTips />
      <TopBrands />
      </main>
    </div>
  );
}
