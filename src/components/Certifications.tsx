"use client";

import { certificationsData } from "@/data/portfolio-data";
import { Award } from "lucide-react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function Certifications() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials and certifications validating my expertise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certificationsData.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <AnimateOnScroll key={i} delay={i * 0.1} direction="up">
                <div className="group relative h-full p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 text-center overflow-hidden">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-indigo-400" />
                    </div>
                    <h3 className="text-base font-semibold font-outfit text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-3">{cert.issuer}</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-zinc-500">
                      <Award className="w-3 h-3" />
                      {cert.date}
                    </span>
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
