import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedCounter({ from = 0, to = 1000, duration = 1.2, className = "" }) {
  const mv = useMotionValue(from);
  const rounded = useTransform(mv, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(mv, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [to, duration]);

  return <motion.span className={className}>{rounded}</motion.span>;
}
