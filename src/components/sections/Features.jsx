import { Smartphone, Wrench, ShieldCheck, Zap } from "lucide-react";
import SectionReveal from "../SectionReveal.jsx";

export default function Features() {
  const items = [
    { title: "Mobile Friendly",   text: "Optimized flows and fast rendering on any device.", icon: <Smartphone /> },
    { title: "Engineering Skills",text: "Robust models and reproducible pipelines.",         icon: <Wrench /> },
    { title: "Secure Transfer",   text: "End‑to‑end encryption for protected health data.",  icon: <ShieldCheck /> },
    { title: "Real‑time Results", text: "AI predictions in under 15 seconds.",               icon: <Zap /> },
  ];

  return (
    <section id="features" className="relative">
      {/* лёгкая сетка как фон */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,132,199,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(2,132,199,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="container mx-auto px-4 py-20">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-14 text-blue-900">
            Dynamic Mobile Apps For Innovative Minds
          </h2>
        </SectionReveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <SectionReveal key={f.title}>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-blue-900/10 hover:shadow-md transition">
                <div className="text-blue-700 mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{f.title}</h3>
                <p className="text-blue-900/70 leading-relaxed text-sm">{f.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
