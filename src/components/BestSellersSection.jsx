import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestSellersSection() {
  return (
    <section className="py-24 px-6 bg-primary/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold italic">Bestsellers</h2>
          <div className="flex gap-4">
            <button className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft />
            </button>
            <button className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 -mx-6 px-6">
          <div className="min-w-[300px] bg-white dark:bg-background-dark rounded-xl p-4">
            <img
              alt="Product"
              className="rounded-lg mb-4 w-full aspect-square object-cover"
              data-alt="Golden Glow Premium Incense pack visual"
              src="/images/bestsellers/bs1.png"
            />
            <h4 className="font-bold">Sacred Guggul</h4>
            <p className="text-primary font-bold">₹350</p>
          </div>
          <div className="min-w-[300px] bg-white dark:bg-background-dark rounded-xl p-4">
            <img
              alt="Product"
              className="rounded-lg mb-4 w-full aspect-square object-cover"
              data-alt="Royal Jasmine floral incense sticks packaging"
              src="/images/bestsellers/bs2.png"
            />
            <h4 className="font-bold">Royal Jasmine</h4>
            <p className="text-primary font-bold">₹499</p>
          </div>
          <div className="min-w-[300px] bg-white dark:bg-background-dark rounded-xl p-4">
            <img
              alt="Product"
              className="rounded-lg mb-4 w-full aspect-square object-cover"
              data-alt="Cedarwood and Pine forest aroma incense"
              src="/images/bestsellers/bs3.png"
            />
            <h4 className="font-bold">Himalayan Cedar</h4>
            <p className="text-primary font-bold">₹550</p>
          </div>
          <div className="min-w-[300px] bg-white dark:bg-background-dark rounded-xl p-4">
            <img
              alt="Product"
              className="rounded-lg mb-4 w-full aspect-square object-cover"
              data-alt="Floral infusion incense set for yoga"
              src="/images/bestsellers/bs4.png"
            />
            <h4 className="font-bold">Yoga Blend</h4>
            <p className="text-primary font-bold">₹425</p>
          </div>
        </div>
      </div>
    </section>
  );
}
