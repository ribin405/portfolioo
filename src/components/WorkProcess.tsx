"use client";

import { processSteps } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function WorkProcess() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Work Process"
          subtitle="A structured approach to delivering exceptional digital solutions."
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent md:-translate-x-px" />

          <div className="space-y-6 md:space-y-12">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimateOnScroll
                  key={i}
                  delay={i * 0.1}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-4 md:gap-0 pl-10 sm:pl-12 md:pl-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div
                      className={`flex-1 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="text-xs font-mono text-indigo-400">
                            0{step.step}
                          </span>
                          <h3 className="text-base font-semibold font-outfit text-white leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-black z-10 mt-6" />

                    {/* Empty space for other side on desktop */}
                    <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
