"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-high py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader label="My" bold="Skills" />

        <div className="space-y-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="font-label text-xs uppercase tracking-widest mb-6 border-b-2 border-primary inline-block pb-1">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ii * 0.05 }}
                  >
                    <SkillCard name={item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
