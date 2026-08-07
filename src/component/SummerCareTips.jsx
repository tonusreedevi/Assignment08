export default function SummerCareTips() {
  return (
    <section className="bg-[#F46C06] py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white/80 text-sm font-medium uppercase tracking-[4px]">
            Summer Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Summer Care Tips
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Keep your skin healthy, hydrated, and glowing throughout the summer with these simple everyday habits.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <p className="text-white/90 leading-relaxed text-lg">
            Summer brings sunshine, vacations, and outdoor adventures, but it also exposes your skin to strong UV rays, heat, and dehydration. Following a simple skincare routine can help protect your skin and keep it looking fresh all season long.
          </p>
        </div>

        {/* Tip 1 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-3">
            Wear Sunscreen Every Day
          </h2>
          <p className="text-white/80 leading-relaxed">
            Apply a broad-spectrum sunscreen with SPF 30 or higher at least 15–20 minutes before going outside. Reapply every two hours, especially after swimming or sweating. Don't forget often-missed spots like your ears, neck, and the tops of your feet.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-3">
            Stay Hydrated Throughout the Day
          </h2>
          <p className="text-white/80 leading-relaxed">
            Drink plenty of water throughout the day to maintain healthy skin and prevent dryness caused by hot weather. Aim for at least 8-10 glasses daily, and increase your intake if you're spending time outdoors or exercising.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-3">
            Moisturize After Sun Exposure
          </h2>
          <p className="text-white/80 leading-relaxed">
            After spending time outdoors, cleanse your skin gently and apply a lightweight moisturizer or aloe vera gel to soothe and replenish moisture. This helps repair any damage caused by sun exposure and keeps your skin soft and supple.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-3">
            Eat Fresh Fruits and Vegetables
          </h2>
          <p className="text-white/80 leading-relaxed">
            Watermelon, cucumber, berries, oranges, and leafy vegetables are rich in vitamins and antioxidants that nourish your skin from the inside out. A diet rich in these foods helps protect your skin against sun damage and keeps it looking vibrant.
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Simple habits. Healthy skin. Happy summer.
          </p>
        </div>
      </div>
    </section>
  );
}