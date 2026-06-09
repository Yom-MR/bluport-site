import Link from "next/link";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(148,163,184,0.14)] bg-[rgba(4,17,33,0.76)] backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-2.5">
        <Link
          href="/"
          aria-label="BPL Bluport home"
          className="flex min-w-[214px] items-center py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <BrandLogo variant="light" placement="navbar" />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-x-5 gap-y-2">
          {/* Nav links hidden on small screens to prevent overflow */}
          <div className="hidden md:flex md:items-center md:gap-x-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative pb-1 text-[10px] font-medium tracking-[0.12em] text-[var(--muted)] uppercase transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {link.label}
                <span className="absolute right-0 bottom-0 h-px w-0 bg-[var(--cyan)] shadow-[0_0_10px_rgba(34,211,238,0.45)] transition-all duration-200 group-hover:left-0 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <Button href="/#request-capacity" className="px-4 py-2 text-[11px] uppercase">
            Request Capacity
          </Button>
        </div>

        <div className="w-full border-t border-[rgba(148,163,184,0.12)] pt-2 md:hidden">
          <nav aria-label="Mobile primary navigation" className="flex flex-wrap gap-x-4 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={`mobile-${link.label}`}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.12em] text-[var(--muted)] uppercase transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </nav>
  );
}