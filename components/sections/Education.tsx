"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { BadgeCheck } from "lucide-react";

export default function Education() {
  return (
    <section className="bg-background py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader label="Education &" bold="Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Education */}
          <motion.div
            className="md:col-span-7 border-2 border-primary p-10 bg-surface"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-8">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="border-l-4 border-primary pl-6">
                  <h4 className="font-headline font-bold text-lg text-primary">
                    {edu.institution}
                  </h4>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary mt-1 mb-2">
                    {edu.degree}
                    {edu.period && ` · ${edu.period}`}
                  </p>
                  <p className="font-body text-sm text-secondary">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="md:col-span-5 border-2 border-primary p-10 bg-primary text-on-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-3">
                  <BadgeCheck size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-label text-sm font-bold">{cert.title}</p>
                    <p className="font-body text-xs opacity-70 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="font-body text-xs opacity-60">
                      {cert.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
