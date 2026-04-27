import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import heroCollage from "@/assets/hero-collage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bela-Web — Brand-led web design for ambitious companies" },
      {
        name: "description",
        content:
          "An independent design studio crafting websites that feel as considered as the brands they represent. Recent work for Nest Harvest, GenZ Mind, Invest Advisors, Arch Vault & Bite Rush.",
      },
      { property: "og:title", content: "Bela-Web — Brand-led web design" },
      { property: "og:description", content: "Independent web design studio. Selected works." },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Brand-led",
  "★",
  "Editorial",
  "★",
  "Custom-built",
  "★",
  "Performance",
  "★",
  "Storytelling",
  "★",
  "Considered",
  "★",
];

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="col-span-12 md:col-span-7">
            <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-coral">
              Bela-Web · Independent studio
            </p>
            <h1 className="reveal mt-8 font-display text-[14vw] leading-[0.85] tracking-tight md:text-[8.5rem] lg:text-[10rem]">
              Websites
              <br />
              with a<span className="text-coral italic"> pulse</span>.
            </h1>
            <p
              className="reveal mt-10 max-w-lg text-lg leading-relaxed text-foreground/75 md:text-xl"
              style={{ animationDelay: "200ms" }}
            >
              We're a small studio that designs and builds brand-led websites for founders,
              creators, and category-defining companies. No templates. No filler. Just craft.
            </p>
            <div
              className="reveal mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "350ms" }}
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-coral"
              >
                See selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-xs uppercase tracking-[0.2em] hover:border-coral hover:text-coral"
              >
                Start a project
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden border-2 border-ink shadow-bold">
                <img
                  src={heroCollage}
                  alt="Editorial collage of torn paper, geometric shapes and halftone textures"
                  className="block h-full w-full object-cover"
                  width={1600}
                  height={1200}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rotate-[-4deg] bg-coral px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-coral-foreground shadow-bold">
                Plate № 01 — Specimen
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y-2 border-ink bg-coral py-5 text-coral-foreground">
          <div className="flex w-max marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="mx-8 font-display text-3xl italic md:text-4xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">
              §02 — What we do
            </p>
            <h2 className="mt-6 font-display text-5xl leading-none md:text-6xl">
              Three things,
              <br />
              done <em>well</em>.
            </h2>
          </div>

          <div className="col-span-12 grid gap-px bg-ink/15 md:col-span-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Brand & Identity",
                body: "Logos, type systems, voice, and the bones beneath every great site.",
              },
              {
                num: "02",
                title: "Design & Direction",
                body: "Bespoke web design — wireframes, art direction, motion, and prototypes.",
              },
              {
                num: "03",
                title: "Build & Launch",
                body: "Hand-built front-ends, headless CMS, performant deploys, post-launch care.",
              },
            ].map((s) => (
              <div key={s.num} className="bg-background p-8 transition-colors hover:bg-coral hover:text-coral-foreground">
                <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-60">
                  {s.num}
                </p>
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between border-b border-ink/15 pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">
              §03 — Selected work
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Recent flights.</h2>
          </div>
          <Link
            to="/work"
            className="hidden font-mono text-xs uppercase tracking-[0.2em] hover:text-coral md:block"
          >
            View all (05) →
          </Link>
        </div>

        <div className="grid gap-px bg-ink/15 md:grid-cols-2">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/work"
              className="group relative block bg-background p-6 transition-colors hover:bg-cream"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.name} website preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {p.year}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {p.category}
              </p>
            </Link>
          ))}

          {/* Filler tile */}
          <Link
            to="/work"
            className="flex items-center justify-center bg-ink p-12 text-cream transition-colors hover:bg-coral"
          >
            <div className="text-center">
              <p className="font-display text-4xl italic">+ 02 more</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em]">
                Explore the archive →
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-32 md:px-10 md:py-44">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">
          §04 — Belief
        </p>
        <blockquote className="mt-8 font-display text-4xl leading-[1.1] md:text-6xl">
          "A website isn't a brochure. It's the loudest, most-visited room in
          your <em className="text-coral">entire</em> brand. We treat it like one."
        </blockquote>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          — Bela-Web Studio Manifesto
        </p>
      </section>
    </>
  );
}
