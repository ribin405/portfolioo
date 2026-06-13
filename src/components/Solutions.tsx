"use client";

import { solutionsData } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.06),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Solutions I've Built"
          subtitle="Real-world solutions that deliver measurable results for businesses."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <AnimateOnScroll key={i} delay={i * 0.08} direction="up">
                <div className="group relative h-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] to-purple-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:border-indigo-500/40 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-base font-semibold font-outfit text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
