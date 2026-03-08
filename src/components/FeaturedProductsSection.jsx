import { ArrowRight, ShoppingBag } from "lucide-react";

export default function FeaturedProductsSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold">Featured Fragrances</h2>
          <p className="text-slate-500 mt-2">Our most loved signature scents</p>
        </div>
        <a className="text-primary font-bold flex items-center gap-1 hover:underline underline-offset-4" href="#">
          View All <ArrowRight size={12} />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="group relative flex flex-col bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-primary/5">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Mysore Sandalwood"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-alt="Traditional sandalwood incense pack on marble surface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoJiIkIwqeDQPsjlm5Fdyi_vthGf1bbiqit3F2Ps6jyK3-zqEU0u6zHnngHCc6S1QrtjjxcoJedcBvqOIvDEsoiVmTl4_tG_B_aII25IP37vCdrJPI_Z9sWdgf7EMTsoC5ggxiS6wtnAP-Z8WjuTuRnJvYoeNh0x51y5RfTUahmXFiiS_bjHlpbIhB1QdpYFV6vn4jKUB6lgMVECHNvRzb84Fm38Shgb6nUPppdAy6OCYg7i61FbdOQz9pyj2sbjTldYeg7PJA6e8"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="material-symbols-outlined text-slate-900">visibility</span>
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="text-[10px] text-slate-400 font-bold ml-1">(42)</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Mysore Sandalwood</h3>
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">
              Pure Mysore sandalwood oil blended with sacred herbs.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-display font-bold text-primary">₹599</span>
              <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="group relative flex flex-col bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-primary/5">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Vedic Rose"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-alt="Rose petal infused incense sticks in elegant box"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY9CirHTE2-89m1NXJ6YdE3lVGkOR_donjzCOISr8gjlYebLH-F89dnyTUL1zoKRsPjlvJIO7R09DleutZYWyMvalKg3XN_huQQRJbmsMgtDOL595heFvRoVOS4OQLfrGl_UaNNT0-Mli5ut47R17TBmPWSNGnuWjmvQfm-ceP2fPUxu9jer2xQnywjjUpK0odGJSOANiFkrp3O6SskOV3SRi1juzREGyKaOJ-LV2WV33Sq1IkQtAeLu9BbVdar9GCJ8JYJi9IDIk"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="material-symbols-outlined text-slate-900">visibility</span>
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary">star</span>
              <span className="text-[10px] text-slate-400 font-bold ml-1">(35)</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Vedic Rose</h3>
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">
              The romantic essence of fresh Kannauj roses.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-display font-bold text-primary">₹450</span>
              <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="group relative flex flex-col bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-primary/5">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Temple Oudh"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-alt="Rich dark oudh incense sticks premium collection"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Qxxqj5Nd9E2rJvrku7g0-qBz_PLt6zl4nwXeIWabqHBMyhPbLsUJ0BFyad9VQo-mEaqotj4C-_r7xeA1sWELPu8HtL_TvaoYMDbNPIglCVW5xbMwmq1qvT13SY34T9Uj3BbyJ7XyOG6zWZVFruJRoOMLnrEymgH5O8fVm5oRrL6C24Q0IJ81RPVyFGEYJ5I0-LS7NW3oiq5gTgqUij01mz0S1pyjvzxOMtIJePiBONKSwegxd-gY6T964PBt-fcMwusu9bfPYNs"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="material-symbols-outlined text-slate-900">visibility</span>
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="text-[10px] text-slate-400 font-bold ml-1">(58)</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Temple Oudh</h3>
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">Sacred resinous notes for deep meditation.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-display font-bold text-primary">₹799</span>
              <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="group relative flex flex-col bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-primary/5">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Lavender Mist"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-alt="Lavender sprigs and calm mood wellness products"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbeJnVq9a1_M0UQH47n-koA6tfEJlApp0BoYmLsU2NxEhCQcbYEXjQ9Kxc-uDNzSi-Ru9rkXqBXA_1G-GZIMMy1KchO5zBvlRczE4bnj8bjKhBqxCw4uftVEXhcKifOmgItb-M1A666frGKI4e3lBDjWEgha4F-GdMckMtdhzE9RephMtLk4uAPzninxRZa7UzDGyaQyIN6NMno3IiqYwSarZJrewxH7oLvgO7Ly1ddsSHGMyq4Fjnnc9yfIuBNDtinqc5TFeGmQE"
            />
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="material-symbols-outlined text-slate-900">visibility</span>
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">star</span>
              <span className="material-symbols-outlined text-sm text-primary">star</span>
              <span className="text-[10px] text-slate-400 font-bold ml-1">(27)</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Lavender Mist</h3>
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">Calming essential oils of French lavender.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-display font-bold text-primary">₹425</span>
              <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
