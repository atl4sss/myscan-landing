import React, { useEffect, useMemo, useRef, useState } from "react";
import Slide from "./presentation/Slide";
import DotsNav from "./presentation/DotsNav";

// если используешь i18n — можно импортировать ваши секции Hero/Features/...
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./Footer"; // на последнем слайде поместим футер

export default function PresentationPage() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  // список слайдов (id нужен для навигации)
  const slides = useMemo(
    () => ([
      { id: "hero",     label: "Hero",     node:
        <div className="relative overflow-hidden w-full">
          {/* тот же контент что и в Hero, но без внешних паддингов секции */}
          <Hero />
        </div>
      },
      { id: "features", label: "Features", node: <Features /> },
      { id: "pricing",  label: "Pricing",  node: <Pricing /> },
      { id: "faq",      label: "FAQ",      node: <FAQ /> },
      { id: "contact",  label: "Contact",  node: <>
          <Contact />
          <div className="pt-8"><Footer /></div>
        </> },
    ]),
    []
  );

  // IntersectionObserver — отслеживаем активный слайд
  useEffect(() => {
    const root = containerRef.current;
    const sections = root?.querySelectorAll("section[id]");
    if (!root || !sections?.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = slides.findIndex(s => s.id === visible.target.id);
          if (idx !== -1) setActive(idx);
        }
      },
      { root, threshold: [0.5, 0.75] }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [slides.length]);

  // Клавиатура: PgUp/PgDn/Space/ArrowUp/Down
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const onKey = (e) => {
      const prevKeys = ["ArrowUp", "PageUp"];
      const nextKeys = ["ArrowDown", "PageDown", " "];
      if (prevKeys.includes(e.key)) { e.preventDefault(); jump(active - 1); }
      if (nextKeys.includes(e.key)) { e.preventDefault(); jump(active + 1); }
    };
    root.addEventListener("keydown", onKey);
    return () => root.removeEventListener("keydown", onKey);
  }, [active]);

  const jump = (idx) => {
    const i = Math.min(slides.length - 1, Math.max(0, idx));
    const el = containerRef.current?.querySelector(`#${slides[i].id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0} /* чтобы ловить клавиатуру */
      className="w-screen h-screen overflow-y-scroll overflow-x-clip snap-y snap-mandatory focus:outline-none bg-white"
    >
      {/* точки справа */}
      <DotsNav sections={slides} active={active} onJump={jump} />

      {/* слайды */}
      {slides.map(s => (
        <Slide key={s.id} id={s.id} className={
          // лёгкие фоны: чередуем
          s.id === "hero"
            ? "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white"
            : "bg-white"
        }>
          {s.node}
        </Slide>
      ))}
    </div>
  );
}
