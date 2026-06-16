"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const router = useRouter();
  const [fav, setFav] = useState(false);

  return (
    <div className="prop-card" onClick={() => router.push("/property")}>
      <div className="prop-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={property.img} alt={property.name} loading="lazy" />
        <div className={`prop-badge ${property.bc}`}>{property.badge}</div>
        <button
          className="prop-fav"
          onClick={(e) => {
            e.stopPropagation();
            setFav((f) => !f);
          }}
        >
          {fav ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="prop-body">
        <div className="prop-area">{property.area}</div>
        <div className="prop-name">{property.name}</div>
        <div className="prop-meta">
          <span>
            🛏 {property.beds} {property.beds === "Studio" ? "" : "Bed"}
          </span>
          <span>🚿 {property.baths} Bath</span>
          <span>👤 {property.guests} Guests</span>
        </div>
        <div className="prop-footer">
          <div className="prop-price">
            {property.price} <small>/night</small>
          </div>
          <div className="side-info">
            <span className="prop-rating">★ {property.rating}</span>
            <button
              className="book-btn"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/property");
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
