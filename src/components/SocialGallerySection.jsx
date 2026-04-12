export default function SocialGallerySection() {
  return (
    <section className="py-6 px-6 max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col items-center justify-between mb-12">
        <h2 className="text-2xl font-bold">#SatvikMoments</h2>
        <a className="text-primary font-bold" href="#">
          @satviksugandh
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        <div className="aspect-square overflow-hidden bg-slate-100 group">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            data-alt="Lifestyle photo of lit incense in a modern apartment"
            src="/images/moments/moment-1.png"
            alt="moment-1"
          />
        </div>
        <div className="aspect-square overflow-hidden bg-slate-100 group">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            data-alt="Meditation corner with incense and yoga mat"
            src="/images/moments/moment-2.png"
            alt="moment-2"
          />
        </div>
        <div className="aspect-square overflow-hidden bg-slate-100 group">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            data-alt="Close up of hands rolling natural incense sticks"
            src="/images/moments/moment-3.png"
            alt="moment-3"
          />
        </div>
        <div className="aspect-square overflow-hidden bg-slate-100 group">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            data-alt="Gift box being unboxed in aesthetic setting"
            src="/images/moments/moment-4.png"
            alt="moment-4"
          />
        </div>
        <div className="aspect-square overflow-hidden bg-slate-100 group">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            data-alt="Tea ritual with incense sticks burning nearby"
            src="/images/moments/moment-5.png"
            alt="moment-5"
          />
        </div>
        <div className="aspect-square overflow-hidden bg-slate-100 group">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            data-alt="Minimalist wooden incense holder on white shelf"
            src="/images/moments/moment-6.png"
            alt="moment-6"
          />
        </div>
      </div>
    </section>
  );
}
