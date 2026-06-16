import Link from "next/link";

const gallery = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=88&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=86&fit=crop",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&q=86&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=86&fit=crop",
];

const amenities = [
  "Private pool",
  "Beach access",
  "Chef-ready kitchen",
  "Home cinema",
  "Dedicated parking",
  "High-speed WiFi",
  "Housekeeping ready",
  "Concierge support",
];

export default function PropertyDetailPage() {
  return (
    <>
      <section className="property-hero">
        <div className="sec-inner">
          <div className="breadcrumb property-crumb">
            <Link href="/">Home</Link> / <Link href="/stays">Stays</Link> / <span>Palm Jumeirah Serene Villa</span>
          </div>
          <div className="property-hero-grid">
            <div>
              <div className="sec-label">Palm Jumeirah, Dubai</div>
              <h1>Palm Jumeirah Serene Villa</h1>
              <p>
                A private pool villa shaped around calm arrivals, beachside privacy, and
                hotel-grade support for elevated UAE stays.
              </p>
              <div className="detail-pills">
                <span>10 Guests</span>
                <span>5 Bedrooms</span>
                <span>5 Bathrooms</span>
                <span>5.0 Rating</span>
              </div>
            </div>
            <div className="booking-card luxury-booking">
              <div className="booking-price">
                AED 4,850 <small>/night</small>
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
              <div className="bf-item">
                <label>Guests</label>
                <select defaultValue="6">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option>8 Guests</option>
                  <option>10 Guests</option>
                </select>
              </div>
              <button className="book-now">Request to Book</button>
              <div className="booking-note">Static prototype only. No payment or backend connected.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec property-detail-sec">
        <div className="sec-inner">
          <div className="detail-gallery-lux">
            <img className="gallery-main" src={gallery[0]} alt="Palm Jumeirah Serene Villa pool and exterior" />
            <div className="gallery-stack">
              {gallery.slice(1).map((src, index) => (
                <img src={src} alt={`Villa gallery ${index + 2}`} key={src} />
              ))}
            </div>
          </div>

          <div className="property-content-grid">
            <div>
              <div className="sec-label">Residence Overview</div>
              <h2>Private-home comfort, presented with a hospitality standard.</h2>
              <p>
                This Palm Jumeirah villa is designed for families and private groups who want
                space, privacy, and service without sacrificing the ease of a hotel arrival.
                Warm interiors, outdoor dining, generous bedrooms, and a pool-led layout create a
                stay that feels calm from the first evening.
              </p>
              <div className="amenities-grid luxury-amenities">
                {amenities.map((label) => (
                  <div className="amenity" key={label}><span className="amenity-icon" />{label}</div>
                ))}
              </div>
            </div>
            <aside className="detail-side-card">
              <div className="sec-label">Price Preview</div>
              <div className="price-breakdown">
                <div className="price-row"><span>AED 4,850 x 5 nights</span><span>AED 24,250</span></div>
                <div className="price-row"><span>Cleaning readiness</span><span>AED 800</span></div>
                <div className="price-row"><span>Guest support</span><span>AED 1,050</span></div>
                <div className="price-row total"><span>Total preview</span><span>AED 26,100</span></div>
              </div>
              <Link className="btn-luxury" href="/contact">Speak to Concierge</Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
