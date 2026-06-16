"use client";

import { useState } from "react";

const tabs = ["All", "Villas", "Apartments", "Studios", "Monthly Stays"];

export default function FilterTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="filter-tabs">
      {tabs.map((tab, i) => (
        <div
          key={tab}
          className={`tab${i === active ? " active" : ""}`}
          onClick={() => setActive(i)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
