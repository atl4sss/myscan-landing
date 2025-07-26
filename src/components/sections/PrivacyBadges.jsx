import { Shield, Lock, Server } from "lucide-react";
import SectionReveal from "../SectionReveal.jsx";

export default function PrivacyBadges() {
  const items = [
    { icon: <Lock size={18} />,   text: "Encryption in transit & at rest" },
    { icon: <Shield size={18} />, text: "Data minimization & anonymization" },
    { icon: <Server size={18} />, text: "On‑device pre‑processing" },
  ];
  return (
    <section className="bg-blue-50/60">
      <div className="container mx-auto px-4 py-10">
        <SectionReveal>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {items.map((x, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow ring-1 ring-blue-900/10 text-blue-900/80">
                <span className="text-blue-700">{x.icon}</span>
                <span className="text-sm">{x.text}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
