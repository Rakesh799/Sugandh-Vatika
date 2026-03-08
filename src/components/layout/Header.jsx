import { Carrot, Menu, PersonStanding, Search, ShoppingBag, User } from "lucide-react";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-12">
          <a className="flex items-center gap-2 group" href="#">
            <img alt="SatvikSugandh Logo" className="h-10 w-10"
              data-alt="Minimalist geometric lotus flower logo design"
              src="/images/logo.jpg" />
            <span className="text-2xl font-bold tracking-tight text-primary font-display hidden md:inline">SatvikSugandh</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a className="hover:text-primary transition-colors" href="#">Fragrances</a>
            <a className="hover:text-primary transition-colors" href="#">Collections</a>
            <a className="hover:text-primary transition-colors" href="#">Our Story</a>
            <a className="hover:text-primary transition-colors" href="#">Gifts</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-brown/5 rounded-full px-4 py-2 w-64">
            <Search size={16} />
            <input className="bg-transparent border-none outline-none pl-2 focus:ring-0 text-sm w-full placeholder:text-slate-400"
              placeholder="Find your scent..." type="text" />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
              <User size={22} />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
              <ShoppingBag size={22} />
              <span
                className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brown text-[10px] text-white font-bold">2</span>
            </button>
            <button className="md:hidden p-2 hover:bg-primary/10 rounded-full transition-colors">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
