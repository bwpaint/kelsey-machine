/**
 * Privacy Policy
 * Plain-English privacy policy for kmstx.com. Review by counsel recommended.
 */

import {
  NavBar,
  Footer,
  NewsletterBar,
  PageHero,
  C,
  KMS_PHONE,
  KMS_PHONE_HREF,
  KMS_EMAIL,
} from "@/components/KmsLayout";

const UPDATED = "May 27, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "1.35rem",
          color: C.blueDark,
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "1rem",
          color: C.textMid,
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <PageHero
        h1="Privacy Policy"
        subheading="How Kelsey Machine Services collects, uses, and protects the information you share with us."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.9rem",
              color: C.textMid,
              marginBottom: "2rem",
            }}
          >
            Last updated: {UPDATED}
          </p>

          <Section title="Who We Are">
            Kelsey Machine Services ("KMS," "we," "us," or "our") is a rotating
            equipment repair company headquartered at 814 Summer Park Dr,
            Building #600, Stafford, TX 77477. This Privacy Policy explains how
            we handle information collected through our website at kmstx.com.
          </Section>

          <Section title="Information We Collect">
            We collect information you voluntarily provide when you fill out a
            quote request, contact form, or newsletter signup — typically your
            name, company, phone number, email address, the service you're
            interested in, and any details you include about your equipment. We
            do not ask for sensitive personal information, and you should not
            submit it through our forms.
            <br />
            <br />
            We may also collect limited technical information automatically,
            such as your browser type, device, and pages visited, through
            standard web analytics. This information is aggregated and not used
            to identify you personally.
          </Section>

          <Section title="How We Use Your Information">
            We use the information you provide to respond to your inquiry,
            prepare quotes, schedule equipment pickup and repair, and follow up
            about your request. If you join our newsletter, we use your email to
            send occasional industry tips, maintenance reminders, and company
            news. We do not sell or rent your personal information to anyone.
          </Section>

          <Section title="Service Providers">
            We use trusted third-party services to operate the website and
            process form submissions — for example, an email delivery provider
            that routes your form submission to our team, and a web hosting and
            analytics provider. These providers only receive the information
            necessary to perform their function and are not permitted to use it
            for their own purposes.
          </Section>

          <Section title="Cookies & Analytics">
            Our website may use cookies and similar technologies to understand
            how visitors use the site so we can improve it. You can disable
            cookies in your browser settings; some site features may not
            function as intended if you do.
          </Section>

          <Section title="Data Retention">
            We keep the information you submit for as long as needed to serve
            you and to maintain our business records, after which it is securely
            deleted or anonymized. You may request that we delete your
            information at any time by contacting us.
          </Section>

          <Section title="Your Choices">
            You may opt out of our newsletter at any time using the unsubscribe
            link in any email or by contacting us directly. You may also request
            access to, correction of, or deletion of the personal information we
            hold about you.
          </Section>

          <Section title="Data Security">
            We take reasonable measures to protect the information you share
            with us. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </Section>

          <Section title="Children's Privacy">
            Our website is intended for business and professional use and is not
            directed to children under 13. We do not knowingly collect
            information from children.
          </Section>

          <Section title="Changes to This Policy">
            We may update this Privacy Policy from time to time. The "Last
            updated" date above reflects the most recent revision. Continued use
            of the website after changes are posted constitutes acceptance of
            the updated policy.
          </Section>

          <Section title="Contact Us">
            Questions about this Privacy Policy? Reach us at{" "}
            <a
              href={KMS_PHONE_HREF}
              style={{
                color: C.green,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {KMS_PHONE}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${KMS_EMAIL}`}
              style={{
                color: C.green,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {KMS_EMAIL}
            </a>
            , or write to us at 814 Summer Park Dr, Building #600, Stafford, TX
            77477.
          </Section>
        </div>
      </main>
      <NewsletterBar />
      <Footer />
    </>
  );
}
