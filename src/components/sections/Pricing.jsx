import React from "react";

const Card = ({ name, price, features }) => (
  <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 flex flex-col">
    <h3 className="text-xl font-semibold">{name}</h3>
    <div className="mt-4 text-3xl font-extrabold">{price}</div>
    <ul className="mt-4 space-y-2 text-sm text-gray-600">
      {features.map((f) => <li key={f}>• {f}</li>)}
    </ul>
    <a
      href="#contact"
      className="mt-6 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold text-center hover:shadow-lg transition"
    >
      Choose plan
    </a>
  </div>
);

export default function Pricing() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">Pricing</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          name="Standart"
          price="₸990/mo"
          features={["Up to 5 scans", "3 Basic PDF Reports export", "10 AI chat messages"]}
        />
        <Card
          name="Plus"
          price="₸6 990/mo"
          features={["250 scans", "25 Deep-analysis PDF Reports", "Up to 40 AI chat messages"]}
        />
        <Card
          name="Premium"
          price="₸19990/mo"
          features={["Up to 950 scans", "70 Deep-analysis PDF Reports", "100 AI chat messagesl"]}
        />
      </div>
    </div>
  );
}
