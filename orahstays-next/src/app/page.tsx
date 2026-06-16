import Link from "next/link";
import PropertyGrid from "@/components/PropertyGrid";

const trustBadges = [
  "Verified Residences",
  "Guest Support",
  "Owner-Ready Platform",
  "UAE Destinations",
];

const destinations = [
  {
    name: "Dubai",
    descriptor: "Skyline apartments, Palm villas, Marina residences",
    stays: "92 curated stays",
    icon: "DXB",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=88&fit=crop",
  },
  {
    name: "Abu Dhabi",
    descriptor: "Saadiyat retreats, island homes, cultural coastline",
    stays: "34 curated stays",
    icon: "AUH",
    img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1000&q=88&fit=crop",
  },
  {
    name: "Ras Al Khaimah",
    descriptor: "Mountain resorts, beachfront escapes, family villas",
    stays: "26 curated stays",
    icon: "RAK",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&q=88&fit=crop",
  },
  {
    name: "Fujairah",
    descriptor: "Coastal mountains, calm beaches, private retreats",
    stays: "18 curated stays",
    icon: "FUJ",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=88&fit=crop",
  },
];

const collections = [
  ["Beachfront Escapes", "Private sea-facing residences with resort-style ease.", "Waves"],
  ["Skyline Penthouses", "Elevated apartments shaped around view, light, and arrival.", "Rise"],
  ["Private Pool Villas", "Standalone homes for privacy, family time, and quiet hosting.", "Pool"],
  ["Family Retreats", "Spacious stays with thoughtful layouts and calm guest support.", "Nest"],
  ["Monthly Luxury Stays", "Longer stays with comfort, service, and flexible rhythm.", "30+"],
  ["Business Travel Residences", "Polished homes for executives, relocations, and teams.", "Desk"],
];

const ownerBenefits = [
  "Premium listing presentation",
  "Guest communication",
  "Calendar coordination",
  "Housekeeping support",
  "Revenue-focused positioning",
  "Owner reporting preview",
];

const ownerMetrics = [
  ["Monthly Revenue", "AED 42,500"],
  ["Occupancy", "78%"],
  ["Upcoming Bookings", "12"],
  ["Average Nightly Rate", "AED 1,350"],
  ["Guest Rating", "4.8"],
];

const adminMetrics = [
  ["Total Properties", "148"],
  ["Active Bookings", "326"],
  ["Pending Owner Applications", "19"],
  ["Monthly Booking Value", "AED 1.82M"],
];

const bookingRows = [
  ["Palm Serene Villa", "Jun 22-28", "AED 24,250", "Confirmed"],
  ["Celeste Suite", "Jun 18-23", "AED 6,250", "Arrival"],
  ["Azure Escape", "Jul 02-09", "AED 10,360", "Pending"],
];

