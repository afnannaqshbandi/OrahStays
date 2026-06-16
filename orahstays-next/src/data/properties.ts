export type Property = {
  area: string;
  name: string;
  beds: number | "Studio";
  baths: number;
  guests: number;
  price: string;
  rating: string;
  badge: string;
  bc: "bp" | "bf" | "bn";
  img: string;
};

export const properties: Property[] = [
  {
    area: "Palm Jumeirah, Dubai",
    name: "Palm Jumeirah Serene Villa",
    beds: 5,
    baths: 5,
    guests: 10,
    price: "AED 4,850",
    rating: "5.0",
    badge: "Private Pool",
    bc: "bp",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=88&fit=crop",
  },
  {
    area: "Downtown Dubai",
    name: "Downtown Celeste Suite",
    beds: 1,
    baths: 1,
    guests: 2,
    price: "AED 1,250",
    rating: "4.9",
    badge: "Skyline View",
    bc: "bf",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=900&q=88&fit=crop",
  },
  {
    area: "Dubai Marina",
    name: "Dubai Marina Aurelia Residence",
    beds: 3,
    baths: 3,
    guests: 6,
    price: "AED 1,850",
    rating: "4.8",
    badge: "Waterfront",
    bc: "bn",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=88&fit=crop",
  },
  {
    area: "Saadiyat Island, Abu Dhabi",
    name: "Saadiyat Pearl Retreat",
    beds: 4,
    baths: 4,
    guests: 8,
    price: "AED 3,200",
    rating: "4.9",
    badge: "Beachfront",
    bc: "bp",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=88&fit=crop",
  },
  {
    area: "Al Marjan Island, Ras Al Khaimah",
    name: "Al Marjan Azure Escape",
    beds: 2,
    baths: 2,
    guests: 4,
    price: "AED 1,480",
    rating: "4.8",
    badge: "Family Ready",
    bc: "bf",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=88&fit=crop",
  },
  {
    area: "Fujairah Coast",
    name: "Fujairah Cove Villa",
    beds: 4,
    baths: 3,
    guests: 8,
    price: "AED 2,650",
    rating: "4.9",
    badge: "Mountain Coast",
    bc: "bn",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=88&fit=crop",
  },
];
