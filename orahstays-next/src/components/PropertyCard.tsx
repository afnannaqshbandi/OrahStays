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
          aria-label="Save property"
          onClick={(e) => {
            e.stopPropagation();
            setFav((f) => !f);
          }}
        >
          {fav ? "♥" : "♡"}
        </button>
      </div>
      <div className="prop-body">
        <div className="prop-name">{property.name}</div>
        <div className="prop-area">{property.area}</div>
        <div className="prop-meta">
          <span>
            <i>Guests</i> {property.guests}
          </span>
          <span><i>Beds</i> {property.beds}</span>
          <span><i>Baths</i> {property.baths}</span>
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
              View / Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
