import Link from "next/link";
import PropertyGrid from "@/components/PropertyGrid";
import PriceRangeFilter from "@/components/PriceRangeFilter";

export default function BrowsePage() {
  return (
    <>
      <div className="page-hero stays-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Stays</span>
        </div>
        <h1>Curated UAE Residences</h1>
        <p>Premium villas, penthouses, apartments, and coastal retreats selected for refined stays.</p>
      </div>

      <section className="sec stays-page-sec">
        <div className="sec-inner">
          <div className="stays-search-strip">
            <div className="sf">
              <label>Destination</label>
              <select defaultValue="UAE">
                <option value="UAE">All UAE Destinations</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Ras Al Khaimah</option>
                <option>Fujairah</option>
              </select>
            </div>
            <div className="sf">
              <label>Dates</label>
              <input placeholder="Select dates" />
            </div>
            <div className="sf">
              <label>Guests</label>
              <select defaultValue="2">
                <option value="2">2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>8+ Guests</option>
              </select>
            </div>
            <button className="search-btn" type="button">Search</button>
          </div>
          <div className="browse-layout">
            {/* Filter Panel */}
            <div className="filter-panel">
              <h3>Refine Collection</h3>
              <div className="filter-group">
                <label>Area</label>
                <select>
                  <option>All Destinations</option>
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
              <div className="center-row">
                <button className="outline-luxury">
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
