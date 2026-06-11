import Link from "next/link";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import { SITE_TAGLINE, TRUST_BAR_ITEMS } from "@/lib/constants";
import { BLUPORT_BASE_DISPLAY, BLUPORT_PHONE_DISPLAY, CONTACT_CHANNEL_LIST } from "@/lib/contact";

const footerLinks = [
  { label: "Mission", href: "/mission" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Request Capacity", href: "/#request-capacity" },
  { label: "Privacy", href: "/privacy" },
];

const contactPreview = [CONTACT_CHANNEL_LIST[0], CONTACT_CHANNEL_LIST[1], CONTACT_CHANNEL_LIST[2]];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[rgba(200,210,221,0.15)] bg-[#020a14] py-14">
      <Container className="space-y-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <BrandLogo variant="light" placement="footer" />
            <p className="max-w-[34ch] text-sm leading-7 text-[#c8d2dd]">{SITE_TAGLINE}</p>
            <p className="text-sm leading-7 text-[#e5eef6]">
              Veteran-owned logistics focused on schedule protection, field discipline, and clean handoffs.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {TRUST_BAR_ITEMS.slice(0, 4).map((item) => (
                <span key={item} className="rounded-full border border-[rgba(200,210,221,0.14)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#dce6ee] uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="technical-label text-[var(--cyan)]">QUICK LINKS</p>
            <nav className="grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#dce6ee] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="technical-label text-[var(--cyan)]">CONTACT</p>
            <div className="space-y-3 text-sm leading-7 text-[#dce6ee]">
              <p>{BLUPORT_PHONE_DISPLAY}</p>
              <p>{BLUPORT_BASE_DISPLAY}</p>
              {contactPreview.map((item) => (
                <p key={item.email} className="flex items-start justify-between gap-3 border-t border-[rgba(200,210,221,0.12)] pt-3">
                  <span className="font-semibold text-white">{item.email}</span>
                  <span className="text-right text-[#c8d2dd]">{item.purpose}</span>
                </p>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/#request-capacity"
                className="inline-flex rounded-lg border border-transparent bg-[var(--blue)] px-5 py-3 text-xs font-semibold tracking-[0.1em] text-slate-950 uppercase transition-colors hover:bg-[var(--cyan)]"
              >
                Request Capacity
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(200,210,221,0.15)] pt-5 text-xs text-[#6f7f91]">
          <p>© {new Date().getFullYear()} Bluport Logistics. All rights reserved.</p>
          <p>Veteran-owned. Texas-based. Built for uptime-sensitive field operations.</p>
        </div>
      </Container>
    </footer>
  );
}