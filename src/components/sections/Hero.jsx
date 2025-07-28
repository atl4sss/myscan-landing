import SectionReveal from "../SectionReveal.jsx";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative overflow-hidden text-white bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600"
    >
      {/* декоративные пятна */}
      <div className="pointer-events-none absolute -top-20 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl" />

      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Текст */}
          <SectionReveal className="w-full md:w-6/12">
            <div className="uppercase tracking-[0.3em] text-white/80 text-xs mb-4">
              Welcome
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Versatile App For <br className="hidden lg:inline" />
              Smart <span className="text-cyan-200">Diagnostics</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-xl">
              AI‑powered medical image analysis — fast, accurate and secure.
            </p>

            {/* CTA — только одна кнопка */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#features"
                className="px-8 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl transition text-center"
              >
                Getting Started
              </a>
            </div>
          </SectionReveal>

          {/* Макет телефона */}
          <SectionReveal delay={0.1} className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-60 sm:w-72 md:w-80 aspect-[9/19] rounded-3xl bg-white shadow-2xl ring-4 ring-white/40 overflow-hidden">
              <img src="/mockup.png" alt="App UI" className="object-cover w-full h-full" />
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
