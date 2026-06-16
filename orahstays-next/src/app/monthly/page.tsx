import Link from "next/link";
import PropertyGrid from "@/components/PropertyGrid";
import { properties } from "@/data/properties";

const perks = [
  { icon: "💰", title: "Up to 40% Savings", desc: "Monthly rates are significantly lower than short-term nightly pricing." },
  { icon: "🏠", title: "Fully Furnished", desc: "Everything you need from day one — kitchen, linens, WiFi, utilities." },
  { icon: "🧹", title: "Regular Housekeeping", desc: "Weekly cleaning included in all monthly packages." },
  { icon: "📋", title: "Simple Contracts", desc: "Flexible terms — no long-term tenancy agreements required." },
  { icon: "🛎️", title: "Concierge Support", desc: "Dedicated point of contact for the duration of your stay." },
];

const audiences = [
  { icon: "💼", title: "Business Travellers", desc: "On assignment in Dubai? Live comfortably with all amenities — no hotel fatigue." },
  { icon: "🌍", title: "Relocating to Dubai", desc: "New to the city? Stay in a neighbourhood while you find your permanent home." },
  { icon: "👨‍👩‍👧", title: "Extended Families", desc: "Visiting family for months? A holiday home beats a hotel for space and value." },
  { icon: "❄️", title: "Winter Escapees", desc: "Escape the cold and spend the season in Dubai's warm sunshine and luxury." },
];

export default function MonthlyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Monthly Stays</span>
        </div>
        <h1>Monthly Stays in Dubai</h1>
        <p>
          30+ night stays at special rates — ideal for business travellers, relocators &amp;
          long-term visitors
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
