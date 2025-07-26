import React from "react";

export default function Slide({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={
        "h-screen snap-start flex items-center justify-center " +
        "px-4 " + // горизонтальные поля на мобилках
        className
      }
    >
      <div className="w-full max-w-6xl">{children}</div>
    </section>
  );
}
