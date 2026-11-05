"use client";

import { ArrowUpRight, Boxes, Coffee, Database } from "lucide-react";
import Reveal from "@/components/Reveal";

const icons: Record<string, typeof Coffee> = {
  coffee: Coffee,
  hmti: Boxes,
  database: Database,
};

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  visual: string;
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = icons[project.visual] ?? Boxes;

  return (
    <Reveal delay={index * 0.08}>
      <article className="project-card group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#111] sm:h-72">
          <div className="absolute inset-0 grid-bg opacity-70" />
          <div className="project-visual relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-accent/30 bg-accent/[0.06] shadow-[0_0_100px_rgba(140,255,0,.08)]">
            <Icon size={62} strokeWidth={1} className="text-accent" />
            <span className="absolute -right-8 -top-5 rounded-full border border-white/15 bg-ink px-3 py-1 font-mono text-[10px] text-zinc-400">{project.number} / 03</span>
          </div>
          <span className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[.22em] text-zinc-600">Selected work</span>
          <span className="absolute bottom-5 right-6 text-[10px] text-zinc-600">2024 — 2026</span>
        </div>
        <div className="p-6 sm:p-7">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.16em] text-accent">{project.category}</p>
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="display-text text-2xl font-medium tracking-tight">{project.title}</h3>
            <ArrowUpRight size={19} className="mt-1 shrink-0 text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
          </div>
          <p className="min-h-[72px] text-sm leading-6 text-zinc-500">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-400">{tag}</span>)}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
