import React, { useState } from "react";

export default function Contact() {
  const [ok, setOk] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();          // заглушка отправки
    setOk(true);
    setTimeout(() => setOk(false), 2500);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center">Contact us</h2>
      <p className="text-center text-gray-600 mt-2">
        Leave your email — we’ll get in touch within 24 hours.
      </p>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto mt-8 grid gap-3">
        <input
          type="email"
          required
          placeholder="Your email"
          className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows={4}
          placeholder="Optional message"
          className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:shadow-lg transition">
          Send
        </button>
        {ok && <div className="text-green-600 text-sm text-center">✓ Sent</div>}
      </form>
    </div>
  );
}
