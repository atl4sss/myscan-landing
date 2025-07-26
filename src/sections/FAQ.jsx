import React, { useState } from "react";

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white">
      <button
        className="w-full text-left font-semibold flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {q} <span>{open ? "–" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600 text-sm">{a}</p>}
    </div>
  );
};

export default function FAQ() {
  const data = [
    {
      q: "Do I need original DICOM files?",
      a: "No. A clear photo/screenshot is usually enough for pre‑analysis.",
    },
    {
      q: "Is my data secure?",
      a: "We use encryption in transit and at rest. You control your files.",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">FAQ</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((x, i) => (
          <Item key={i} q={x.q} a={x.a} />
        ))}
      </div>
    </div>
  );
}
