"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-20 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.06),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Testimonials"
          subtitle="What clients say about working with me."
        />

        <AnimateOnScroll>
          <div className="relative">
            {/* Quote card */}
            <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden min-h-[240px] sm:min-h-[260px] flex items-center">
              {/* Decorative quote */}
              <Quote className="absolute top-6 left-6 w-8 h-8 text-indigo-500/20" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center w-full"
                >
                  <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed mb-6 sm:mb-8 italic">
                    &ldquo;{testimonialsData[current].quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-outfit font-bold text-sm">
                      {testimonialsData[current].avatar}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-white">
                        {testimonialsData[current].name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {testimonialsData[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonialsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === current
                        ? "bg-indigo-500 w-6"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
