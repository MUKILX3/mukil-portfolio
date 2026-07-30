import { Link } from "@tanstack/react-router";
import { site, navItems } from "@/data/site";
import { Squiggle } from "@/components/notebook/paper";

export function Footer() {
  return (
    <footer className="relative mt-24 px-4 pb-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Squiggle className="text-border" />
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="handwritten text-5xl text-ink sm:text-6xl">Mukil</p>
            <p className="label-mono mt-3 text-ink-soft">{site.role}</p>
            <p className="handwritten mt-6 text-2xl text-ink-soft">
              Made with 3 Spoon of Coffee ☕
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="label-mono text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="label-mono mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-ink-soft">
          <span>© {new Date().getFullYear()} Mukil</span>
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
