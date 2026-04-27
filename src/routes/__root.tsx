import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">Error 404</p>
        <h1 className="mt-4 font-display text-7xl">Lost in layout.</h1>
        <p className="mt-4 text-muted-foreground">
          This page doesn't exist — but plenty of others do.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-cream hover:bg-coral"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bela-Web — Independent Web Design Studio" },
      {
        name: "description",
        content:
          "Bela-Web is a small, opinionated web design studio crafting brand-led websites for ambitious companies.",
      },
      { name: "author", content: "Bela-Web" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
