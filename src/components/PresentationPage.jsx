import TopNav from "./TopNav.jsx";
import Hero from "./sections/Hero.jsx";
import WaveSeparator from "./shape/WaveSeparator.jsx";
import Stats from "./sections/Stats.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import FAQ from "./sections/FAQ.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./Footer.jsx";

export default function PresentationPage() {
  return (
    <div className="w-full min-h-screen overflow-x-clip">
      <TopNav />

      {/* HERO */}
      <Hero />
      {/* волна в цвет следующего блока */}
      <WaveSeparator color="#eff6ff" />

      {/* STATS */}
      <Stats />
      {/* белая волна к белой секции */}
      <WaveSeparator flip color="#ffffff" />

      {/* FEATURES */}
      <Features />

      {/* Pricing */}
      <section id="pricing" className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <Pricing />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-blue-50/60">
        <div className="container mx-auto px-4 py-20">
          <FAQ />
        </div>
      </section>
      <WaveSeparator flip color="#ffffff" />

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
