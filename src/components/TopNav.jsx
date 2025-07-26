// src/components/TopNav.jsx
export default function TopNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-3 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20">
          <div className="h-14 px-4 flex items-center justify-between text-white">
            {/* Лого */}
            <a href="#hero" className="font-display text-xl font-extrabold tracking-tight">
              MyScan
            </a>

            {/* Меню */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="hover:opacity-90">Features</a>
              <a href="#pricing"  className="hover:opacity-90">Pricing</a>
              <a href="#faq"      className="hover:opacity-90">FAQ</a>
              <a href="#contact"  className="hover:opacity-90">Contact</a>
            </div>

            {/* CTA для шоукейса (вместо Sign Up / Log In) */}
            <div className="hidden md:flex items-center gap-2">
                <a href="#demo" className="px-4 py-2 rounded-full bg-white/15 ring-1 ring-white/30 hover:bg-white/25 transition">
                    Watch Demo
                </a>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
