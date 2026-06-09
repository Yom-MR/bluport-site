import Link from "next/link";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import { SITE_TAGLINE } from "@/lib/constants";

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
    <footer id="contact" className="border-t border-[var(--border)] bg-[linear-gradient(180deg,#061a33,#071a2f)] py-12">
      <Container className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-3">
            <BrandLogo variant="footer" />
            <p className="text-sm text-[var(--muted)]">{SITE_TAGLINE}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
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