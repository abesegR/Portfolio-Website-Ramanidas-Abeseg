"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { contact } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="about"
      className="max-w-container mx-auto px-6 md:px-10 pt-12 pb-24 md:pt-16 md:pb-28 min-h-[calc(100vh-5rem)] flex flex-col-reverse md:flex-row items-center justify-between gap-12"
    >
      {/* Left */}
      <motion.div
        className="w-full space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-label text-sm uppercase tracking-widest text-secondary border-l-4 border-primary pl-3">
          Undergraduate · USJ
        </p>

        <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-tight tracking-tight">
          Hello Im <span className="text-primary">Ramanidas Abeseg.</span>
          <br />
          <span
            className="italic"
            style={{ WebkitTextStroke: "2px black", color: "transparent" }}
          >
            Enthusiast.
          </span>
        </h1>

        <p className="font-body text-lg text-secondary max-w-xl leading-relaxed">
          Motivated and self-driven undergraduate with a strong passion for
          software engineering. I build applications that simplify everyday
          human experiences, with a growing interest in integrating AI into
          practical solutions.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="bg-primary text-on-primary font-label text-sm uppercase tracking-widest px-6 sm:px-8 py-3 hover:opacity-80 transition-opacity"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border-2 border-primary text-primary font-label text-sm uppercase tracking-widest px-6 sm:px-8 py-3 hover:bg-primary hover:text-on-primary transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-4 pt-2">
          {[
            {
              href: contact.linkedin,
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              ),
            },
            {
              href: contact.github,
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              ),
            },
            {
              href: `mailto:${contact.email}`,
              icon: <Mail size={18} />,
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center border-2 border-primary hover:bg-primary hover:text-on-primary transition-all text-primary"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right — Photo */}
      <motion.div
        className="w-full flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="border-[3px] border-primary p-4 bg-white relative">
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-outline-variant -z-10" />
          <img
            src="/profile.jpg"
            alt="Ramanidas Abeseg"
            className="w-full max-w-[380px] aspect-square object-cover grayscale contrast-125"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-secondary"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="font-label text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
