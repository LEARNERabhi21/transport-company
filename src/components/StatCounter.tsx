import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Stat } from "@/types";

interface StatCounterProps {
  stat: Stat;
  index: number;
}

export default function StatCounter({ stat, index }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animateCounter = useCallback(() => {
    const duration = 2000;
    const startTime = performance.now();
    const target = stat.value;

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(update);
  }, [stat.value]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, animateCounter]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl font-extrabold text-gold sm:text-5xl lg:text-6xl">
        {count.toLocaleString()}
        <span>{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
        {stat.label}
      </p>
    </motion.div>
  );
}
