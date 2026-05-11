"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react"; // Keeping basic ones, replacing the broken ones
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1200px] mx-auto px-6 md:px-10 py-32"
    >
      <SectionHeader label="Contact &" bold="References" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left — info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl leading-tight mb-4">
              Lets <span className="font-extrabold">Talk</span> for something
              special
            </h2>
            <p className="font-body text-base text-secondary leading-relaxed">
              Im currently seeking new opportunities and collaborations. If you
              have a project in mind or just want to say hi, feel free to reach
              out.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Mail size={18} />,
                value: contact.email,
                href: `mailto:${contact.email}`,
              },
              {
                icon: <Phone size={18} />,
                value: contact.phone,
                href: `tel:${contact.phone}`,
              },
              {
                icon: <MapPin size={18} />,
                value: contact.location,
                href: null,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 font-body text-base"
              >
                <span className="text-primary">{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className="hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Alternative SVG Icons */}
          <div className="flex gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-primary px-4 py-2 font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
            >
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
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-primary px-4 py-2 font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
            >
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
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right — References (Unchanged) */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* ... existing references mapping ... */}
        </motion.div>
      </div>
    </section>
  );
}
