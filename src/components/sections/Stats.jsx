import { FlaskConical, Microscope, Timer, ShieldCheck } from "lucide-react";
import SectionReveal from "../SectionReveal.jsx";

const Item = ({ icon, title, text }) => (
  <SectionReveal>
    <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-blue-900/5">
      <div className="text-blue-700 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      <p className="mt-1 text-blue-900/70 leading-relaxed text-sm">{text}</p>
    </div>
  </SectionReveal>
);

export default function Stats() {
  return (
    <section className="bg-blue-50/60">
      <div className="container mx-auto px-4 py-14">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-900">
            MVP Highlights
          </h2>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Item
            icon={<FlaskConical size={30} />}
            title="MVP Stage"
            text="Core user flows validated with clinicians; focused on quality of analysis and UX."
          />
          <Item
            icon={<Microscope size={30} />}
            title="Modalities"
            text="CT Lungs, OCT Retina, MRI Brain — initial set for early testing."
          />
          <Item
            icon={<Timer size={30} />}
            title="Analysis Time"
            text="~15 s per image (device‑dependent); optimized pipeline, on‑device pre‑processing."
          />
          <Item
            icon={<ShieldCheck size={30} />}
            title="Privacy"
            text="Data minimization, anonymized uploads, encryption in transit & at rest."
          />
        </div>

        <p className="mt-6 text-center text-blue-900/60 text-sm">
          Quantitative metrics will be published after the public launch.
        </p>
      </div>
    </section>
  );
}
