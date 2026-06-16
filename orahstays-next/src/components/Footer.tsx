import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="foot-brand">
            Orah<span>Stays</span>
          </div>
          <p className="foot-desc">
            Dubai&apos;s premium holiday home platform — connecting discerning guests with
            exceptional properties across the emirate. DTCM licensed &amp; fully compliant.
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
        <span>© 2026 OrahStays. All rights reserved. DTCM Licensed.</span>
        <span>Privacy Policy · Terms · House Rules · Sitemap</span>
      </div>
    </footer>
  );
}
