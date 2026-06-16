import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="foot-brand">
            Lumiras<span>Casa</span>
          </div>
          <p className="foot-desc">
            A premium UAE holiday homes brand curating elegant residences, seamless digital
            booking, and hotel-grade guest support across the emirates.
          </p>
          <div className="foot-social">
            <div className="soc-btn">f</div>
            <div className="soc-btn">in</div>
            <div className="soc-btn">ig</div>
            <div className="soc-btn">yt</div>
          </div>
        </div>
        <div>
          <div className="foot-title">Properties</div>
          <ul className="foot-links">
            <li><Link href="/browse">Studios</Link></li>
            <li><Link href="/browse">1 Bedroom</Link></li>
            <li><Link href="/browse">2 Bedrooms</Link></li>
            <li><Link href="/browse">Villas</Link></li>
            <li><Link href="/monthly">Monthly Stays</Link></li>
          </ul>
        </div>
        <div>
          <div className="foot-title">Areas</div>
          <ul className="foot-links">
            <li><Link href="/browse">Dubai Marina</Link></li>
            <li><Link href="/browse">Downtown Dubai</Link></li>
            <li><Link href="/browse">Palm Jumeirah</Link></li>
            <li><Link href="/browse">Business Bay</Link></li>
            <li><Link href="/browse">JBR</Link></li>
          </ul>
        </div>
        <div>
          <div className="foot-title">Company</div>
          <ul className="foot-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/owners">Property Management</Link></li>
            <li><Link href="/owners">Partner Program</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/about">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Lumiras Casa. All rights reserved. DTCM Licensed.</span>
        <span>Privacy Policy · Terms · House Rules · Sitemap</span>
      </div>
    </footer>
  );
}
