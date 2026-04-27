import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">
              Let's make something
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Brands deserve <em className="text-coral">better</em> websites.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border-b border-cream/40 pb-2 font-mono text-sm uppercase tracking-[0.2em] transition-colors hover:border-coral hover:text-coral"
            >
              Start a project
              <span aria-hidden>↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                Studio
              </p>
              <ul className="mt-4 space-y-2 font-display text-lg">
                <li><Link to="/work" className="hover:text-coral">Work</Link></li>
                <li><Link to="/about" className="hover:text-coral">About</Link></li>
                <li><Link to="/contact" className="hover:text-coral">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2 font-display text-lg">
                <li><a href="mailto:hello@bela-web.com" className="hover:text-coral">Email</a></li>
                <li><a href="#" className="hover:text-coral">Instagram</a></li>
                <li><a href="#" className="hover:text-coral">Dribbble</a></li>
                <li><a href="#" className="hover:text-coral">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 font-mono text-xs uppercase tracking-[0.2em] text-cream/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Bela-Web Studio</p>
          <p>Crafted with care · India ↔ Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
