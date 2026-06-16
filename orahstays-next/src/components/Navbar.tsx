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
    label: "Home",
    href: "/",
    items: [],
  },
  {
    label: "Stays",
    href: "/stays",
    items: [],
  },
  {
    label: "Destinations",
    href: "/#destinations",
    items: [],
  },
  {
    label: "List Your Property",
    href: "/owners",
    items: [],
  },
  {
    label: "Concierge",
    href: "/#concierge",
    items: [],
  },
  {
    label: "About",
    href: "/about",
    items: [],
  },
  {
    label: "Journal",
    href: "/#journal",
    items: [],
  },
  {
    label: "Contact",
    href: "/contact",
    items: [],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="nav-inner">
        <Link className="logo" href="/">
          <strong>Lumiras<span>Casa</span></strong>
          <small>Private UAE Stays</small>
        </Link>
        <ul className="nav-menu">
          {menus.map((menu) => (
            <li className="nav-item" key={menu.label}>
              <Link
                className={`nav-link${pathname === menu.href ? " active" : ""}`}
                href={menu.href}
              >
                {menu.label}
                {menu.items.length > 0 ? chevron : null}
              </Link>
              {menu.items.length > 0 ? (
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
              ) : null}
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="lang-select" type="button">EN</button>
          <Link className="btn-primary" href="/owners">
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
