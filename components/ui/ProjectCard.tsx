import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-2 border-primary p-6 space-y-5 hover:shadow-[6px_6px_0px_#000] transition-all duration-200 bg-surface">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-headline font-bold text-xl leading-snug">
          {project.title}
        </h3>
        {project.status === "ongoing" && (
          <span className="shrink-0 bg-primary text-on-primary text-[10px] px-2 py-1 font-label uppercase tracking-widest">
            Ongoing
          </span>
        )}
      </div>

      <p className="font-body text-base text-secondary leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-surface-high px-3 py-1 font-label text-xs uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
