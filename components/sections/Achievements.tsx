"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = [Trophy, Medal, Star];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-primary py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16 tracking-tight text-on-primary">
          Achievements & <span className="font-extrabold">Competitions</span>
        </h2>

        <div className="space-y-5">
          {achievements.map((item, i) => {
            const Icon = icons[i] ?? Star;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border-2 border-on-primary p-8 md:p-10 hover:bg-inverse-surface transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <Icon className="text-on-primary shrink-0" size={28} />
                    <h3 className="font-headline font-bold text-xl text-on-primary">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-label text-xs uppercase tracking-widest border border-on-primary text-on-primary px-3 py-1 w-fit">
                    {item.position}
                  </span>
                </div>
                <p className="font-body text-base text-on-primary opacity-75 max-w-3xl leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* HackerRank */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center border-t-2 border-on-primary pt-16"
        >
          <Award className="mx-auto text-on-primary mb-4" size={48} />
          <h2 className="font-headline font-bold text-2xl text-on-primary mb-3">
            HackerRank Gold Badge
          </h2>
          <p className="font-body text-base text-on-primary opacity-75 max-w-xl mx-auto mb-8">
            Earned through solving multiple algorithmic and data structure
            problems. Recognized for excellence in optimization and algorithmic
            thinking.
          </p>
          <a
            href="https://www.hackerrank.com/profile/abesegramanidas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-on-primary text-on-primary px-8 py-3 font-label text-sm uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-all"
          >
            View Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
