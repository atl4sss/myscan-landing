import React from "react";

export default function DotsNav({ sections, active, onJump }) {
  return (
    <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
      {sections.map((s, i) => (
        <button
          key={s.id}
          aria-label={s.label}
          onClick={() => onJump(i)}
          className={
            "w-3 h-3 rounded-full transition " +
            (active === i ? "bg-blue-600 scale-110" : "bg-blue-300 hover:bg-blue-400")
          }
        />
      ))}
    </div>
  );
}
