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
    area: "Dubai Marina",
    name: "Panoramic Marina View 2BR with Terrace",
    beds: 2,
    baths: 2,
    guests: 4,
    price: "AED 750",
    rating: "4.9",
    badge: "🔥 Popular",
    bc: "bp",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&fit=crop",
  },
  {
    area: "Downtown Dubai",
    name: "Burj Khalifa View Luxury 1BR, Fountain District",
    beds: 1,
    baths: 1,
    guests: 2,
    price: "AED 600",
    rating: "4.8",
    badge: "⭐ Featured",
    bc: "bf",
    img: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80&fit=crop",
  },
  {
    area: "Palm Jumeirah",
    name: "5BR Beachfront Villa with Private Pool",
    beds: 5,
    baths: 4,
    guests: 10,
    price: "AED 4,200",
    rating: "5.0",
    badge: "✨ New",
    bc: "bn",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop",
  },
  {
    area: "JBR",
    name: "Beachside 1BR Steps from the Walk",
    beds: 1,
    baths: 1,
    guests: 3,
    price: "AED 500",
    rating: "4.7",
    badge: "🔥 Popular",
    bc: "bp",
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80&fit=crop",
  },
  {
    area: "Business Bay",
    name: "Canal View Studio, Walk to Metro",
    beds: "Studio",
    baths: 1,
    guests: 2,
    price: "AED 320",
    rating: "4.6",
    badge: "⭐ Featured",
    bc: "bf",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80&fit=crop",
  },
  {
    area: "Dubai Hills",
    name: "Golf Course View 3BR Villa with Lawn",
    beds: 3,
    baths: 3,
    guests: 6,
    price: "AED 1,800",
    rating: "4.9",
    badge: "✨ New",
    bc: "bn",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80&fit=crop",
  },
];
