"use client";

import Image from "next/image";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  const isOngoing = project.status === "ongoing";

  return (
    <div className="border-2 border-primary h-full flex flex-col group hover:bg-surface transition-colors bg-white">
      {/* 1. Project Image Thumbnail */}
      <div className="relative w-full aspect-[16/9] overflow-hidden border-b-2 border-primary bg-secondary/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 580px"
        />
      </div>

      {/* 2. Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="font-headline font-bold text-xl md:text-2xl leading-tight">
            {project.title}
          </h3>
          {isOngoing && (
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
              className="bg-secondary/10 text-secondary font-label text-[10px] font-bold uppercase px-2 py-1 tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
