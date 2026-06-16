"use client";

import { useState } from "react";

const photos = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
];

const main = (base: string) => `${base}?w=900&q=80&fit=crop`;
const thumb = (base: string) => `${base}?w=300&q=80&fit=crop`;

export default function DetailGallery() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="detail-gallery">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img id="detail-main-img" src={main(photos[active])} alt="Property main photo" />
      </div>
      <div className="detail-thumbs">
        {photos.map((photo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={photo}
            src={thumb(photo)}
            className={i === active ? "active" : undefined}
            onClick={() => setActive(i)}
            alt={`thumb${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
