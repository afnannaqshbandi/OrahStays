import Link from "next/link";

const team = [
  { initials: "SK", avatar: "av1", name: "Sara Khalid", role: "Founder & CEO", bio: "10+ years in Dubai hospitality. Former GM at a leading Downtown hotel." },
  { initials: "OM", avatar: "av2", name: "Omar Mansoor", role: "Head of Operations", bio: "Ensures every guest experience exceeds expectations. OCD about quality." },
  { initials: "LT", avatar: "av3", name: "Lena Tran", role: "Revenue & Growth", bio: "Data-driven pricing expert. Maximises owner returns with dynamic strategy." },
  { initials: "KA", avatar: "av4", name: "Karim Aziz", role: "Guest Experience", bio: "Your 24/7 concierge lead. Makes every guest feel like a VIP from arrival." },
];

const awards = [
  { icon: "01", title: "Hospitality-Led Curation", body: "Residences reviewed for arrival, comfort, location, and service readiness." },
  { icon: "02", title: "Owner Presentation Standard", body: "Premium listing narratives, photography direction, and platform positioning." },
  { icon: "03", title: "Guest Experience Quality", body: "A calm stay journey shaped around clarity, responsiveness, and trust." },
  { icon: "04", title: "UAE Destination Knowledge", body: "Local insight across Dubai, Abu Dhabi, Ras Al Khaimah, and Fujairah." },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>About Us</span>
        </div>
        <h1>About Lumiras Casa</h1>
        <p>
          A UAE luxury holiday homes brand built around curated residences, refined service, and
          owner-ready presentation.
        </p>
      </div>

      <section className="sec">
        <div className="sec-inner">
          <div className="about-grid">
            <div>
              <div className="about-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&fit=crop"
                  alt="Lumiras Casa UAE residences"
                />
              </div>
            </div>
            <div className="about-text">
              <div className="sec-label">Our story</div>
              <div className="sec-title">A hospitality standard for private UAE residences.</div>
              <p>
                Lumiras Casa curates premium homes for guests who want the privacy of a residence
                with the ease, confidence, and polish of a hotel arrival.
              </p>
              <p>
                Our prototype shows how the brand can present villas, apartments, penthouses, and
                coastal retreats across the UAE while supporting owner onboarding and internal
                operations visually.
              </p>
              <p>
                Every residence should feel selected, not listed: location, design, readiness, and
                hospitality quality guide the Lumiras Casa standard.
              </p>
              <Link className="btn-primary" href="/contact">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Team */}
          <div className="sec-label">The people behind Lumiras Casa</div>
          <div className="sec-title">Meet the hospitality team</div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className={`team-avatar ${member.avatar}`}>{member.initials}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-bio">{member.bio}</div>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div style={{ marginTop: "4rem" }}>
            <div className="sec-label">Recognition</div>
            <div className="sec-title">The standards behind the brand</div>
            <div className="awards-grid">
              {awards.map((award) => (
                <div className="award-card" key={award.title}>
                  <div className="award-icon">{award.icon}</div>
                  <div className="award-title">{award.title}</div>
                  <div className="award-body">{award.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
