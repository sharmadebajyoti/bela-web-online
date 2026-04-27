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
      { property: "og:title", content: "Bela-Web — Independent Web Design Studio" },
      { name: "twitter:title", content: "Bela-Web — Independent Web Design Studio" },
      { name: "description", content: "Bela-Web is a digital portfolio showcasing web design projects with imaginative visuals and a contact form." },
      { property: "og:description", content: "Bela-Web is a digital portfolio showcasing web design projects with imaginative visuals and a contact form." },
      { name: "twitter:description", content: "Bela-Web is a digital portfolio showcasing web design projects with imaginative visuals and a contact form." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3c1399e0-058a-4000-a6d3-85a41f43a935/id-preview-336f04e1--ec87d0ef-0168-457b-9a07-1b729890ad57.lovable.app-1777273771465.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3c1399e0-058a-4000-a6d3-85a41f43a935/id-preview-336f04e1--ec87d0ef-0168-457b-9a07-1b729890ad57.lovable.app-1777273771465.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
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
