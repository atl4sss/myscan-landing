// src/components/LandingPage.jsx
import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="flex-1 grid place-items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Manage all your diagnostics
            <br className="hidden md:block" /> in one powerful app
          </h1>
          <p className="mt-6 text-blue-100 text-lg md:text-xl">
            AI‑powered medical image analysis — fast, accurate and secure.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow hover:shadow-lg transition" href="#get-started">
              Get Started
            </a>
            <a className="px-8 py-3 rounded-full border border-white/70 font-semibold hover:bg-white hover:text-blue-600 transition" href="#download">
              Download App
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-blue-100 py-6 text-center text-sm">
        © {new Date().getFullYear()} MyScan. All rights reserved.
      </footer>
    </main>
  );
}
