import Link from "next/link";
import EarningsCalculator from "@/components/EarningsCalculator";

const steps = [
  { num: "01", icon: "01", title: "Submit Residence", desc: "Share property details for a premium positioning and readiness review." },
  { num: "02", icon: "02", title: "Presentation Setup", desc: "We shape photography, copy, pricing, and collection placement." },
  { num: "03", icon: "03", title: "Guest Operations", desc: "Guest messaging, calendar flow, housekeeping, and readiness are coordinated." },
  { num: "04", icon: "04", title: "Owner Reporting", desc: "Preview performance, occupancy, booking value, and property status clearly." },
];

const included = [
  { icon: "PR", title: "Premium Presentation", desc: "Editorial listing pages, image-led cards, and owner-ready positioning." },
  { icon: "GS", title: "Guest Communication", desc: "Responsive support, booking guidance, and refined arrival coordination." },
  { icon: "HK", title: "Housekeeping", desc: "Cleaning readiness and linen coordination before guest arrival." },
  { icon: "RD", title: "Readiness Checks", desc: "Property condition, visual quality, and issue escalation previews." },
  { icon: "RV", title: "Revenue Positioning", desc: "Premium nightly framing, occupancy cues, and dashboard-level reporting." },
  { icon: "OP", title: "Operations Preview", desc: "A clear prototype for how the management backend can later work." },
];

export default function OwnersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Property Owners</span>
        </div>
        <h1>List Your UAE Residence</h1>
        <p>
          Position your property as a premium holiday home with Lumiras Casa&apos;s owner-ready
          presentation system.
        </p>
      </div>

      <section className="sec">
        <div className="sec-inner">
          <div className="sec-label">How it works</div>
          <div className="sec-title">From private residence to premium stay.</div>
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
