import Link from "next/link";
import FilterTabs from "@/components/FilterTabs";
import PropertyGrid from "@/components/PropertyGrid";
import TestimonialCard from "@/components/TestimonialCard";

const areas = [
  { name: "Dubai Marina", count: "250+ homes", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80&fit=crop" },
  { name: "Downtown Dubai", count: "110+ homes", img: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400&q=80&fit=crop" },
  { name: "Palm Jumeirah", count: "80+ homes", img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80&fit=crop" },
  { name: "JBR", count: "90+ homes", img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80&fit=crop" },
  { name: "Business Bay", count: "130+ homes", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80&fit=crop" },
  { name: "Dubai Hills", count: "60+ homes", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80&fit=crop" },
];

const whyCards = [
  { icon: "✅", title: "DTCM Licensed", desc: "All properties fully licensed and compliant with Dubai Tourism & Commerce Marketing regulations." },
  { icon: "🏡", title: "Curated Collection", desc: "Every home is personally inspected — no substandard listings, ever." },
  { icon: "📞", title: "24/7 Guest Support", desc: "Round-the-clock concierge and emergency support throughout your stay." },
  { icon: "💳", title: "Flexible Payments", desc: "Pay by card, bank transfer, or crypto — in AED, USD, EUR, GBP and more." },
];

const testimonials = [
  { stars: "★★★★★", text: "Absolutely stunning Marina apartment. The views were beyond what we imagined, and the check-in was seamless. We'll be back next winter!", initials: "MK", avatar: "av1", name: "Mohamed K.", location: "Cairo, Egypt" },
  { stars: "★★★★★", text: "The Palm villa was a dream for our family of 8. Private pool, private beach, and the team was incredible. Worth every dirham.", initials: "SH", avatar: "av2", name: "Shahid H.", location: "London, UK" },
  { stars: "★★★★☆", text: "Great location in Business Bay, very clean and modern. The canal views from the studio were a nice surprise. Highly recommend.", initials: "DR", avatar: "av3", name: "Deen R.", location: "Sydney, Australia" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-shapes">
          <div className="sh sh1" />
          <div className="sh sh2" />
          <div className="sh sh3" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">✦ Dubai&apos;s Premium Holiday Home Platform</div>
          <h1>
            Find Your Perfect Stay
            <br />
            in <em>Dubai</em>
          </h1>
          <p className="hero-sub">
            Handpicked luxury apartments, villas &amp; holiday homes — from Marina skylines to
            Palm beachfronts.
          </p>
          <div className="search-box">
            <div className="sf">
              <label>Location</label>
              <select>
                <option>All Dubai Areas</option>
                <option>Dubai Marina</option>
                <option>Downtown Dubai</option>
                <option>Business Bay</option>
                <option>Palm Jumeirah</option>
                <option>JBR</option>
                <option>Dubai Hills</option>
              </select>
            </div>
            <div className="sf">
              <label>Check-in → Check-out</label>
              <input type="text" placeholder="Select dates" />
            </div>
            <div className="sf">
              <label>Guests</label>
              <select>
                <option>1–2 Guests</option>
                <option>3–4 Guests</option>
                <option>5–6 Guests</option>
                <option>7+ Guests</option>
              </select>
            </div>
            <Link className="search-btn" href="/browse">
              🔍 Search
            </Link>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">700+</div><div className="stat-lbl">Premium Properties</div></div>
          <div className="stat-item"><div className="stat-num">12,000+</div><div className="stat-lbl">Happy Guests</div></div>
          <div className="stat-item"><div className="stat-num">35</div><div className="stat-lbl">Dubai Neighbourhoods</div></div>
          <div className="stat-item"><div className="stat-num">4.9★</div><div className="stat-lbl">Average Rating</div></div>
        </div>
      </div>

      {/* Areas */}
      <section className="sec" style={{ background: "var(--mist)" }}>
        <div className="sec-inner">
          <div className="sec-header">
            <div>
              <div className="sec-label">Browse by location</div>
              <div className="sec-title">Discover Dubai&apos;s Finest Areas</div>
            </div>
            <Link className="link-more" href="/browse">
              View all areas →
            </Link>
          </div>
          <div className="areas-grid">
            {areas.map((area) => (
              <Link className="area-card" href="/browse" key={area.name}>
                <div className="area-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={area.img} alt={area.name} />
                  <div className="area-overlay" />
                  <div className="area-txt">
                    <div className="area-name">{area.name}</div>
                    <div className="area-count">{area.count}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="sec">
        <div className="sec-inner">
          <div className="sec-label">Hand-picked for you</div>
          <div className="sec-title">Holiday Homes &amp; Apartments</div>
          <p className="sec-sub" style={{ marginBottom: "1.75rem" }}>
            From cozy studios to palatial villas — for every trip, every budget.
          </p>
          <FilterTabs />
          <PropertyGrid id="home-props" />
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link
              href="/browse"
              style={{
                background: "none",
                border: "2px solid var(--teal)",
                color: "var(--teal)",
                padding: "12px 32px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View All Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="sec dark-sec">
        <div className="sec-inner">
          <div className="sec-label" style={{ color: "#5EEAD4" }}>
            Why choose us
          </div>
          <div className="sec-title" style={{ color: "#fff" }}>
            The OrahStays Difference
          </div>
          <div className="why-grid">
            {whyCards.map((card) => (
              <div className="why-card" key={card.title}>
                <div className="why-icon">{card.icon}</div>
                <div className="why-title">{card.title}</div>
                <div className="why-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec" style={{ background: "var(--mist)" }}>
        <div className="sec-inner">
          <div className="sec-label">Guest reviews</div>
          <div className="sec-title">What Our Guests Say</div>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Own a Property in Dubai?</h2>
        <p>
          Maximize your returns with professional short-term rental management. We handle
          everything — from guests to maintenance.
        </p>
        <div className="cta-btns">
          <Link className="btn-white" href="/owners">
            Calculate Your Earnings
          </Link>
          <Link className="btn-outline-w" href="/owners">
            Learn About Management
          </Link>
        </div>
      </div>
    </>
  );
}
