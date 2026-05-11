"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader label="My" bold="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }} // Fast entrance
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
