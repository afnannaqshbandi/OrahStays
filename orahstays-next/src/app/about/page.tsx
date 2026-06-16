import Link from "next/link";

const team = [
  { initials: "SK", avatar: "av1", name: "Sara Khalid", role: "Founder & CEO", bio: "10+ years in Dubai hospitality. Former GM at a leading Downtown hotel." },
  { initials: "OM", avatar: "av2", name: "Omar Mansoor", role: "Head of Operations", bio: "Ensures every guest experience exceeds expectations. OCD about quality." },
  { initials: "LT", avatar: "av3", name: "Lena Tran", role: "Revenue & Growth", bio: "Data-driven pricing expert. Maximises owner returns with dynamic strategy." },
  { initials: "KA", avatar: "av4", name: "Karim Aziz", role: "Guest Experience", bio: "Your 24/7 concierge lead. Makes every guest feel like a VIP from arrival." },
];

const awards = [
  { icon: "🏆", title: "World Travel Awards 2025", body: "Best Holiday Homes Rental Company — UAE" },
  { icon: "🥇", title: "International Travel Awards", body: "Middle East's Best Holiday Homes Management" },
  { icon: "⭐", title: "Dubai's Leading STR Company", body: "Awarded by World Travel Awards 2025" },
  { icon: "🎖️", title: "GCC Enterprise Awards", body: "Best Holiday Home Platform 2024" },
  { icon: "💎", title: "Lux Life Awards", body: "Most Trusted Dubai Holiday Home Brand" },
  { icon: "🌟", title: "Luxury Lifestyle Awards", body: "Hospitality Excellence 2023 & 2024" },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>About Us</span>
        </div>
        <h1>About OrahStays</h1>
        <p>
          Dubai&apos;s most trusted holiday home platform — built on care, quality, and local
          expertise
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
                  alt="Dubai skyline OrahStays"
                />
              </div>
            </div>
            <div className="about-text">
              <div className="sec-label">Our story</div>
              <div className="sec-title">We Started With One Apartment. Now We Have 700+.</div>
              <p>
                OrahStays was founded in 2018 by a group of Dubai hospitality professionals who
                believed that holiday homes should feel exactly that — like a home, not just a
                room with a key.
              </p>
              <p>
                We started by managing three apartments in Dubai Marina. Today we&apos;re the
                emirate&apos;s fastest-growing short-term rental platform, with over 700
                hand-picked properties across 35 neighbourhoods — from Downtown Dubai studios to
                Palm Jumeirah beachfront villas.
              </p>
              <p>
                Every decision we make is guided by one question: would we put our own family
                here? If the answer is yes, it earns a place in our collection.
              </p>
              <Link className="btn-primary" href="/contact">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Team */}
          <div className="sec-label">The people behind OrahStays</div>
          <div className="sec-title">Meet Our Team</div>
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
            <div className="sec-title">Award-Winning Holiday Homes</div>
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
