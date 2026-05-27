/**
 * Terms of Service
 * Plain-English terms for kmstx.com. Review by counsel recommended.
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, C, KMS_PHONE, KMS_PHONE_HREF, KMS_EMAIL } from "@/components/KmsLayout";

const UPDATED = "May 27, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.35rem", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>{title}</h2>
      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7 }}>{children}</div>
    </section>
  );
}

export default function Terms() {
  return (
    <>
      <NavBar />
      <PageHero
        h1="Terms of Service"
        subheading="The terms that govern your use of the Kelsey Machine Services website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMid, marginBottom: "2rem" }}>Last updated: {UPDATED}</p>

          <Section title="Acceptance of These Terms">
            By accessing or using kmstx.com (the "Site"), operated by Kelsey Machine Services ("KMS," "we," "us," or "our"), you agree to these Terms of Service. If you do not agree, please do not use the Site.
          </Section>

          <Section title="Use of the Site">
            You may use the Site for lawful purposes related to learning about and requesting our rotating equipment repair services. You agree not to misuse the Site, interfere with its operation, attempt to gain unauthorized access, or use it to transmit harmful or unlawful content.
          </Section>

          <Section title="Quotes & Service Requests">
            Information on the Site, including service descriptions and any pricing or turnaround references, is provided for general informational purposes and does not constitute a binding offer. Any quote we provide in response to your request is an estimate based on the information available and is subject to inspection of the equipment. A binding agreement is formed only when KMS and the customer confirm the scope, price, and terms of a specific repair in writing.
          </Section>

          <Section title="Warranty">
            Repairs performed by KMS are covered by our written 24-month warranty, the terms of which are described on our <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>Warranty page</Link>. That warranty, together with any written repair agreement, governs the work we perform. Nothing on the Site expands or modifies those warranty terms.
          </Section>

          <Section title="Intellectual Property">
            All content on the Site — including text, logos, graphics, and images — is owned by or licensed to KMS and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from Site content without our prior written permission.
          </Section>

          <Section title="Disclaimers">
            The Site is provided "as is" and "as available" without warranties of any kind, express or implied, regarding its accuracy, completeness, or availability. While we strive to keep information current and correct, we do not warrant that the Site will be error-free or uninterrupted.
          </Section>

          <Section title="Limitation of Liability">
            To the fullest extent permitted by law, KMS shall not be liable for any indirect, incidental, or consequential damages arising out of your use of, or inability to use, the Site. This provision does not limit any rights or remedies under a written repair agreement or the KMS warranty.
          </Section>

          <Section title="Governing Law">
            These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws principles. Any dispute relating to the Site shall be subject to the exclusive jurisdiction of the state and federal courts located in Texas.
          </Section>

          <Section title="Changes to These Terms">
            We may revise these Terms from time to time. The "Last updated" date above reflects the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.
          </Section>

          <Section title="Contact Us">
            Questions about these Terms? Reach us at <a href={KMS_PHONE_HREF} style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>{KMS_PHONE}</a> or <a href={`mailto:${KMS_EMAIL}`} style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>{KMS_EMAIL}</a>, or write to us at 814 Summer Park Dr, Building #600, Stafford, TX 77477.
          </Section>
        </div>
      </main>
      <NewsletterBar />
      <Footer />
    </>
  );
}
