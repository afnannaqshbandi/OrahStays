import Link from "next/link";
import PropertyGrid from "@/components/PropertyGrid";
import { properties } from "@/data/properties";

const perks = [
  { icon: "01", title: "Refined Monthly Value", desc: "Long-stay pricing framed for premium residences and flexible plans." },
  { icon: "02", title: "Fully Furnished", desc: "Kitchen, linens, WiFi, utilities, and arrival-ready comfort." },
  { icon: "03", title: "Housekeeping Rhythm", desc: "Cleaning and readiness support throughout extended stays." },
  { icon: "04", title: "Flexible Terms", desc: "Shorter commitments than traditional tenancy, with clearer guest flow." },
  { icon: "05", title: "Concierge Support", desc: "A dedicated point of contact for the duration of the stay." },
];

const audiences = [
  { icon: "BT", title: "Business Travellers", desc: "Live comfortably with workspace, privacy, and premium neighbourhood access." },
  { icon: "RL", title: "Relocating to the UAE", desc: "Stay in a considered neighbourhood while choosing a permanent home." },
  { icon: "FA", title: "Extended Families", desc: "More space, calmer routines, and a private-home feel for longer visits." },
  { icon: "SE", title: "Seasonal Guests", desc: "Spend winter or summer periods in a serviced private residence." },
];

export default function MonthlyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Monthly Stays</span>
        </div>
        <h1>Monthly Luxury Stays</h1>
        <p>
          30+ night UAE residences for relocations, seasonal stays, and executive travel.
        </p>
      </div>

      <section className="sec">
        <div className="sec-inner">
          <div className="sec-label">Why stay monthly</div>
          <div className="sec-title">Benefits of a Monthly Stay</div>
          <div className="monthly-perks">
            {perks.map((perk) => (
              <div className="perk-card" key={perk.title}>
                <div className="perk-icon">{perk.icon}</div>
                <div className="perk-title">{perk.title}</div>
                <div className="perk-desc">{perk.desc}</div>
              </div>
            ))}
          </div>

          <div className="sec-label" style={{ marginTop: "1rem" }}>
            Who it&apos;s for
          </div>
          <div className="sec-title">Perfect for Every Long-Stay Guest</div>
          <div className="why-grid" style={{ marginTop: "1.5rem" }}>
            {audiences.map((a) => (
              <div
                className="why-card"
                style={{ background: "var(--teal-bg)", borderColor: "var(--teal-light)" }}
                key={a.title}
              >
                <div className="why-icon">{a.icon}</div>
                <div className="why-title" style={{ color: "var(--ink)" }}>
                  {a.title}
                </div>
                <div className="why-desc" style={{ color: "var(--slate)", opacity: 1 }}>
                  {a.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className="sec-label">Monthly listings</div>
            <div className="sec-title" style={{ marginBottom: "1.5rem" }}>
              Available for Monthly Stays
            </div>
            <PropertyGrid id="monthly-props" items={properties.slice(0, 3)} />
          </div>
        </div>
      </section>
    </>
  );
}
