import { Activity, Scan, Brain } from "lucide-react";
import SectionReveal from "../SectionReveal.jsx";

const cases = [
  { title: "CT Lungs",  icon: <Activity />, text: "Pneumonia triage and other thoracic findings for early support." },
  { title: "OCT Retina", icon: <Scan />,    text: "CNV / DME / Drusen categories, clinician‑friendly results." },
  { title: "MRI Brain", icon: <Brain />,    text: "Glioma / Meningioma / Pituitary — compact summaries." },
];

export default function UseCases() {
  return (
    <section id="usecases" className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-blue-900">Use Cases</h2>
          <p className="mt-2 text-center text-blue-900/60 text-sm">
            Initial modalities available in the MVP for testing and feedback.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <SectionReveal key={c.title}>
              <div className="rounded-2xl bg-white p-8 shadow ring-1 ring-blue-900/10 hover:shadow-md transition">
                <div className="text-blue-700 mb-3">{c.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900">{c.title}</h3>
                <p className="mt-1 text-blue-900/70 text-sm leading-relaxed">{c.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
