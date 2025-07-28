// src/components/TopNav.jsx
import { useState, useEffect } from "react";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

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
      {/* вот заменили max-w-7xl → max-w-screen-xl */}
      <div className="mx-auto max-w-screen-xl px-4">
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
            <a
              href="#features"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Contact
            </a>
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

          {/* Бургер‑меню для мобильных */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing",  label: "Pricing"  },
    { href: "#faq",      label: "FAQ"      },
    { href: "#contact",  label: "Contact"  },
    { href: "#demo",     label: "Watch Demo" },
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
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
