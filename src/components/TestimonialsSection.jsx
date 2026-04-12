export default function TestimonialsSection() {
  return (
    <section className="py-6 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 italic">Voices of Tranquility</h2>
        <p className="text-slate-500">Shared experiences from our community</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-10 bg-white rounded-2xl shadow-xl shadow-orange-900/20 border border-orange-100/50 space-y-6">
          <div className="flex items-center gap-4">
            <img
              alt="A"
              className="h-12 w-12 rounded-full border-2 border-primary/20"
              data-alt="User profile portrait of a smiling woman"
              src="/images/testimonials/aditi.png"
            />
            <div>
              <p className="font-bold">Aditi Sharma</p>
              <p className="text-xs text-slate-400">Delhi, India</p>
            </div>
          </div>
          <p className="italic text-slate-600">
            &quot;The Mysore Sandalwood sticks are truly divine. I&apos;ve tried many brands, but the purity and
            longevity of SatvikSugandh are unmatched.&quot;
          </p>
        </div>
        <div className="p-10 bg-white rounded-2xl shadow-xl shadow-orange-900/20 border border-orange-100/50 space-y-6">
          <div className="flex items-center gap-4">
            <img
              alt="R"
              className="h-12 w-12 rounded-full border-2 border-primary/20"
              data-alt="User profile portrait of a calm man"
              src="/images/testimonials/rohan.png"
            />
            <div>
              <p className="font-bold">Rohan Mehta</p>
              <p className="text-xs text-slate-400">Mumbai, India</p>
            </div>
          </div>
          <p className="italic text-slate-600">
            &quot;I use the Spiritual Collection every morning for my meditation. It transforms my living room into a
            serene temple space.&quot;
          </p>
        </div>
        <div className="p-10 bg-white rounded-2xl shadow-xl shadow-orange-900/20 border border-orange-100/50 space-y-6">
          <div className="flex items-center gap-4">
            <img
              alt="P"
              className="h-12 w-12 rounded-full border-2 border-primary/20"
              data-alt="User profile portrait of a young professional woman"
              src="/images/testimonials/priya.png"
            />
            <div>
              <p className="font-bold">Priya Iyer</p>
              <p className="text-xs text-slate-400">Bangalore, India</p>
            </div>
          </div>
          <p className="italic text-slate-600">
            &quot;Excellent packaging and high-quality incense. These make the perfect gifts for housewarmings and
            festivals.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
