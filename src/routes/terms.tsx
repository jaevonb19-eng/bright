import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BUSINESS } from "@/lib/business";

const TITLE = "Terms & Service Policy | Amelia Tech & Auto LLC";
const DESCRIPTION =
  "Appointments, estimates, computer and vehicle sales, and warranty terms for Amelia Tech & Auto LLC in Elyria, Ohio.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="block">
          <div className="wrap">
            <article className="card policy">
              <span className="eyebrow">Legal</span>
              <h1>Terms &amp; Service Policy</h1>
              <p className="updated">Effective November 13, 2026</p>

              <h2>About these terms</h2>
              <p>
                These terms cover computer sales and repair, automotive repair, and vehicle sales by{" "}
                {BUSINESS.legalName}, {BUSINESS.addressLine}. The specific price and terms for your job are the ones
                written on your estimate, invoice, or receipt.
              </p>

              <h2>Appointments</h2>
              <ul>
                <li>Please call or text before visiting. Sending an inquiry does not confirm a booking.</li>
                <li>
                  Mobile automotive service is by appointment. Availability depends on the vehicle, the location, and
                  the schedule.
                </li>
                <li>Hours are {BUSINESS.hours}. Please call or text to confirm.</li>
              </ul>

              <h2>Estimates and approval</h2>
              <ul>
                <li>You get a price before work starts.</li>
                <li>For vehicle repairs, you can choose a written estimate, an oral estimate, or no estimate.</li>
                <li>We won’t go past the agreed amount without your approval.</li>
                <li>If the problem isn’t clear, we diagnose first, explain your options, and you decide what to fix.</li>
              </ul>

              <h2>Computer sales</h2>
              <ul>
                <li>Each build lists its processor, graphics card, memory, and storage.</li>
                <li>You can ask for photos or a demo of the exact machine before you buy.</li>
                <li>Prices shown for past builds are for reference. Current availability and price are confirmed at the time of sale.</li>
              </ul>

              <h2>Computer repairs</h2>
              <p>
                We recommend backing up your important files before any computer service. Please don’t send passwords
                by text or email.
              </p>

              <h2>Vehicle sales</h2>
              <p>Ask about current availability by call or text. Vehicle terms, including any warranty, are given in writing at the time of sale.</p>

              <h2>Warranty and returns</h2>
              <p>Any warranty or return terms are given in writing on your invoice or receipt.</p>

              <h2>Payment</h2>
              <p>We accept Cash App, Zelle, Apple Pay, Google Pay, and cash. Payment terms are confirmed on your estimate or invoice before work begins.</p>

              <h2>Questions</h2>
              <p>
                Call or text <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a>, or email{" "}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
              </p>

              <a className="btn primary back" href="/">← Back to Home</a>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
