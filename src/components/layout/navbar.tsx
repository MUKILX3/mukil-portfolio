import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Menu, X, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navItems, site } from "@/data/site";
import { Magnetic } from "@/components/motion/magnetic";
import { cn } from "@/lib/utils";

const socials = [
  { label: "Instagram", href: site.instagram, Icon: Instagram, tone: "bg-highlight" },
  { label: "LinkedIn", href: site.linkedin, Icon: Linkedin, tone: "bg-blossom" },
  { label: "WhatsApp", href: site.whatsapp, Icon: FaWhatsapp, tone: "bg-mint" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-3 rounded-full border border-border/70 px-3 py-2 transition-all duration-300",
          scrolled
            ? "bg-card/70 shadow-paper backdrop-blur-xl"
            : "bg-card/90 shadow-paper backdrop-blur-sm",
        )}
      >
        <Link
          to="/"
          aria-label="Mukil — home"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground"
        >
          M
        </Link>

        <ul className="hidden min-w-0 items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="label-mono rounded-full px-4 py-2 text-ink-soft transition-colors hover:text-ink data-[status=active]:bg-highlight data-[status=active]:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon, tone }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full text-ink transition-transform duration-300 hover:-translate-y-0.5",
                  tone,
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>

          <Magnetic className="hidden sm:inline-block">
            <Link
              to="/contact"
              className="label-mono inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Let&apos;s Talk
            </Link>
          </Magnetic>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-border bg-card p-4 shadow-paper md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="label-mono block rounded-xl px-3 py-3 text-ink-soft data-[status=active]:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-end">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="label-mono ml-auto rounded-full bg-primary px-4 py-2.5 text-primary-foreground"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
