// src/components/PresentationPage.jsx

import TopNav from "./TopNav.jsx";
import Hero from "./sections/Hero.jsx";
import WaveSeparator from "./shape/WaveSeparator.jsx";
import Stats from "./sections/Stats.jsx";                 // MVP Highlights
import Features from "./sections/Features.jsx";
import FeatureTabs from "./sections/FeatureTabs.jsx";     // NEW
import Gallery from "./sections/Gallery.jsx";             // NEW
import UseCases from "./sections/UseCases.jsx";           // NEW
import PrivacyBadges from "./sections/PrivacyBadges.jsx"; // NEW
import VideoDemo from "./sections/VideoDemo.jsx";         // NEW
import Pricing from "./sections/Pricing.jsx";
import FAQ from "./sections/FAQ.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./Footer.jsx";

// NEW: ваши уникальные секции
import Roadmap from "./sections/Roadmap.jsx";
import Comparison from "./sections/Comparison.jsx";

export default function PresentationPage() {
  return (
    <div className="w-full min-h-screen overflow-x-clip">
      <TopNav />

      {/* HERO */}
      <Hero />
      <WaveSeparator color="#eff6ff" />

      {/* MVP HIGHLIGHTS */}
      <Stats />

      {/* ROADMAP (таймлайн). 
          Оборачиваем в контейнер с отрицательным margin-top, 
          чтобы убрать лишнее пространство сверху */}
      <WaveSeparator flip color="#ffffff" />
      <div className="-mt-8 md:-mt-12">
        <Roadmap />
      </div>

      {/* COMPARISON (таблица преимуществ) */}
      <WaveSeparator color="#eff6ff" />
      <Comparison />

      {/* ОСТАЛЬНЫЕ СЕКЦИИ */}
      <WaveSeparator flip color="#ffffff" />
      <Features />
      <FeatureTabs />
      <Gallery />
      <PrivacyBadges />
      <UseCases />

      {/* Видео-демо (замените ID на ваш) */}
      <VideoDemo youtubeId="2nKS7fzQ1dw" />

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
