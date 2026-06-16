import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Contact Us</span>
        </div>
        <h1>Get in Touch</h1>
        <p>
          We&apos;d love to hear from you — whether you&apos;re a guest, a property owner, or just
          curious
        </p>
      </div>

      <section className="sec">
        <div className="sec-inner">
          <div className="contact-layout">
            <div className="contact-form">
              <div className="sec-title" style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>
                Send Us a Message
              </div>
              <div className="form-grid">
                <div className="form-row">
                  <label>First Name</label>
                  <input type="text" placeholder="Sara" />
                </div>
                <div className="form-row">
                  <label>Last Name</label>
                  <input type="text" placeholder="Khalid" />
                </div>
              </div>
              <div className="form-row">
                <label>Email Address</label>
                <input type="email" placeholder="sara@example.com" />
              </div>
              <div className="form-row">
                <label>Phone Number</label>
                <input type="tel" placeholder="+971 50 000 0000" />
              </div>
              <div className="form-row">
                <label>I&apos;m enquiring about</label>
                <select>
                  <option>Booking a Holiday Home</option>
                  <option>Monthly / Long-Term Stay</option>
                  <option>Listing My Property</option>
                  <option>Property Management Services</option>
                  <option>Partnership / Corporate</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="form-row">
                <label>Message</label>
                <textarea placeholder="Tell us more about your enquiry..." />
              </div>
              <button className="submit-btn">Send Message →</button>
            </div>

            <div>
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="ci-item">
                  <span className="ci-icon">📍</span>
                  <div className="ci-text">
                    <strong>Office Address</strong>Level 14, Boulevard Plaza Tower 1, Downtown
                    Dubai, UAE
                  </div>
                </div>
                <div className="ci-item">
                  <span className="ci-icon">📞</span>
                  <div className="ci-text">
                    <strong>Phone</strong>+971 4 123 4567
                  </div>
                </div>
                <div className="ci-item">
                  <span className="ci-icon">💬</span>
                  <div className="ci-text">
                    <strong>WhatsApp</strong>+971 50 123 4567
                  </div>
                </div>
                <div className="ci-item">
                  <span className="ci-icon">📧</span>
                  <div className="ci-text">
                    <strong>Email</strong>hello@orahstays.com
                  </div>
                </div>
                <div className="ci-item">
                  <span className="ci-icon">🕐</span>
                  <div className="ci-text">
                    <strong>Office Hours</strong>Mon–Sat: 9:00 AM – 7:00 PM GST
                    <br />
                    Guest Support: 24/7
                  </div>
                </div>
              </div>
              <div className="map-placeholder">
                📍 Downtown Dubai, UAE
                <br />
                <small style={{ opacity: 0.7, fontSize: "13px" }}>
                  Near Burj Khalifa Metro Station
                </small>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <div className="sec-label" style={{ marginBottom: "0.75rem" }}>
                  Quick options
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Link
                    href="/browse"
                    style={{
                      background: "var(--teal-bg)",
                      color: "var(--teal)",
                      border: "1.5px solid var(--teal-light)",
                      padding: "12px 20px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      textAlign: "left",
                      textDecoration: "none",
                    }}
                  >
                    🏠 Browse Available Homes →
                  </Link>
                  <Link
                    href="/owners"
                    style={{
                      background: "var(--coral-light)",
                      color: "var(--coral-dark)",
                      border: "1.5px solid #FED7AA",
                      padding: "12px 20px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      textAlign: "left",
                      textDecoration: "none",
                    }}
                  >
                    📈 List My Property →
                  </Link>
                  <Link
                    href="/monthly"
                    style={{
                      background: "var(--gold-light)",
                      color: "var(--gold)",
                      border: "1.5px solid #FDE68A",
                      padding: "12px 20px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      textAlign: "left",
                      textDecoration: "none",
                    }}
                  >
                    📅 Enquire About Monthly Stays →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
