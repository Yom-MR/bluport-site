import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Bluport Logistics website and contact form submissions.",
};

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-[#f4f8ff] text-[#031426]">
      <Container className="space-y-6">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1 className="section-title max-w-[12ch] text-[#031426]">How Bluport handles information.</h1>
        <div className="max-w-[72ch] space-y-4 text-base leading-8 text-[#34465a] md:text-lg">
          <p>
            Information submitted through Bluport website forms is used to evaluate logistics requests,
            respond to inquiries, and support operational follow-up.
          </p>
          <p>
            Bluport does not sell visitor data. Operational messages are shared only with team members
            and service providers needed to process requests.
          </p>
          <p>
            If you have questions about how your information is used, contact Bluport operations through the
            Contact page.
          </p>
        </div>
      </Container>
    </section>
  );
}
