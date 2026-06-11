"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";
import { INDUSTRY_ENTRIES } from "@/data/industries";

const linkClass =
  "group relative pb-1 text-[11px] font-semibold tracking-[0.16em] text-[rgba(214,222,231,0.82)] uppercase transition-colors hover:text-white focus-visible:outline-none";
const underline =
  "absolute right-0 bottom-0 h-px w-0 bg-[var(--accent)] transition-all duration-200 group-hover:left-0 group-hover:w-full";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const industriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!industriesRef.current?.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(180,194,209,0.12)] bg-[rgba(5,11,22,0.78)] backdrop-blur-xl">
      <Container className="py-2">
        <div className="flex min-h-[70px] w-full items-center gap-4 lg:min-h-[76px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            aria-label="Bluport Logistics home"
            className="flex shrink-0 items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <BrandLogo variant="light" placement="navbar" />
          </Link>

          <nav aria-label="Primary" className="hidden justify-center md:flex md:items-center md:gap-x-7 lg:gap-x-9">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
                <span className={underline} />
              </Link>
            ))}
            <div ref={industriesRef} className="relative">
              <button
                type="button"
                aria-expanded={isIndustriesOpen}
                aria-controls="industries-menu"
                onClick={() => setIsIndustriesOpen((current) => !current)}
                className="group inline-flex items-center gap-1 pb-1 text-[11px] font-semibold tracking-[0.16em] text-[rgba(214,222,231,0.82)] uppercase transition-colors hover:text-white focus-visible:outline-none"
              >
                Industries
                <ChevronDown
                  size={14}
                  aria-hidden
                  className={isIndustriesOpen ? "rotate-180 transition-transform" : "transition-transform"}
                />
              </button>
              {isIndustriesOpen ? (
                <div
                  id="industries-menu"
                  className="absolute left-1/2 top-[calc(100%+1rem)] z-20 w-[300px] -translate-x-1/2 rounded-2xl border border-[rgba(180,194,209,0.14)] bg-[var(--navy-850)] p-3 shadow-[0_28px_60px_rgba(0,0,0,0.5)]"
                >
                  <Link
                    href="/industries"
                    onClick={() => setIsIndustriesOpen(false)}
                    className="block rounded-xl px-3 py-2 text-[11px] font-semibold tracking-[0.14em] text-[var(--accent-light)] uppercase transition-colors hover:bg-[rgba(255,255,255,0.04)]"
                  >
                    Industries Overview
                  </Link>
                  <div className="mt-1 grid gap-0.5">
                    {INDUSTRY_ENTRIES.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={() => setIsIndustriesOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm text-[var(--steel-300)] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                      >
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {NAV_LINKS.slice(2).map((link) => (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
                <span className={underline} />
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-x-3 md:gap-x-4 lg:ml-0 lg:justify-end">
            <Button
              href="/#request-capacity"
              className="hidden px-5 py-3 md:inline-flex"
              withArrow
            >
              Request Capacity
            </Button>
            <button
              type="button"
              aria-controls="mobile-primary-nav"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(180,194,209,0.2)] bg-[rgba(255,255,255,0.03)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] md:hidden"
            >
              {isMenuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-primary-nav"
            className="mt-3 rounded-2xl border border-[rgba(180,194,209,0.12)] bg-[var(--navy-850)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.4)] md:hidden"
          >
            <nav aria-label="Mobile primary navigation" className="grid gap-1">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <Link
                  key={`mobile-${link.label}`}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-[11px] font-semibold tracking-[0.16em] text-[rgba(214,222,231,0.85)] uppercase transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-1 rounded-xl border border-[rgba(180,194,209,0.1)] p-2">
                <p className="px-3 py-2 text-[11px] font-semibold tracking-[0.16em] text-[var(--accent-light)] uppercase">
                  Industries
                </p>
                <Link
                  href="/industries"
                  className="block rounded-lg px-3 py-2 text-sm text-[var(--steel-300)] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries Overview
                </Link>
                {INDUSTRY_ENTRIES.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-[var(--steel-300)] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
              {NAV_LINKS.slice(2).map((link) => (
                <Link
                  key={`mobile-${link.label}`}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-[11px] font-semibold tracking-[0.16em] text-[rgba(214,222,231,0.85)] uppercase transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/#request-capacity" className="mt-2 w-full" withArrow>
                Request Capacity
              </Button>
            </nav>
          </div>
        ) : null}
      </Container>
    </nav>
  );
}
