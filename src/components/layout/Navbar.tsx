"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(200,210,221,0.16)] bg-[rgba(2,10,20,0.82)] backdrop-blur-xl">
      <Container className="py-2.5">
        <div className="flex min-h-[72px] w-full items-center gap-4 lg:min-h-[78px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            aria-label="BPL Bluport home"
            className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <BrandLogo variant="light" placement="navbar" />
          </Link>

          <nav aria-label="Primary" className="hidden justify-center md:flex md:items-center md:gap-x-6 lg:gap-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative pb-1 text-[11px] font-semibold tracking-[0.14em] text-[rgba(200,210,221,0.9)] uppercase transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {link.label}
                <span className="absolute right-0 bottom-0 h-px w-0 bg-[var(--cyan)] transition-all duration-200 group-hover:left-0 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-x-3 md:gap-x-4 lg:ml-0 lg:justify-end">
            <Button
              href="/#request-capacity"
              className="hidden rounded-xl px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase md:inline-flex"
            >
              Request Capacity
            </Button>

            <button
              type="button"
              aria-controls="mobile-primary-nav"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(200,210,221,0.2)] bg-[rgba(255,255,255,0.03)] text-[var(--foreground)] transition-colors hover:border-[var(--cyan)] md:hidden"
            >
              {isMenuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-primary-nav"
            className="mt-3 rounded-[1.2rem] border border-[rgba(200,210,221,0.14)] bg-[rgba(3,20,38,0.95)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:hidden"
          >
            <nav aria-label="Mobile primary navigation" className="grid gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={`mobile-${link.label}`}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-[11px] font-semibold tracking-[0.14em] text-[rgba(200,210,221,0.9)] uppercase transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/#request-capacity"
                className="mt-2 w-full rounded-xl px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase"
              >
                Request Capacity
              </Button>
            </nav>
          </div>
        ) : null}
      </Container>
    </nav>
  );
}