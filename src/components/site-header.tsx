import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-12">
            <span className="font-display text-sm italic">b</span>
          </span>
          <span className="font-display text-xl font-medium tracking-tight">
            Bela<span className="text-coral">·</span>Web
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { to: "/", label: "Index" },
            { to: "/work", label: "Work" },
            { to: "/about", label: "Studio" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-coral" }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-all hover:bg-coral md:inline-flex"
        >
          Start a project →
        </Link>
      </div>
    </header>
  );
}
