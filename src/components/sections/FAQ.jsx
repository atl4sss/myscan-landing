import React, { useState } from "react";
import SectionReveal from "../SectionReveal.jsx";

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white p-4 md:p-5 shadow-sm ring-1 ring-blue-900/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold text-blue-900 flex items-center justify-between"
      >
        <span>{q}</span>
        <span className="ml-4 text-blue-700">{open ? "–" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-blue-900/70">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  const data = [
    {
      q: "Can I upload photos from my phone?",
      a: "Yes — as long as the photo meets quality requirements (good lighting, no glare, full image in frame).",
    },
    {
      q: "Do I need the original file from the scanner?",
      a: "No. A clear screen photo is acceptable if it’s sharp, not cropped, and without glare.",
    },
    {
      q: "How long does the analysis take?",
      a: "Usually from a few seconds up to a minute, depending on server load and device performance.",
    },
    {
      q: "Can I use older images?",
      a: "Yes, provided they are of sufficient quality and meet the technical requirements.",
    },
    {
      q: "What should I do if I doubt the result?",
      a: "We strongly recommend consulting a medical specialist. The system supports decision‑making and is not a substitute for a clinical diagnosis.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <SectionReveal>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-6 text-blue-900">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-blue-900/60 mb-10 text-sm">
          Answers to the most common questions about photo uploads, formats and usage.
        </p>
      </SectionReveal>

      <div className="grid gap-4 md:grid-cols-2">
        {data.map((x, i) => (
          <SectionReveal key={i} delay={i * 0.05}>
            <Item q={x.q} a={x.a} />
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
  