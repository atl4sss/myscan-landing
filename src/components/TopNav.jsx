// src/components/TopNav.jsx
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  // Отслеживаем прокрутку для переключения тени
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 inset-x-0 z-50
        bg-white/80 backdrop-blur-md
        transition-shadow duration-200
        ${scrolled ? "shadow-lg" : "shadow-sm"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Лого */}
          <a
            href="#hero"
            className="font-display text-2xl font-extrabold text-blue-600"
          >
            MyScan
          </a>

          {/* Меню для десктопа */}
          <nav className="hidden md:flex space-x-8">
            <ScrollLink
              to="features"
              smooth
              duration={300}
              className="cursor-pointer text-gray-800 hover:text-blue-600 transition"
            >
              Features
            </ScrollLink>
            <ScrollLink
              to="pricing"
              smooth
              duration={300}
              className="cursor-pointer text-gray-800 hover:text-blue-600 transition"
            >
              Pricing
            </ScrollLink>
            <ScrollLink
              to="faq"
              smooth
              duration={300}
              className="cursor-pointer text-gray-800 hover:text-blue-600 transition"
            >
              FAQ
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              duration={300}
              className="cursor-pointer text-gray-800 hover:text-blue-600 transition"
            >
              Contact
            </ScrollLink>
          </nav>

          {/* Кнопка CTA десктоп */}
          <div className="hidden md:block">
            <a
              href="#demo"
              className="rounded-full border border-blue-600 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600/20 transition"
            >
              Watch Demo
            </a>
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

// Простой бургер‑меню для мобильной версии
function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "features", label: "Features" },
    { to: "pricing", label: "Pricing" },
    { to: "faq", label: "FAQ" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-2 text-gray-800 hover:text-blue-600 focus:outline-none"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute right-4 top-full mt-2 w-44 bg-white/90 backdrop-blur-md shadow-lg rounded-lg overflow-hidden">
          <nav className="flex flex-col">
            {links.map(({ to, label }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth
                duration={300}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition"
                onClick={() => setOpen(false)}
              >
                {label}
              </ScrollLink>
            ))}
            <a
              href="#demo"
              className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition"
              onClick={() => setOpen(false)}
            >
              Watch Demo
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
