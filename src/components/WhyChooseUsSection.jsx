import { Clock4, Sparkles, Sprout, Trees } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-primary/5 dark:bg-white/5 py-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-background-dark shadow-xl shadow-amber-900/20 border border-brown/30">
          <span className="mb-4">
          <Sprout />
          </span>
          <h3 className="font-bold mb-2">Natural Ingredients</h3>
          <p className="text-sm text-slate-500 font-light">
            Pure resins, herbs, and essential oils sourced responsibly.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-background-dark shadow-xl shadow-amber-900/20 border border-brown/30">
          <span className="mb-4">
          <Sparkles />
          </span>
          <h3 className="font-bold mb-2">Handcrafted Fragrance</h3>
          <p className="text-sm text-slate-500 font-light">Artisanal methods passed through generations.</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-background-dark shadow-xl shadow-amber-900/20 border border-brown/30">
          <span className="mb-4">
          <Clock4 />
          </span>
          <h3 className="font-bold mb-2">Long Lasting Aroma</h3>
          <p className="text-sm text-slate-500 font-light">
            Consistent burn and lingering subtle scents for hours.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-background-dark shadow-xl shadow-amber-900/20 border border-brown/30">
          <span className="mb-4">
          <Trees />
          </span>
          <h3 className="font-bold mb-2">Eco Friendly</h3>
          <p className="text-sm text-slate-500 font-light">
            Sustainable packaging and zero-waste philosophy.
          </p>
        </div>
      </div>
    </section>
  );
}
