import SectionReveal from "../SectionReveal.jsx";
import { Check, X } from "lucide-react";

const Row = ({ label, a, b }) => (
  <div className="grid grid-cols-3 items-center py-3 px-4 odd:bg-blue-50/40">
    <div className="text-sm md:text-base font-medium text-blue-900/80">{label}</div>
    <div className="flex justify-center">
      {a === true ? (
        <Check className="text-blue-600" />
      ) : a === false ? (
        <X className="text-blue-400" />
      ) : (
        <span className="text-blue-900/60 text-sm">{a}</span>
      )}
    </div>
    <div className="flex justify-center">
      {b === true ? (
        <Check className="text-blue-600" />
      ) : b === false ? (
        <X className="text-blue-400" />
      ) : (
        <span className="text-blue-900/60 text-sm">{b}</span>
      )}
    </div>
  </div>
);

export default function Comparison() {
  return (
    <section id="comparison" className="relative bg-blue-50/60">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            Why MyScan?
          </h2>
          <p className="mt-2 text-center text-blue-900/60 text-sm">
            A quick comparison with just sharing images in a messenger.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="mt-8 max-w-4xl mx-auto rounded-2xl bg-white shadow-xl ring-1 ring-blue-900/10 overflow-hidden">
            <div className="grid grid-cols-3 px-4 py-4 bg-white/80">
              <div />
              <div className="text-center font-semibold text-blue-900">MyScan</div>
              <div className="text-center font-semibold text-blue-900">Just images</div>
            </div>

            <Row label="Clear label & probability" a={true} b={"Depends"} />
            <Row label="Short clinical explainer" a={true} b={false} />
            <Row label="On‑device pre‑processing" a={true} b={false} />
            <Row label="Doctor‑ready PDF report" a={true} b={false} />
            <Row label="Secure transfer (encryption)" a={"In transit & at rest"} b={"Not guaranteed"} />
            <Row label="Works offline (some models)" a={"Limited"} b={false} />
          </div>

          <p className="mt-3 text-center text-xs text-blue-900/50">
            Quantitative benchmarks will be published at public launch.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
