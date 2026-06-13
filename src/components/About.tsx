"use client";

import { aboutData } from "@/data/portfolio-data";
import Image from "next/image";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building digital solutions that make a real impact."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image placeholder */}
          <AnimateOnScroll direction="left">
            <div className="relative group mx-auto lg:mx-0 w-full max-w-[18rem] sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/[0.08] overflow-hidden">
                <Image
                  src="/screenshots/meportf.jpeg"
                  alt="Muhammed Ribin K P"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div>
            <AnimateOnScroll direction="right">
              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                {aboutData.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-zinc-400 text-sm sm:text-base leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {aboutData.highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimateOnScroll key={i} delay={i * 0.1} direction="up">
                    <div className="group h-full p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 text-center">
                      <Icon className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-xl font-bold font-outfit text-white mb-1">
                        {item.value}
                      </div>
                      <div className="text-xs text-zinc-500">{item.label}</div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
