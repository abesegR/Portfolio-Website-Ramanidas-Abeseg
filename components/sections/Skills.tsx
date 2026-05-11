"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader label="My" bold="Skills" />

        <div className="space-y-16 mt-12">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              {/* Category Header */}
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-headline font-bold text-xs uppercase tracking-[0.2em] mb-8 border-b-2 border-black inline-block pb-1"
              >
                {group.category}
              </motion.h3>

              {/* Skill Container */}
              <div className="flex flex-wrap gap-4">
                {group.items.map((item, ii) => (
                  <SkillCard key={item} name={item} index={ii} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
