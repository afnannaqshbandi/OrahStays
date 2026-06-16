import Link from "next/link";

const rows = [
  ["Palm Serene Villa", "Mariam K.", "AED 24,250", "Confirmed"],
  ["Celeste Suite", "Sami H.", "AED 6,250", "Arrival Today"],
  ["Azure Escape", "Noura A.", "AED 10,360", "Pending"],
];

export default function AdminPreviewPage() {
  return (
    <>
      <div className="page-hero admin-page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Admin Preview</span>
        </div>
        <h1>Lumiras Casa Admin Preview</h1>
        <p>Static client-presentation dashboard for operations, bookings, owners, and media.</p>
      </div>
      <section className="sec pearl-sec">
        <div className="sec-inner admin-preview-panel">
          <div className="admin-grid">
            {[
              ["Total Properties", "148"],
              ["Active Bookings", "326"],
              ["Pending Owner Applications", "19"],
              ["Monthly Booking Value", "AED 1.82M"],
            ].map(([label, value]) => (
              <div className="metric-card" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="admin-board">
            <div>
              <div className="board-title">Booking Table</div>
              <div className="mock-table">
                {rows.map((row) => (
                  <div className="mock-row" key={row[0]}>
                    {row.map((cell) => <span key={cell}>{cell}</span>)}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="board-title">Media Library</div>
              <div className="media-strip">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80&fit=crop" alt="Villa media" />
                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&q=80&fit=crop" alt="Suite media" />
                <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&q=80&fit=crop" alt="Retreat media" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
