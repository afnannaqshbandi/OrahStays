import Link from "next/link";
import DetailGallery from "@/components/DetailGallery";
import TestimonialCard from "@/components/TestimonialCard";

const amenities = [
  { icon: "🏊", label: "Private Pool" },
  { icon: "🏖️", label: "Private Beach" },
  { icon: "🚗", label: "Parking x3" },
  { icon: "🍳", label: "Chef's Kitchen" },
  { icon: "🎬", label: "Home Theatre" },
  { icon: "💪", label: "Home Gym" },
  { icon: "📡", label: "High-Speed WiFi" },
  { icon: "❄️", label: "Central A/C" },
  { icon: "🧺", label: "Laundry Room" },
];

const reviews = [
  { stars: "★★★★★", text: "Words can't describe how perfect this villa was. The beach, the pool, the sunset views — absolutely magical Dubai experience.", initials: "AK", avatar: "av4", name: "Aisha K.", location: "Riyadh, KSA" },
  { stars: "★★★★★", text: "We hosted a family reunion here — 9 of us. Space was perfect, team was responsive, and the concierge helped plan every evening.", initials: "JP", avatar: "av5", name: "James P.", location: "New York, USA" },
];

export default function PropertyDetailPage() {
  return (
    <div className="detail-layout">
      <div>
        <div
          className="breadcrumb"
          style={{ justifyContent: "flex-start", color: "var(--slate)", marginBottom: "1.25rem" }}
        >
          <Link href="/" style={{ color: "var(--teal)", cursor: "pointer" }}>
            Home
          </Link>{" "}
          /{" "}
          <Link href="/browse" style={{ color: "var(--teal)", cursor: "pointer" }}>
            Browse
          </Link>{" "}
          / <span>Palm Jumeirah Villa</span>
        </div>

        <DetailGallery />

        <div style={{ marginTop: "2rem" }}>
          <div className="detail-location">📍 Palm Jumeirah, Dubai</div>
          <div className="detail-info">
            <h1>5BR Beachfront Villa with Private Pool</h1>
          </div>
          <div className="detail-meta-row">
            <span>🛏 5 Bedrooms</span>
            <span>🚿 4 Bathrooms</span>
            <span>👤 10 Guests</span>
            <span>📐 480 sqm</span>
            <span className="prop-rating">★ 5.0 (42 reviews)</span>
          </div>
          <p className="detail-desc">
            Nestled on the iconic Palm Jumeirah, this stunning 5-bedroom villa offers
            unparalleled views of the Arabian Gulf and the Dubai skyline. Wake up to the sound
            of waves on your private beach and spend evenings floating in your
            temperature-controlled pool. The villa is furnished to the highest standard with
            custom Italian furniture, a fully-equipped chef&apos;s kitchen, and a home theatre.
            Steps away from the best restaurants and beach clubs the Palm has to offer.
          </p>
          <div className="sec-label" style={{ marginBottom: "1rem" }}>
            Amenities
          </div>
          <div className="amenities-grid">
            {amenities.map((a) => (
              <div className="amenity" key={a.label}>
                <span className="amenity-icon">{a.icon}</span> {a.label}
              </div>
            ))}
          </div>
          <div className="sec-label" style={{ margin: "1.5rem 0 1rem" }}>
            Guest Reviews
          </div>
          <div className="testi-grid">
            {reviews.map((r) => (
              <TestimonialCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Card */}
      <div>
        <div className="booking-card">
          <div className="booking-price">
            AED 4,200 <small>/night</small>
          </div>
          <div className="booking-fields">
            <div className="bf-item">
              <label>Check-in</label>
              <input type="date" />
            </div>
            <div className="bf-item">
              <label>Check-out</label>
              <input type="date" />
            </div>
          </div>
          <div className="bf-item" style={{ marginBottom: "12px" }}>
            <label>Guests</label>
            <select
              style={{
                width: "100%",
                border: "1.5px solid #e2e8f0",
                borderRadius: "8px",
                padding: "9px 12px",
                fontSize: "14px",
                fontFamily: "inherit",
              }}
            >
              <option>2 Guests</option>
              <option>4 Guests</option>
              <option>6 Guests</option>
              <option>8 Guests</option>
              <option>10 Guests</option>
            </select>
          </div>
          <button className="book-now">Reserve Now</button>
          <div className="booking-note">
            You won&apos;t be charged yet — confirm to complete booking
          </div>
          <div className="price-breakdown">
            <div className="price-row">
              <span>AED 4,200 × 5 nights</span>
              <span>AED 21,000</span>
            </div>
            <div className="price-row">
              <span>Cleaning fee</span>
              <span>AED 800</span>
            </div>
            <div className="price-row">
              <span>Service fee</span>
              <span>AED 1,050</span>
            </div>
            <div className="price-row total">
              <span>Total</span>
              <span>AED 22,850</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
