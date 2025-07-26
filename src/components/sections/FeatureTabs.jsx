// src/components/sections/FeatureTabs.jsx
import { useState } from "react";
import {
  Upload,
  Brain,
  FileText,
  CheckCircle2,
  ArrowRight,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../SectionReveal.jsx";

// Для КАЖДОГО шага есть свой скрин (img) и подпись (alt)
const steps = [
  {
    key: "upload",
    title: "Upload",
    icon: <Upload size={18} />,
    lead:
      "Pick an image from your gallery or camera. We guide you to capture a clean, glare‑free photo.",
    bullets: [
      "Full image in frame (no cropping)",
      "Even lighting, no glare",
      "Lossless format preferred",
    ],
    img: "/flow/upload.png",
    alt: "Upload screen",
  },
  {
    key: "ai",
    title: "AI Analysis",
    icon: <Brain size={18} />,
    lead:
      "On‑device pre‑processing + server‑side inference. Optimized for clarity and speed.",
    bullets: [
      "Pre‑processing on device",
      "Secure upload with encryption",
      "Model‑specific pipelines",
    ],
    img: "/flow/ai.png",
    alt: "AI analysis screen",
  },
  {
    key: "result",
    title: "Result",
    icon: <CheckCircle2 size={18} />,
    lead:
      "Clear label with probability and a short explainer. Helpful notes for clinicians.",
    bullets: [
      "Readable label & probability",
      "Short clinical explainer",
      "Share or save instantly",
    ],
    img: "/flow/result.png",
    alt: "Result screen",
  },
  {
    key: "report",
    title: "Report",
    icon: <FileText size={18} />,
    lead:
      "Generate a doctor‑ready PDF with image, symptoms and findings for your appointment.",
    bullets: [
      "Clean PDF layout",
      "Symptoms + image + findings",
      "Easy to print or send",
    ],
    img: "/flow/report.png",
    alt: "Report screen",
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState("upload");
  const current = steps.find((s) => s.key === active) || steps[0];

  return (
    <section id="flow" className="relative bg-white">
      {/* мягкий фон */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.06),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.06),transparent_35%)]" />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            How It Works
          </h2>
          <p className="mt-2 text-center text-blue-900/60 text-sm">
            From upload to doctor‑ready report in a few simple steps.
          </p>
        </SectionReveal>

        {/* табы‑пилюли */}
        <SectionReveal delay={0.05} className="mt-6">
          <div className="flex flex-wrap justify-center gap-2">
            {steps.map((s) => {
              const selected = s.key === active;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition
                    ${selected
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-blue-800/80 ring-1 ring-blue-900/10 hover:bg-blue-50"}
                  `}
                >
                  <span className={selected ? "text-white" : "text-blue-600"}>
                    {s.icon}
                  </span>
                  <span className="font-semibold">{s.title}</span>
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* карточка контента */}
        <SectionReveal
          key={current.key}
          delay={0.1}
          className="mt-8 rounded-3xl bg-white/80 backdrop-blur shadow-xl ring-1 ring-blue-900/10"
        >
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10 items-center">
            {/* левая колонка */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200/70">
                {current.icon}
                {current.title}
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-blue-900">
                {current.title} — simple & guided
              </h3>
              <p className="mt-2 text-blue-900/70">{current.lead}</p>

              <ul className="mt-4 space-y-2">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-blue-900/80">
                    <span className="mt-1 text-blue-600">
                      <Check size={16} />
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-blue-500 transition shadow-md"
              >
                Watch the demo <ArrowRight size={16} />
              </a>
            </div>

            {/* правая колонка — отдельная картинка для активного шага */}
            <div className="flex justify-center md:justify-end">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-40 sm:w-48 md:w-56 lg:w-60 aspect-[9/19] rounded-3xl bg-white shadow-2xl ring-2 ring-blue-100 overflow-hidden"
                >
                  <img
                    src={current.img || "/mockup.png"}
                    alt={current.alt || "App UI"}
                    className="object-cover w-full h-full"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-blue-900/5" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
