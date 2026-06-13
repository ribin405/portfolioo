"use client";

import { servicesData } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          subtitle="Comprehensive digital solutions tailored to your business needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll key={i} delay={i * 0.1} direction="up">
                <div className="group relative h-full p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold font-outfit text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2.5">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-zinc-400"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} shrink-0`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Border glow effect */}
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