export default function HomePage() {
  return (
    <>
      <section className="hero luxury-hero">
        <div className="hero-film" />
        <div className="hero-content luxury-hero-content">
          <div className="hero-copy">
            <div className="hero-badge">Lumiras Casa · UAE Luxury Holiday Homes</div>
            <h1>Luxury Holiday Homes, Curated for Elevated UAE Stays</h1>
            <p className="hero-sub">
              Premium villas, apartments, and private residences across the UAE with seamless
              booking, refined service, and comfort designed around you.
            </p>
            <div className="hero-actions">
              <Link className="btn-luxury" href="/stays">Explore Stays</Link>
              <Link className="btn-glass" href="/owners">List Your Property</Link>
            </div>
            <div className="trust-row" aria-label="Lumiras Casa trust badges">
              {trustBadges.map((badge) => <span key={badge}>{badge}</span>)}
            </div>
          </div>

          <form className="search-box luxury-search" action="/stays" aria-label="Search stays">
            <div className="sf">
              <label>Destination</label>
              <select name="destination" defaultValue="UAE">
                <option value="UAE">All UAE Destinations</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Ras Al Khaimah</option>
                <option>Fujairah</option>
              </select>
            </div>
            <div className="sf">
              <label>Check-in</label>
              <input name="checkin" type="date" />
            </div>
            <div className="sf">
              <label>Check-out</label>
              <input name="checkout" type="date" />
            </div>
            <div className="sf">
              <label>Guests</label>
              <select name="guests" defaultValue="2">
                <option value="2">2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>8+ Guests</option>
              </select>
            </div>
            <div className="sf">
              <label>Property Type</label>
              <select name="type" defaultValue="all">
                <option value="all">All Types</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Monthly Stay</option>
              </select>
            </div>
            <button className="search-btn" type="submit">Search Stays</button>
          </form>
        </div>
      </section>

      <div className="stats-bar luxury-stats">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">700+</div><div className="stat-lbl">Curated Homes</div></div>
          <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-lbl">Guest Support</div></div>
          <div className="stat-item"><div className="stat-num">4</div><div className="stat-lbl">UAE Destinations</div></div>
          <div className="stat-item"><div className="stat-num">4.9</div><div className="stat-lbl">Guest Rating</div></div>
        </div>
      </div>

      <section className="sec ivory-sec editorial-intro">
        <div className="sec-inner intro-grid">
          <div>
            <div className="sec-label">The Lumiras Casa Standard</div>
            <div className="sec-title">Private residences with the rhythm of a grand hotel.</div>
          </div>
          <p className="sec-sub">
            We curate homes for guests who expect elegance without friction: cinematic locations,
            considered interiors, clear booking, and a support team that understands hospitality.
          </p>
        </div>
      </section>

      <section className="sec dark-sec destination-sec" id="destinations">
        <div className="sec-inner">
          <div className="sec-header">
            <div>
              <div className="sec-label">Browse by Destination</div>
              <div className="sec-title">UAE stays shaped around how you want to travel.</div>
              <p className="sec-sub">
                From skyline apartments to coastal villas, discover UAE stays shaped around how
                you want to travel.
              </p>
            </div>
            <Link className="link-more" href="/stays">View all stays</Link>
          </div>
          <div className="destination-grid">
            {destinations.map((destination) => (
              <Link className="destination-card" href={`/stays?destination=${destination.name}`} key={destination.name}>
                <img src={destination.img} alt={destination.name} />
                <div className="destination-overlay" />
                <div className="destination-content">
                  <span>{destination.icon}</span>
                  <h3>{destination.name}</h3>
                  <p>{destination.descriptor}</p>
                  <strong>{destination.stays}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec pearl-sec">
        <div className="sec-inner">
          <div className="sec-label">Featured Residences</div>
          <div className="sec-title">A sharper edit of premium UAE homes.</div>
          <p className="sec-sub">
            Larger imagery, clearer stay details, and a booking-forward card system for client
            presentation.
          </p>
          <PropertyGrid id="home-props" />
          <div className="center-row">
            <Link className="outline-luxury" href="/stays">View All Properties</Link>
          </div>
        </div>
      </section>

      <section className="sec dark-sec collections-sec" id="concierge">
        <div className="sec-inner">
          <div className="sec-label">Signature Collections</div>
          <div className="sec-title">Curated paths into the right kind of stay.</div>
          <div className="collection-grid">
            {collections.map(([title, copy, icon]) => (
              <div className="collection-card" key={title}>
                <div className="collection-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec ivory-sec owner-acquisition">
        <div className="sec-inner owner-split">
          <div className="owner-image">
            <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1100&q=88&fit=crop" alt="Luxury apartment interior" />
          </div>
          <div>
            <div className="sec-label">For Property Owners</div>
            <div className="sec-title">Turn Your Property Into a Premium Holiday Home</div>
            <p className="sec-sub">
              Lumiras Casa helps owners position, present, and manage premium residences for
              short-term stays across the UAE.
            </p>
            <div className="benefit-grid">
              {ownerBenefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
            </div>
            <div className="hero-actions">
              <Link className="btn-luxury" href="/owners">Start Owner Application</Link>
              <Link className="outline-luxury" href="#owner-dashboard">Preview Owner Dashboard</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark-sec dashboard-sec" id="owner-dashboard">
        <div className="sec-inner dashboard-grid">
          <div>
            <div className="sec-label">Owner Dashboard Preview</div>
            <div className="sec-title">Built for Owners, Not Just Guests</div>
            <p className="sec-sub">
              Preview performance, bookings, occupancy, and property readiness from a clean owner
              dashboard.
            </p>
            <Link className="btn-luxury" href="/owners">View Owner Demo</Link>
          </div>
          <div className="dashboard-mock">
            <div className="dashboard-topbar">
              <span>Palm Serene Villa</span>
              <strong>Owner view</strong>
            </div>
            <div className="metric-grid">
              {ownerMetrics.map(([label, value]) => (
                <div className="metric-card" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="mini-chart">
              {[42, 58, 52, 78, 68, 86, 74].map((height, index) => (
                <i style={{ height: `${height}%` }} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec pearl-sec admin-home-preview">
        <div className="sec-inner dashboard-grid reverse">
          <div className="dashboard-mock light">
            <div className="dashboard-topbar">
              <span>Admin Operations</span>
              <strong>Client preview</strong>
            </div>
            <div className="metric-grid">
              {adminMetrics.map(([label, value]) => (
                <div className="metric-card" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="mock-table">
              {bookingRows.map((row) => (
                <div className="mock-row" key={row[0]}>
                  {row.map((cell) => <span key={cell}>{cell}</span>)}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="sec-label">Admin Preview</div>
            <div className="sec-title">A platform view for bookings, media, owners, and teams.</div>
            <p className="sec-sub">
              Static mock admin screens help the client understand how operations, booking value,
              owner applications, and media readiness can be managed later.
            </p>
            <Link className="outline-luxury" href="/admin">Open Admin Preview</Link>
          </div>
        </div>
      </section>

      <section className="sec ivory-sec" id="journal">
        <div className="sec-inner journal-band">
          <div>
            <div className="sec-label">Journal</div>
            <div className="sec-title">Stay notes for the UAE luxury traveller.</div>
          </div>
          <p className="sec-sub">
            Editorial space for destination guides, owner insights, seasonal stay ideas, and
            concierge-led content in the next prototype phase.
          </p>
        </div>
      </section>
    </>
  );
}
