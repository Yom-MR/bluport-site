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
    <footer id="contact" className="border-t border-[rgba(200,210,221,0.15)] bg-[#020a14] py-12">
      <Container className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="space-y-2.5">
            <BrandLogo variant="light" placement="footer" />
            <p className="text-sm text-[#c8d2dd]">{SITE_TAGLINE}</p>
          </div>
          <nav className="flex flex-wrap justify-end gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-[0.1em] text-[#c8d2dd] uppercase transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="border-t border-[rgba(200,210,221,0.15)] pt-5 text-xs text-[#6f7f91]">
          © {new Date().getFullYear()} Bluport Logistics. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}