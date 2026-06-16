import Link from "next/link";
import EarningsCalculator from "@/components/EarningsCalculator";

const steps = [
  { num: "01", icon: "📋", title: "List Your Property", desc: "Submit your property details. Our team reviews and onboards you within 48 hours." },
  { num: "02", icon: "📸", title: "Professional Setup", desc: "We handle photography, listing copy, pricing strategy, and channel distribution." },
  { num: "03", icon: "🛎️", title: "We Manage Everything", desc: "Guest comms, check-in, housekeeping, maintenance — all handled by our team." },
  { num: "04", icon: "💰", title: "You Get Paid", desc: "Monthly payouts directly to your account with full transparent reporting." },
];

const included = [
  { icon: "📣", title: "Multi-Channel Marketing", desc: "Listed on Airbnb, Booking.com, Expedia, VRBO, and our own platform." },
  { icon: "💬", title: "Guest Communication", desc: "24/7 guest support, booking management, and review handling." },
  { icon: "🧹", title: "Housekeeping", desc: "Professional cleaning and linen service before every guest arrival." },
  { icon: "🔧", title: "Maintenance", desc: "Quick-response maintenance team for any repairs or issues." },
  { icon: "📊", title: "Revenue Management", desc: "Dynamic pricing to maximise occupancy and revenue year-round." },
  { icon: "📑", title: "DTCM Compliance", desc: "We manage all licensing, permits, and regulatory requirements." },
];

export default function OwnersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Property Owners</span>
        </div>
        <h1>List Your Dubai Property</h1>
        <p>
          Join 500+ property owners earning maximum returns with OrahStays&apos; full-service
          management
        </p>
      </div>

      <section className="sec">
        <div className="sec-inner">
          <div className="sec-label">How it works</div>
          <div className="sec-title">Start Earning in 4 Simple Steps</div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.num}>
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Earnings Calculator */}
          <EarningsCalculator />

          {/* What's included */}
          <div style={{ marginTop: "3rem" }}>
            <div className="sec-label">Full-service management</div>
            <div className="sec-title">Everything We Handle For You</div>
            <div className="why-grid" style={{ marginTop: "1.5rem" }}>
              {included.map((item) => (
                <div className="why-card" key={item.title}>
                  <div className="why-icon">{item.icon}</div>
                  <div className="why-title">{item.title}</div>
                  <div className="why-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="cta-banner"
            style={{ borderRadius: "var(--radius-lg)", marginTop: "3rem" }}
          >
            <h2>Ready to Maximise Your Returns?</h2>
            <p>Talk to our property team today and get a free rental income assessment.</p>
            <div className="cta-btns">
              <Link className="btn-white" href="/contact">
                Get Free Assessment
              </Link>
              <button className="btn-outline-w">Download Owner Guide</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
