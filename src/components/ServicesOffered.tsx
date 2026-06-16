"use client";

import { servicesOfferedData } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function ServicesOffered() {
  return (
    <section id="services-offered" className="relative py-16 sm:py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services Offered"
          subtitle="End-to-end digital services to grow your brand, automate your workflow, and scale your business."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {servicesOfferedData.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll key={i} delay={i * 0.06} direction="up">
                <div className="group relative h-full p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                  />

                  {/* Header: number badge + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${service.gradient} text-white text-sm font-bold font-outfit shrink-0`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold font-outfit text-white mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} shrink-0`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom gradient line */}
                  <div
                    className={`absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
