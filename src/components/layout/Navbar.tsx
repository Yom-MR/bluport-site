import Link from "next/link";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(200,210,221,0.16)] bg-[rgba(2,10,20,0.82)] backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex min-h-[52px] w-full items-center gap-4">
          <Link
            href="/"
            aria-label="BPL Bluport home"
            className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            <BrandLogo variant="light" placement="navbar" />
          </Link>

          <div className="ml-auto flex items-center gap-x-5">
            {/* Nav links hidden on small screens to prevent overflow */}
            <div className="hidden md:flex md:items-center md:gap-x-6 lg:gap-x-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative pb-1 text-[11px] font-semibold tracking-[0.12em] text-[rgba(200,210,221,0.9)] uppercase transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  {link.label}
                  <span className="absolute right-0 bottom-0 h-px w-0 bg-[var(--cyan)] transition-all duration-200 group-hover:left-0 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <Button
              href="/#request-capacity"
              className="rounded-xl px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase"
            >
              Request Capacity
            </Button>
          </div>
        </div>

        <div className="w-full border-t border-[rgba(200,210,221,0.14)] pt-3 md:hidden">
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