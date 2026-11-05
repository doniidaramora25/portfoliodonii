import portfolio from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight } from "lucide-react";

export default function Home() {
  const { profile, about, skills, projects, experience, contact } = portfolio;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    address: { "@type": "PostalAddress", addressLocality: "Batam", addressCountry: "ID" },
    url: "https://your-domain.com",
    sameAs: [contact.linkedin, contact.github],
  };

  return (
    <main className="noise overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section id="home" className="relative flex min-h-[820px] items-center pt-28 sm:min-h-screen">
        <div className="grid-bg absolute inset-0" />
        <div className="container-shell relative z-10 pb-24 pt-16">
          <Reveal>
            <div className="mb-9 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-zinc-400">{profile.availability}</span>
              <span className="h-px w-12 bg-white/20" />
              <span className="text-[10px] uppercase tracking-[.16em] text-zinc-600">{profile.location}</span>
            </div>
            <p className="eyebrow mb-5">Hello, I&apos;m {profile.name}</p>
            <h1 className="display-text max-w-5xl text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[.82] tracking-tightest">
              THINK<span className="text-accent">.</span><br />
              BUILD<span className="outline-text">.</span><br />
              <span className="text-zinc-500">IMPACT.</span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-8 text-zinc-400">{profile.description}</p>
              <a href="#work" className="group inline-flex w-fit items-center gap-4 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-white">
                Explore my work <ArrowDown size={15} className="transition group-hover:translate-y-1" />
              </a>
            </div>
          </Reveal>
          <div className="absolute bottom-10 right-0 hidden items-center gap-3 text-[10px] uppercase tracking-[.18em] text-zinc-600 md:flex">
            <span>Scroll to explore</span><span className="h-px w-12 bg-zinc-700" />
          </div>
        </div>
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.035] blur-[120px]" />
      </section>

      <section id="about" className="section-space border-t border-white/[0.07]">
        <div className="container-shell">
          <SectionHeading index="01" label="About me" title={<>Curiosity is<br />my <span className="text-zinc-600">starting point.</span></>} description="A little context about who I am, what I care about, and the perspective I bring to every project." />
          <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr]">
            <Reveal>
              <p className="display-text max-w-2xl text-3xl leading-snug tracking-tight sm:text-4xl">{about.intro}</p>
              <p className="mt-7 max-w-xl text-sm leading-8 text-zinc-500">{about.paragraph}</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">More about me <ArrowUpRight size={15}/></a>
            </Reveal>
            <Reveal delay={0.12} className="grid grid-cols-3 gap-3 self-end">
              {about.stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/15 pl-4">
                  <p className="display-text text-3xl font-semibold text-accent sm:text-4xl">{stat.value}</p>
                  <p className="mt-3 text-[10px] leading-5 text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="section-space border-y border-white/[0.07] bg-[#0b0b0b]">
        <div className="container-shell">
          <SectionHeading index="02" label="Capabilities" title={<>Tools for<br /><span className="text-zinc-600">better work.</span></>} description="A growing toolkit shaped by academic work, hands-on experience, and curiosity about how technology can improve the way we work." />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {skills.map((group, index) => (
              <Reveal key={group.group} delay={index * .06} className="bg-[#0b0b0b] p-7 sm:p-9">
                <p className="mb-8 font-mono text-xs text-accent">0{index + 1} /</p>
                <h3 className="display-text mb-6 text-2xl">{group.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-accent/50 hover:text-white">{item}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-space">
        <div className="container-shell">
          <SectionHeading index="03" label="Selected work" title={<>Ideas made<br /><span className="text-zinc-600">tangible.</span></>} description="A selection of academic, organizational, and personal projects. Each one is an opportunity to learn, experiment, and make something useful." />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
          </div>
          <p className="mt-7 text-xs text-zinc-600">* Project descriptions are editable sample content. Replace them with your actual case studies and project links.</p>
        </div>
      </section>

      <section id="experience" className="section-space border-y border-white/[0.07] bg-[#0b0b0b]">
        <div className="container-shell">
          <SectionHeading index="04" label="Experience" title={<>The path<br /><span className="text-zinc-600">so far.</span></>} description="Experiences that continue to shape how I think, collaborate, and approach challenges." />
          <div className="border-t border-white/10">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * .08} className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[.65fr_1.35fr] md:gap-12">
                <p className="font-mono text-xs text-zinc-600">{item.period}</p>
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.17em] text-accent">{item.organization}</p>
                  <h3 className="display-text text-2xl sm:text-3xl">{item.role}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-space relative">
        <div className="container-shell relative">
          <Reveal>
            <p className="eyebrow mb-6">05 / Get in touch</p>
            <h2 className="display-text max-w-5xl text-[clamp(3.7rem,10vw,8.5rem)] font-semibold leading-[.86] tracking-tightest">
              HAVE AN<br /><span className="outline-text">IDEA?</span><br />LET&apos;S TALK<span className="text-accent">.</span>
            </h2>
            <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm text-zinc-500">Have a project, opportunity, or just want to connect?</p>
                <a className="display-text text-xl underline decoration-accent underline-offset-8 sm:text-3xl" href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <a href={`mailto:${contact.email}`} className="group flex h-14 w-14 items-center justify-center rounded-full bg-accent text-black transition hover:rotate-45 hover:bg-white"><MoveUpRight size={23}/></a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] py-8">
        <div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <a href="#home" className="display-text text-lg font-bold tracking-tightest">DONI<span className="text-accent">.</span></a>
          <p className="text-[10px] text-zinc-600">© {new Date().getFullYear()} Doni Daramora. Built with intention.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <a aria-label="Email" href={`mailto:${contact.email}`} className="transition hover:text-accent"><Mail size={17}/></a>
            <a aria-label="LinkedIn" href={contact.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-accent"><Linkedin size={17}/></a>
            <a aria-label="GitHub" href={contact.github} target="_blank" rel="noreferrer" className="transition hover:text-accent"><Github size={17}/></a>
            <a aria-label="Back to top" href="#home" className="ml-3 border-l border-white/15 pl-4 transition hover:text-accent"><ArrowUpRight size={17}/></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
