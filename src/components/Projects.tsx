"use client";

import { projectsData } from "@/data/portfolio-data";
import { ExternalLink } from "lucide-react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";
import Image from "next/image";

type ProjectWithImage = (typeof projectsData)[number] & {
  image?: string;
};

const projects = projectsData as ProjectWithImage[];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my best work — real solutions solving real problems."
        />

        <div className="space-y-8 sm:space-y-16">
          {projects.map((project, i) => (
            <AnimateOnScroll key={i} delay={0.1} direction="up">
              <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
                <div
                  className={`grid lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image placeholder */}
                  <div
                    className={`relative aspect-[16/10] lg:aspect-auto min-h-[190px] sm:min-h-[280px] ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mx-auto mb-3`}
                            >
                              <span className="text-white font-outfit font-bold text-xl">
                                {project.title[0]}
                              </span>
                            </div>
                            <p className="text-zinc-500 text-sm">
                              Project Screenshot
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-outfit text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6">
                      {project.subtitle}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/30 bg-indigo-500/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {project.features.map((f, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed"
                        >
                          <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`}
                          />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* Problem / Solution */}
                    {project.problem && (
                      <div className="space-y-3 mb-6">
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                            Problem
                          </span>
                          <p className="text-sm text-zinc-400 mt-1">
                            {project.problem}
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                          <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                            Solution
                          </span>
                          <p className="text-sm text-zinc-400 mt-1">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-sm font-medium hover:bg-white/[0.1] hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                          <GithubIcon className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
