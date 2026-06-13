"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { achievementsData } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Numbers that reflect my journey and commitment to delivering results."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {achievementsData.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll key={i} delay={i * 0.1} direction="up">
                <div className="group relative h-full p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-white mb-2">
                    <Counter value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="text-xs text-zinc-500">{item.label}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
