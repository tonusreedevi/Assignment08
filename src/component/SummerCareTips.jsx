import {
  FaSun,
  FaTint,
  FaShieldAlt,
  FaLeaf,
  FaAppleAlt,
} from "react-icons/fa";

export default function SummerCareTips() {
  return (
    <section className="bg-[#FFF9F2] py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <FaSun className="text-6xl text-[#F46C06] mx-auto mb-5" />

          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3D6F] mb-4">
            Summer Care Tips
          </h1>

          <p className="text-gray-600 text-lg">
            Keep your skin healthy, hydrated, and glowing throughout the
            summer with these easy everyday habits.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <p className="text-gray-700 leading-8">
            Summer brings sunshine, vacations, and outdoor adventures, but it
            also exposes your skin to strong UV rays, heat, and dehydration.
            Following a simple skincare routine can help protect your skin and
            keep it looking fresh all season long.
          </p>
        </div>

        {/* Tip 1 */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-[#F46C06] text-3xl" />
            <h2 className="text-2xl font-bold text-[#0B3D6F]">
              Wear Sunscreen Every Day
            </h2>
          </div>

          <p className="text-gray-700 leading-8">
            Apply a broad-spectrum sunscreen with SPF 30 or higher at least
            15–20 minutes before going outside. Reapply every two hours,
            especially after swimming or sweating.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaTint className="text-sky-500 text-3xl" />
            <h2 className="text-2xl font-bold text-[#0B3D6F]">
              Stay Hydrated
            </h2>
          </div>

          <p className="text-gray-700 leading-8">
            Drink plenty of water throughout the day. Proper hydration helps
            maintain healthy skin and prevents dryness caused by hot weather.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaLeaf className="text-green-600 text-3xl" />
            <h2 className="text-2xl font-bold text-[#0B3D6F]">
              Moisturize After Sun Exposure
            </h2>
          </div>

          <p className="text-gray-700 leading-8">
            After spending time outdoors, cleanse your skin gently and apply a
            lightweight moisturizer or aloe vera gel to soothe and replenish
            moisture.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-4">
            <FaAppleAlt className="text-red-500 text-3xl" />
            <h2 className="text-2xl font-bold text-[#0B3D6F]">
              Eat Fresh Fruits & Vegetables
            </h2>
          </div>

          <p className="text-gray-700 leading-8">
            Watermelon, cucumber, berries, oranges, and leafy vegetables are
            rich in vitamins and antioxidants that nourish your skin from the
            inside out.
          </p>
        </div>

      </div>
    </section>
  );
}