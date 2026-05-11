import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bela-Web Studio" },
      {
        name: "description",
        content:
          "Start a web design project with Bela-Web. Tell us about your brand, your goals, and your timeline.",
      },
      { property: "og:title", content: "Contact — Bela-Web Studio" },
      { property: "og:description", content: "Start a web design project with us." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be under 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(160, "Email must be under 160 characters"),
  company: z.string().trim().max(120, "Company name too long").optional().or(z.literal("")),
  budget: z.enum(["under-5k", "5-15k", "15-40k", "40k-plus", "not-sure"]),
  service: z.enum(["brand", "website", "ecommerce", "rebuild", "other"]),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more — at least 20 characters")
    .max(2000, "Message must be under 2000 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "not-sure",
      service: "website",
      message: "",
    },
  });

  const onSubmit = async (data: ContactValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2e88cd07-51a5-4378-9529-873722775ff1",
          subject: `New project inquiry from ${data.name}`,
          from_name: data.name,
          replyto: data.email,
          name: data.name,
          email: data.email,
          company: data.company || "—",
          budget: data.budget,
          service: data.service,
          message: data.message,
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send");
      }
      toast.success("Message received", {
        description: `Thanks, ${data.name}. We'll be in touch within 48 hours.`,
      });
      reset();
    } catch (err) {
      toast.error("Couldn't send your message", {
        description:
          err instanceof Error ? err.message : "Please try again or email hello@bela-web.com",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
      <div className="grid grid-cols-12 gap-12">
        {/* Left column */}
        <div className="col-span-12 md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">
            §01 — Say hello
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] md:text-8xl">
            Let's
            <br />
            <em className="text-coral">talk</em>.
          </h1>
          <p className="mt-8 max-w-md text-lg text-foreground/75">
            We take on a small number of projects each quarter. Tell us a little
            about yours and we'll come back within two business days.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:hello@bela-web.com"
                className="mt-1 block font-display text-2xl hover:text-coral"
              >
                hello@bela-web.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Studio
              </p>
              <p className="mt-1 font-display text-2xl">Hyderabad ↔ Worldwide</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Hours
              </p>
              <p className="mt-1 font-display text-2xl">Mon — Fri · 10:00 — 19:00 IST</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-span-12 md:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 border-ink bg-card p-8 shadow-bold md:p-12"
            noValidate
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Your name" error={errors.name?.message}>
                <input
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className="field-input"
                />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className="field-input"
                />
              </Field>

              <Field label="Company (optional)" error={errors.company?.message}>
                <input
                  type="text"
                  autoComplete="organization"
                  {...register("company")}
                  className="field-input"
                />
              </Field>

              <Field label="Budget" error={errors.budget?.message}>
                <select {...register("budget")} className="field-input">
                  <option value="under-5k">Under $5k</option>
                  <option value="5-15k">$5k — $15k</option>
                  <option value="15-40k">$15k — $40k</option>
                  <option value="40k-plus">$40k+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </Field>
            </div>

            <Field label="What do you need?" error={errors.service?.message}>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  { v: "brand", l: "Brand identity" },
                  { v: "website", l: "New website" },
                  { v: "ecommerce", l: "E-commerce" },
                  { v: "rebuild", l: "Rebuild / refresh" },
                  { v: "other", l: "Something else" },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className="cursor-pointer rounded-full border-2 border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors has-[:checked]:bg-ink has-[:checked]:text-cream"
                  >
                    <input
                      type="radio"
                      value={opt.v}
                      {...register("service")}
                      className="sr-only"
                    />
                    {opt.l}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Tell us about the project" error={errors.message?.message}>
              <textarea
                rows={6}
                {...register("message")}
                placeholder="Goals, audience, timeline, links to anything inspiring…"
                className="field-input resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-coral px-8 py-5 font-mono text-xs uppercase tracking-[0.25em] text-coral-foreground transition-all hover:bg-ink disabled:opacity-60 md:w-auto"
            >
              {submitting ? "Sending…" : "Send message"}
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Field input styles via Tailwind layer */}
      <style>{`
        .field-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 2px solid var(--ink);
          padding: 0.625rem 0;
          font-family: var(--font-display);
          font-size: 1.125rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s;
        }
        .field-input:focus {
          border-color: var(--coral);
        }
        .field-input::placeholder {
          color: var(--muted-foreground);
          font-style: italic;
        }
        select.field-input {
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23000' stroke-width='1.5' fill='none'/></svg>");
          background-repeat: no-repeat;
          background-position: right 0.25rem center;
          padding-right: 1.5rem;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <div className="mt-1">{children}</div>
      {error && (
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-destructive">
          ⚠ {error}
        </span>
      )}
    </label>
  );
}
