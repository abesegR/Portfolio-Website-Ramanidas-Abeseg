"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string; // Ensure data includes image paths
  ongoing?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{
        y: -10, // Snappy lift
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)", // Neo-brutalism shadow
      }}
      // SNAPPY hover transition fix
      transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      className="border-2 border-black h-full flex flex-col bg-white cursor-pointer group"
    >
      {/* 1. Image Thumbnail container */}
      <div className="relative w-full aspect-video overflow-hidden border-b-2 border-black bg-surface-high">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 580px"
        />
      </div>

      {/* 2. Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="font-headline font-bold text-xl md:text-2xl leading-tight">
            {project.title}
          </h3>
          {project.ongoing && (
            <span className="bg-black text-white text-[10px] font-bold uppercase px-2 py-1 tracking-tighter shrink-0">
              Ongoing
            </span>
          )}
        </div>

        <p className="font-body text-sm text-secondary leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* 3. Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-secondary font-headline text-[10px] font-bold uppercase px-2 py-1 tracking-widest border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
