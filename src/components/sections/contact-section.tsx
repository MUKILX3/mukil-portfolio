import { useState, type FormEvent } from "react";
import { Instagram, Linkedin, Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { StickyNote } from "@/components/notebook/paper";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry — ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")} (${String(data.get("email") ?? "")})`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <p className="handwritten text-3xl text-ink-soft">say hello</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,6vw,3.6rem)] leading-[1.05] tracking-tight">
          Let&apos;s Build Something{" "}
          <span className="marker-underline">Amazing</span> Together
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="paper-card rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <label className="mt-5 block">
                <span className="label-mono text-ink-soft">Project details</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-marker"
                />
              </label>
              <Magnetic className="mt-6">
                <button
                  type="submit"
                  className="label-mono inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-3.5 w-3.5" />
                  {sent ? "Opening your mail app…" : "Send message"}
                </button>
              </Magnetic>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <StickyNote tone="highlight" rotate={-2} className="rounded-sm">
              <span className="block">Available for</span>
              <span className="block">freelance & collabs</span>
            </StickyNote>
            <ul className="flex flex-col gap-3">
              <ContactLink href={`mailto:${site.email}`} Icon={Mail} label={site.email} />
              <ContactLink href={site.instagram} Icon={Instagram} label="Instagram" />
              <ContactLink href={site.linkedin} Icon={Linkedin} label="LinkedIn" />
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="label-mono text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-marker"
      />
    </label>
  );
}

function ContactLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: typeof Mail;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer noopener"
        className="paper-card flex items-center gap-3 rounded-xl px-4 py-4 transition-transform duration-300 hover:-translate-y-1"
      >
        <Icon className="h-4 w-4 text-marker" />
        <span className="label-mono truncate">{label}</span>
      </a>
    </li>
  );
}
