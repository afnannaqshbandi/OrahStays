import { properties as allProperties, type Property } from "@/data/properties";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({
  items = allProperties,
  id,
}: {
  items?: Property[];
  id?: string;
}) {
  return (
    <div className="props-grid" id={id}>
      {items.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </div>
  );
}
