import Reveal from "@/components/Reveal";

export default function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-end">
      <div>
        <p className="eyebrow mb-4">{index} / {label}</p>
        <h2 className="display-text text-4xl font-semibold leading-[.98] tracking-tightest sm:text-5xl md:text-6xl">{title}</h2>
      </div>
      {description && <p className="max-w-md text-sm leading-7 text-zinc-500 md:justify-self-end">{description}</p>}
    </Reveal>
  );
}
