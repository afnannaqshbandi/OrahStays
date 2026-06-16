"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const chevron = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

type MenuItem = {
  label: string;
  href: string;
  items: { icon: string; title: string; sub: string; href: string }[];
};

const menus: MenuItem[] = [
  {
    label: "Browse Homes",
    href: "/browse",
    items: [
      { icon: "🏙️", title: "All Properties", sub: "700+ homes in Dubai", href: "/browse" },
      { icon: "🏢", title: "Apartments", sub: "Studios to 3-bedroom", href: "/browse" },
      { icon: "🏡", title: "Villas", sub: "Private pool & garden", href: "/browse" },
      { icon: "🌴", title: "Palm Jumeirah", sub: "Beachfront exclusives", href: "/browse" },
      { icon: "⛵", title: "Dubai Marina", sub: "Skyline & waterfront", href: "/browse" },
      { icon: "🗼", title: "Downtown Dubai", sub: "Near Burj Khalifa", href: "/browse" },
    ],
  },
  {
    label: "Monthly Stays",
    href: "/monthly",
    items: [
      { icon: "📅", title: "30+ Night Stays", sub: "Best monthly rates", href: "/monthly" },
      { icon: "💼", title: "Corporate Housing", sub: "Business travellers", href: "/monthly" },
      { icon: "🌍", title: "Relocation Stays", sub: "Settling into Dubai", href: "/monthly" },
    ],
  },
  {
    label: "Property Owners",
    href: "/owners",
    items: [
      { icon: "📈", title: "List Your Property", sub: "Start earning today", href: "/owners" },
      { icon: "🔧", title: "Property Management", sub: "Full-service management", href: "/owners" },
      { icon: "💰", title: "Earnings Calculator", sub: "See your potential", href: "/owners" },
      { icon: "🤝", title: "Partner Program", sub: "Referral rewards", href: "/owners" },
    ],
  },
  {
    label: "About",
    href: "/about",
    items: [
      { icon: "✨", title: "Our Story", sub: "Who we are", href: "/about" },
      { icon: "🏆", title: "Awards & Recognition", sub: "Industry accolades", href: "/about" },
      { icon: "👥", title: "Our Team", sub: "Meet the people", href: "/about" },
      { icon: "📞", title: "Contact Us", sub: "Get in touch", href: "/contact" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="nav-inner">
        <Link className="logo" href="/">
          Orah<span>Stays</span>
        </Link>
        <ul className="nav-menu">
          {menus.map((menu) => (
            <li className="nav-item" key={menu.label}>
              <Link
                className={`nav-link${pathname === menu.href ? " active" : ""}`}
                href={menu.href}
              >
                {menu.label}
                {chevron}
              </Link>
              <div className="dropdown">
                {menu.items.map((item) => (
                  <Link className="dropdown-item" href={item.href} key={item.title}>
                    <div className="di-icon">{item.icon}</div>
                    <div className="di-text">
                      <div className="di-title">{item.title}</div>
                      <div className="di-sub">{item.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <Link className="btn-ghost" href="/contact">
            Contact
          </Link>
          <Link className="btn-primary" href="/owners">
            List Property
          </Link>
        </div>
      </div>
    </nav>
  );
}
