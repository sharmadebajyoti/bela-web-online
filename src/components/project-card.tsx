import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const isOdd = index % 2 === 1;

  return (
    <article
      className="group grid grid-cols-12 gap-6 border-t border-ink/15 py-12 md:py-20"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`col-span-12 ${isOdd ? "md:col-start-7 md:col-span-6" : "md:col-span-6"} order-2 md:order-1`}
      >
        <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-coral">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.category}</span>
        </div>

        <h3 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
          {project.name}
        </h3>

        <p className="mt-4 max-w-md font-display text-xl italic text-muted-foreground">
          {project.tagline}
        </p>

        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-ink/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={`https://${project.domain}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-coral hover:text-coral"
        >
          {project.domain} ↗
        </a>
      </div>

      <div
        className={`col-span-12 ${isOdd ? "md:col-start-1 md:col-span-6 md:row-start-1" : "md:col-span-6"} order-1 md:order-2`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/0 via-transparent to-ink/10 opacity-0 transition-opacity group-hover:opacity-100" />
          <img
            src={project.image}
            alt={`${project.name} website mockup`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
            width={1200}
            height={900}
          />
          <div className="absolute bottom-4 left-4 flex gap-1">
            {project.palette.map((c) => (
              <span
                key={c}
                className="h-6 w-6 rounded-full border-2 border-cream shadow-md"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
