"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
      <nav className="container-shell flex h-[76px] items-center justify-between">
        <a href="#home" className="display-text text-xl font-bold tracking-tightest">
          PORTFOLIO DONI DARAMORA<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a className="nav-link text-xs font-medium" href={href} key={label}>{label}</a>
          ))}
          <a href="#contact" className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs transition hover:border-accent hover:text-accent">
            Let&apos;s talk <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="rounded-full border border-white/15 p-2 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-6 md:hidden">
          <div className="container-shell flex flex-col gap-5">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="text-sm text-zinc-300">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
