"use client";

import { skillsData } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((category, i) => {
            const Icon = category.icon;
            return (
              <AnimateOnScroll key={i} delay={i * 0.1} direction="up">
                <div className="group relative h-full p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold font-outfit text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <span
                        key={j}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-400 text-xs font-medium leading-tight hover:bg-white/[0.08] hover:text-white hover:border-white/[0.12] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}
                  />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
