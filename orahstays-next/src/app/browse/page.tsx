import Link from "next/link";
import PropertyGrid from "@/components/PropertyGrid";
import PriceRangeFilter from "@/components/PriceRangeFilter";

export default function BrowsePage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Browse Homes</span>
        </div>
        <h1>Browse Dubai Holiday Homes</h1>
        <p>700+ verified properties across Dubai&apos;s most sought-after neighbourhoods</p>
      </div>

      <section className="sec">
        <div className="sec-inner">
          <div className="browse-layout">
            {/* Filter Panel */}
            <div className="filter-panel">
              <h3>🔍 Filter Properties</h3>
              <div className="filter-group">
                <label>Area</label>
                <select>
                  <option>All Areas</option>
                  <option>Dubai Marina</option>
                  <option>Downtown Dubai</option>
                  <option>Palm Jumeirah</option>
                  <option>Business Bay</option>
                  <option>JBR</option>
                  <option>Dubai Hills</option>
                  <option>Creek Harbour</option>
                  <option>Jumeirah</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Property Type</label>
                <div className="check-group">
                  <label className="check-item"><input type="checkbox" defaultChecked /> Apartments</label>
                  <label className="check-item"><input type="checkbox" defaultChecked /> Villas</label>
                  <label className="check-item"><input type="checkbox" /> Penthouses</label>
                  <label className="check-item"><input type="checkbox" /> Studio</label>
                  <label className="check-item"><input type="checkbox" /> Townhouses</label>
                </div>
              </div>
              <div className="filter-group">
                <label>Bedrooms</label>
                <select>
                  <option>Any</option>
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>
              <PriceRangeFilter />
              <div className="filter-group">
                <label>Amenities</label>
                <div className="check-group">
                  <label className="check-item"><input type="checkbox" /> Private Pool</label>
                  <label className="check-item"><input type="checkbox" /> Beach Access</label>
                  <label className="check-item"><input type="checkbox" /> Gym</label>
                  <label className="check-item"><input type="checkbox" /> Parking</label>
                  <label className="check-item"><input type="checkbox" /> Pet Friendly</label>
                  <label className="check-item"><input type="checkbox" /> Sea View</label>
                </div>
              </div>
              <button className="apply-filter">Apply Filters</button>
            </div>

            {/* Results */}
            <div>
              <div className="sort-row">
                <div className="props-count">
                  Showing <strong>48</strong> properties
                </div>
                <select>
                  <option>Sort: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: Highest</option>
                  <option>Newest</option>
                </select>
              </div>
              <PropertyGrid id="browse-props" />
              <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                <button
                  style={{
                    background: "var(--teal)",
                    color: "#fff",
                    border: "none",
                    padding: "12px 32px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Load More Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
