"use client";

import { useState } from "react";

const compute = (base: number, loc: number, occ: number) =>
  Math.round(base * loc * occ * 30 * 0.8);

export default function EarningsCalculator() {
  const [type, setType] = useState(1200);
  const [loc, setLoc] = useState(1.5);
  const [occ, setOcc] = useState(0.75);
  const [result, setResult] = useState(() => compute(1200, 1.5, 0.75));

  return (
    <div className="earnings-calc">
      <h3>Owner Revenue Preview</h3>
      <div className="calc-row">
        <label>Property Type</label>
        <select value={type} onChange={(e) => setType(Number(e.target.value))}>
          <option value={500}>Studio</option>
          <option value={750}>1 Bedroom</option>
          <option value={1200}>2 Bedroom</option>
          <option value={1800}>3 Bedroom</option>
          <option value={3500}>Villa</option>
        </select>
      </div>
      <div className="calc-row">
        <label>Location</label>
        <select value={loc} onChange={(e) => setLoc(Number(e.target.value))}>
          <option value={1}>Dubai Marina</option>
          <option value={1.1}>Downtown Dubai</option>
          <option value={1.5}>Palm Jumeirah</option>
          <option value={0.9}>Business Bay</option>
          <option value={0.85}>JBR</option>
        </select>
      </div>
      <div className="calc-row">
        <label>Expected Occupancy</label>
        <select value={occ} onChange={(e) => setOcc(Number(e.target.value))}>
          <option value={0.6}>Conservative (60%)</option>
          <option value={0.75}>Average (75%)</option>
          <option value={0.9}>Peak Season (90%)</option>
        </select>
      </div>
      <button className="calc-btn" onClick={() => setResult(compute(type, loc, occ))}>
        Calculate My Earnings
      </button>
      <div className="calc-result">
        <div className="calc-result-num">AED {result.toLocaleString()}</div>
        <div className="calc-result-lbl">Estimated monthly revenue</div>
      </div>
    </div>
  );
}
