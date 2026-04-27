import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio — Bela-Web" },
      {
        name: "description",
        content:
          "Bela-Web is a small independent web design studio. We work with founders and brands who care about craft.",
      },
      { property: "og:title", content: "About the Studio — Bela-Web" },
      { property: "og:description", content: "A small independent studio. Brand-led web design done with care." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">
              §01 — The Studio
            </p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              Small studio,
              <br />
              <em className="text-coral">large</em> obsession.
            </h1>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-5 md:pt-8">
            <p className="text-lg leading-relaxed text-foreground/85">
              Bela-Web is an independent web design practice founded in 2021. We work
              with a handful of clients each year — long enough to do the thing properly,
              small enough to stay obsessed with the details.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Most of our work begins with a conversation about the brand, the people
              behind it, and the gap between where the website is and where it should be.
              Then we close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y-2 border-ink bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">
            §02 — How we work
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">A four-act play.</h2>

          <div className="mt-16 grid gap-px bg-cream/10 md:grid-cols-4">
            {[
              { n: "Act I", t: "Discover", d: "Conversations, audits, immersion. We listen before we draw." },
              { n: "Act II", t: "Define", d: "Strategy, sitemap, brand language. The map before the journey." },
              { n: "Act III", t: "Design", d: "Art direction, layouts, motion, prototype. The performance." },
              { n: "Act IV", t: "Deploy", d: "Build, test, launch — and keep watching after the curtain." },
            ].map((step) => (
              <div key={step.n} className="bg-ink p-8">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-3xl">{step.t}</h3>
                <p className="mt-3 text-sm text-cream/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { k: "47", v: "Sites shipped" },
            { k: "11", v: "Awards & mentions" },
            { k: "100%", v: "Hand-coded" },
            { k: "4yrs", v: "Average client tenure" },
          ].map((s) => (
            <div key={s.v} className="border-t-2 border-ink pt-6">
              <p className="font-display text-6xl text-coral md:text-7xl">{s.k}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">
              §04 — Capabilities
            </p>
            <h2 className="mt-4 font-display text-5xl">A useful toolkit.</h2>
          </div>
          <ul className="col-span-12 grid grid-cols-1 gap-3 md:col-span-8 md:grid-cols-2">
            {[
              "Brand strategy & identity",
              "Web & product design",
              "Editorial art direction",
              "Front-end engineering",
              "Headless CMS architecture",
              "E-commerce (Shopify, custom)",
              "Motion & micro-interactions",
              "Accessibility & performance",
            ].map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 border-b border-ink/15 py-3 font-display text-xl"
              >
                <span className="text-coral">→</span> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-coral px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-coral-foreground shadow-bold transition-transform hover:-translate-y-1"
          >
            Tell us about your project →
          </Link>
        </div>
      </section>
    </>
  );
}
