import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../SectionReveal.jsx";

// ваши скриншоты в /public/screenshots
const IMAGES = ["/screenshots/1.png", "/screenshots/2.png", "/screenshots/3.png"];

// Единая ширина «телефона»
const PHONE_WIDTH = "w-48 sm:w-56 md:w-60 lg:w-64"; // стало чуть меньше и ровнее

export default function Gallery() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setI((v) => (v + 1) % IMAGES.length);

  return (
    <section className="bg-blue-50/60" id="gallery">
      <div className="container mx-auto px-4 py-12 md:py-16">{/* меньше вертикальных отступов */}
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            App Screens
          </h2>
          <p className="mt-2 text-center text-blue-900/60 text-sm">
            A quick look at the core screens of MyScan.
          </p>
        </SectionReveal>

        {/* Компактный стейдж */}
        <div className="mt-8 relative max-w-3xl mx-auto">{/* было 5xl → 3xl */}
          <div className="rounded-2xl bg-white shadow-lg ring-1 ring-blue-900/10 px-4 md:px-6 py-6">{/* меньше padding и скругление */}
            <div className="relative flex justify-center items-center">
              {/* стрелки внутри карточки, компактнее */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 md:left-3 p-2 rounded-full bg-white shadow ring-1 ring-blue-900/10 hover:shadow-md"
              >
                <ChevronLeft />
              </button>

              {/* «Телефон» фиксированного размера с едиными пропорциями */}
              <div className={`relative ${PHONE_WIDTH} aspect-[9/19] rounded-3xl ring-2 ring-blue-100 shadow-2xl overflow-hidden`}>
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={IMAGES[i]}
                    src={IMAGES[i]}
                    alt={`App screen ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-contain bg-white"
                    initial={{ opacity: 0, x: 35 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -35 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-blue-900/5" />
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 md:right-3 p-2 rounded-full bg-white shadow ring-1 ring-blue-900/10 hover:shadow-md"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Точки-пейджер */}
          <div className="mt-3 flex justify-center gap-2">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === i ? "bg-blue-600" : "bg-blue-300 hover:bg-blue-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
