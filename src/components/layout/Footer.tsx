import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import Button from "@/components/ui/Button";
import { SITE_TAGLINE } from "@/lib/constants";
import { BLUPORT_BASE_DISPLAY, BLUPORT_PHONE_DISPLAY, BLUPORT_PHONE_E164, CONTACT_CHANNEL_LIST } from "@/lib/contact";

const exploreLinks = [
  { label: "Mission", href: "/mission" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

const contactPreview = CONTACT_CHANNEL_LIST.slice(0, 4);

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-[rgba(180,194,209,0.12)] bg-[var(--navy-950)]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr_1fr]">
          <div className="space-y-5">
            <BrandLogo variant="light" placement="footer" />
            <p className="max-w-[36ch] text-sm leading-7 text-[var(--steel-300)]">{SITE_TAGLINE}</p>
            <div className="flex items-center gap-5 pt-1 text-sm text-[var(--steel-300)]">
              <a href={`tel:${BLUPORT_PHONE_E164}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone size={15} aria-hidden className="text-[var(--accent)]" />
                {BLUPORT_PHONE_DISPLAY}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} aria-hidden className="text-[var(--accent)]" />
                {BLUPORT_BASE_DISPLAY}
              </span>
            </div>
            <div className="pt-2">
              <Button href="/#request-capacity" withArrow>
                Request Capacity
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <p className="technical-label">Explore</p>
            <nav className="grid gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--steel-300)] transition-colors hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight size={13} aria-hidden className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <p className="technical-label">Operations Channels</p>
            <div className="grid gap-3">
              {contactPreview.map((item) => (
                <a
                  key={item.email}
                  href={`mailto:${item.email}`}
                  className="flex flex-col gap-0.5 border-t border-[rgba(180,194,209,0.1)] pt-3 transition-colors"
                >
                  <span className="text-sm font-semibold text-white">{item.email}</span>
                  <span className="text-xs text-[var(--steel-400)]">{item.purpose}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(180,194,209,0.12)] pt-6 text-xs text-[var(--steel-400)]">
          <p>© {new Date().getFullYear()} Bluport Logistics. All rights reserved.</p>
          <p>Veteran-owned. Texas-based. Built for uptime-sensitive field operations.</p>
        </div>
      </Container>
    </footer>
  );
}
