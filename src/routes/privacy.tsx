import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BUSINESS } from "@/lib/business";

const TITLE = "Privacy Policy | Amelia Tech & Auto LLC";
const DESCRIPTION =
  "How Amelia Tech & Auto LLC in Elyria, Ohio handles the information you share when you call, text, or email about computer or automotive service.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="block">
          <div className="wrap">
            <article className="card policy">
              <span className="eyebrow">Legal</span>
              <h1>Privacy Policy</h1>
              <p className="updated">Effective November 13, 2026</p>

              <h2>Who we are</h2>
              <p>
                This website is operated by {BUSINESS.legalName}, {BUSINESS.addressLine}. You can reach us at{" "}
                <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a> or{" "}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
              </p>

              <h2>Information we collect</h2>
              <p>
                When you send the quote form on this website, the details you enter are stored securely so we can
                read your request and get back to you. Only we can see these submissions.
              </p>
              <p>When you call, text, email, or use the quote form, we receive the information you choose to share, such as:</p>
              <ul>
                <li>Your name, phone number, and email address</li>
                <li>Details about your computer, vehicle, budget, or the service you need</li>
                <li>Appointment and mobile-service location details you provide</li>
              </ul>

              <h2>How we use it</h2>
              <ul>
                <li>To answer your questions and give you a quote</li>
                <li>To schedule and carry out the service you ask for</li>
                <li>To keep invoices, receipts, and any written estimate or warranty records</li>
                <li>To meet legal, tax, and accounting requirements</li>
              </ul>

              <h2>Sharing</h2>
              <p>
                We do not sell your personal information. We share it only when needed to provide the service you
                request, or when required by law.
              </p>

              <h2>Other websites and services</h2>
              <p>
                This site shows a Google map of our location and links to our Facebook page. Those services may collect
                information under their own privacy policies when you use them. Like most websites, our hosting
                provider may automatically log basic technical details (such as IP address and browser type) to keep
                the site secure and working.
              </p>

              <h2>Your choices</h2>
              <p>
                You can ask us what information we have about you, or ask us to correct or delete it, by emailing{" "}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. We may need to keep some records, such as
                invoices, where the law requires it.
              </p>

              <h2>Please don’t send sensitive details</h2>
              <p>Do not send passwords, full payment card numbers, or other sensitive information by text or email.</p>

              <h2>Children</h2>
              <p>This website is meant for adults and is not directed to children under 13.</p>

              <h2>Changes</h2>
              <p>If we update this policy, we will post the new version on this page with a new effective date.</p>

              <a className="btn primary back" href="/">← Back to Home</a>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
