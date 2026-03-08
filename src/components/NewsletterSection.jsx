export default function NewsletterSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-brown rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display italic">Scent-sational Updates</h2>
          <p className="text-white/80 max-w-lg mx-auto">
            Join our inner circle for exclusive early access to new collections and soulful rituals delivered to your
            inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
            <input
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none backdrop-blur-sm"
              placeholder="Your Email Address"
              type="email"
            />
            <button className="bg-white text-brown px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
