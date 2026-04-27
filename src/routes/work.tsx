import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Bela-Web" },
      {
        name: "description",
        content:
          "Five recent client projects from Bela-Web: Nest Harvest, GenZ Mind, Invest Advisors, Arch Vault, and Bite Rush.",
      },
      { property: "og:title", content: "Selected Work — Bela-Web" },
      { property: "og:description", content: "Recent client projects across e-commerce, wellness, finance, architecture and F&B." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-10 md:pb-20 md:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">
          The Archive · 2021 — 2025
        </p>
        <h1 className="mt-6 font-display text-[14vw] leading-[0.9] md:text-[9rem]">
          Selected
          <br />
          <em className="text-coral">work</em>.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-foreground/75">
          A handful of sites we've designed and built recently. Each one made for a real
          team, shipping to real customers, doing real work in the world.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </section>
    </>
  );
}
