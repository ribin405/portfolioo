"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  MessageCircle,
} from "lucide-react";
import { contactData } from "@/data/portfolio-data";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";
import GradientButton from "./ui/GradientButton";

/* Custom SVG icons for brands not in lucide-react */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2C4.582 2 2 4.582 2 7.75v8.5C2 19.418 4.582 22 7.75 22h8.5C19.418 22 22 19.418 22 16.25v-8.5C22 4.582 19.418 2 16.25 2h-8.5zm0 1.5h8.5A4.255 4.255 0 0 1 20.5 7.75v8.5A4.255 4.255 0 0 1 16.25 20.5h-8.5A4.255 4.255 0 0 1 3.5 16.25v-8.5A4.255 4.255 0 0 1 7.75 3.5zm9.75 1.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5.5 1.75a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5zm0 1.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5z" />
    </svg>
  );
}

const socials = [
  { label: "Email", href: "mailto:mribin405@gmail.com", icon: Mail, isSvg: false },
  { label: "GitHub", href: "https://github.com/ribin405", icon: GithubIcon, isSvg: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammed-ribin-kp-4632b9392/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx6lWxHiRRcWnWjrN6ZEttA%3D%3D", icon: LinkedinIcon, isSvg: true },
  { label: "Instagram", href: "https://www.instagram.com/ribi.n_", icon: InstagramIcon, isSvg: true },
  { label: "WhatsApp", href: "https://wa.me/91811816146", icon: MessageCircle, isSvg: false },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={contactData.headline}
          subtitle={contactData.description}
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact form */}
          <AnimateOnScroll direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full min-h-11 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full min-h-11 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full min-h-11 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm resize-y min-h-32"
                  placeholder="Tell me about your project..."
                />
              </div>

              <GradientButton type="submit" icon={Send} className="sm:w-auto">
                Send Message
              </GradientButton>
            </form>
          </AnimateOnScroll>

          {/* Contact info */}
          <AnimateOnScroll direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="text-lg font-semibold font-outfit text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>

                <div className="space-y-3">
                  {socials.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-14 items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                          <Icon className="w-4 h-4 text-indigo-400" />
                        </div>
                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <h4 className="text-base font-semibold font-outfit text-white mb-2">
                  Ready to start a project?
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Let&apos;s discuss your ideas and turn them into reality with
                  modern technology solutions.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
