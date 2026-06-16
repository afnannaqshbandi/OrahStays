"use client";

import { useState } from "react";

export default function PriceRangeFilter() {
  const [value, setValue] = useState(3000);

  return (
    <div className="filter-group">
      <label>Max Price per Night (AED)</label>
      <input
        type="range"
        min={200}
        max={10000}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className="range-val">AED {value.toLocaleString()}</div>
    </div>
  );
}
