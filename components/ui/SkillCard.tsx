"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  index: number;
}

export default function SkillCard({ name, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.02 }} // Faster entrance
      whileHover={{
        y: -4,
        backgroundColor: "#000",
        color: "#fff",
        boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)", // Solid shadow is snappier
        transition: { type: "tween", ease: "easeOut", duration: 0.3 },
      }}
      className="border-2 border-black px-8 py-5 min-w-[140px] md:min-w-[160px] flex items-center justify-center font-headline text-sm font-bold uppercase tracking-widest cursor-default text-center bg-white transition-colors duration-75"
    >
      {name}
    </motion.div>
  );
}
