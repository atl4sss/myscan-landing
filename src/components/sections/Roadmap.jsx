import SectionReveal from "../SectionReveal.jsx";
import { FlaskConical, UsersRound, Rocket, Check } from "lucide-react";

const steps = [
  {
    title: "MVP",
    icon: <FlaskConical size={18} />,
    chips: ["Core flows", "On‑device pre‑proc", "CT Lungs • OCT • MRI Brain"],
    text:
      "Validated with clinicians. Focus on quality of analysis and UX.",
  },
  {
    title: "Private Beta",
    icon: <UsersRound size={18} />,
    chips: ["Early hospitals", "Feedback loops", "Edge improvements"],
    text:
      "Structured pilots with partners to refine models and flows.",
  },
  {
    title: "Public Launch",
    icon: <Rocket size={18} />,
    chips: ["Docs & SDK", "More modalities", "Benchmarks & QA"],
    text:
      "Open availability with published metrics and extended coverage.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-white">
      {/* мягкий фон в клетку */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.05),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.05),transparent_40%)]" />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            Roadmap
          </h2>
          <p className="mt-2 text-center text-blue-900/60 text-sm">
            Where MyScan is today — and what’s next.
          </p>
        </SectionReveal>

        <div className="mt-10 relative">
          {/* соединительная линия на десктопе */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-blue-900/10" />

          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((s, idx) => (
              <SectionReveal key={s.title} delay={idx * 0.05}>
                <div className="relative rounded-2xl bg-white/90 backdrop-blur shadow-xl ring-1 ring-blue-900/10 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200/70">
                    {s.icon}
                    {s.title}
                  </div>

                  <p className="mt-4 text-sm text-blue-900/70">{s.text}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <li
                        key={c}
                        className="inline-flex items-center gap-1 rounded-full bg-white ring-1 ring-blue-900/10 px-3 py-1 text-xs text-blue-900/80"
                      >
                        <Check size={14} className="text-blue-600" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
