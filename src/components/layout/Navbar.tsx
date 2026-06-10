import Link from "next/link";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(200,210,221,0.16)] bg-[rgba(2,10,20,0.82)] backdrop-blur-xl">
      <Container className="flex min-h-[72px] flex-wrap items-center justify-between gap-3 py-3">
        <Link
          href="/"
          aria-label="BPL Bluport home"
          className="flex min-w-[220px] items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <BrandLogo variant="light" placement="navbar" />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-x-6 gap-y-2">
          {/* Nav links hidden on small screens to prevent overflow */}
          <div className="hidden md:flex md:items-center md:gap-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative pb-1 text-[11px] font-semibold tracking-[0.12em] text-[rgba(200,210,221,0.88)] uppercase transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {link.label}
                <span className="absolute right-0 bottom-0 h-px w-0 bg-[var(--cyan)] transition-all duration-200 group-hover:left-0 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <Button
            href="/#request-capacity"
            className="rounded-lg px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase"
          >
            Request Capacity
          </Button>
        </div>

        <div className="w-full border-t border-[rgba(200,210,221,0.14)] pt-2 md:hidden">
          <nav aria-label="Mobile primary navigation" className="flex flex-wrap gap-x-4 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={`mobile-${link.label}`}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.12em] text-[var(--slate-300)] uppercase transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
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