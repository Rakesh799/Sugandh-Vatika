import { ArrowRight } from "lucide-react";

export default function AboutBrandSection() {
  return (
    <section className="py-6 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        <div className="relative">
          
          <img
            alt="Craftsmanship"
            className="rounded-3xl shadow-lg"
            data-alt="Handcrafted incense making process with natural materials"
            src="/images/craft/craft-man.png"
          />
        </div>
        
        <div className="space-y-8">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Since 1994</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The Art of <br />
            <span className="italic font-light">Handcrafted Purity</span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            SatvikSugandh was born from a simple desire: to bring the sacred, calming scents of ancient India into
            modern homes. Our process remains unchanged - we hand-roll every stick using traditional charcoal-free
            techniques and pure botanical extracts.
          </p>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            We believe that a fragrance isn&apos;t just a smell; it&apos;s a mood, a memory, and a way to reconnect with your
            inner self.
          </p>
          <button className="group flex items-center gap-4 text-primary font-bold text-lg transition-all hover:gap-6">
            Discover Our Full Story
            <ArrowRight size={16} />

          </button>
        </div>

      </div>
    </section>
  );
}
