import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

const footerLinks = [
  { label: "Mission", href: "/mission" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Request Capacity", href: "/#request-capacity" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--border)] bg-[var(--navy)]/40 py-10">
      <Container className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold tracking-wide text-[var(--foreground)]">{SITE_NAME}</h3>
            <p className="text-sm text-[var(--muted)]">{SITE_TAGLINE}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-[0.1em] text-[var(--muted)] uppercase transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} Bluport Logistics. All rights reserved.</p>
      </Container>
    </footer>
  );
}