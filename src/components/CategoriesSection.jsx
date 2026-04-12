
export default function CategoriesSection() {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Discover the Collections</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                {/* <!-- Category Card 1 --> */}
                <a className="group relative aspect-[3/4] overflow-hidden rounded-xl" href="#">
                    <img alt="Sandalwood"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        data-alt="Sandalwood blocks and incense sticks aesthetic arrangement"
                        src="/images/category-images/sandlewood.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute md:bottom-6 md:left-6 bottom-3 left-3">
                        <h3 className="text-white text-base md:text-xl font-semibold italic">Sandalwood</h3>
                    </div>
                </a>
                {/* <!-- Category Card 2 --> */}
                <a className="group relative aspect-[3/4] overflow-hidden rounded-xl" href="#">
                    <img alt="Rose" className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        data-alt="Fresh pink rose petals surrounding natural incense"
                        src="/images/category-images/roses.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute md:bottom-6 md:left-6 bottom-3 left-3">
                        <h3 className="text-white text-base md:text-xl font-semibold italic">Rose</h3>
                    </div>
                </a>
                {/* <!-- Category Card 3 --> */}
                <a className="group relative aspect-[3/4] overflow-hidden rounded-xl" href="#">
                    <img alt="Lavender" className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        data-alt="Dried lavender sprigs and purple themed wellness products"
                        src="/images/category-images/lavender.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute md:bottom-6 md:left-6 bottom-3 left-3">
                        <h3 className="text-white text-base md:text-xl font-semibold italic">Lavender</h3>
                    </div>
                </a>
                {/* <!-- Category Card 4 --> */}
                <a className="group relative aspect-[3/4] overflow-hidden rounded-xl" href="#">
                    <img alt="Spiritual"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        data-alt="Sacred spiritual setup with candles and meditation props"
                        src="/images/category-images/spiritual.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute md:bottom-6 md:left-6 bottom-3 left-3">
                        <h3 className="text-white text-base md:text-xl font-semibold italic">Spiritual</h3>
                    </div>
                </a>
                {/* <!-- Category Card 5 --> */}
                <a className="group relative aspect-[3/4] overflow-hidden rounded-xl" href="#">
                    <img alt="Gifts" className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        data-alt="Elegant premium wooden gift box for incense"
                        src="/images/category-images/gift-packs.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute md:bottom-6 md:left-6 bottom-3 left-3">
                        <h3 className="text-white text-base md:text-xl font-semibold italic">Gift Packs</h3>
                    </div>
                </a>
            </div>
        </section>
  )
}

