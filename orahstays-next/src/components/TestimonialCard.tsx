export type Testimonial = {
  stars: string;
  text: string;
  initials: string;
  avatar: string;
  name: string;
  location: string;
};

export default function TestimonialCard({ stars, text, initials, avatar, name, location }: Testimonial) {
  return (
    <div className="testi-card">
      <div className="stars">{stars}</div>
      <p className="testi-text">{text}</p>
      <div className="testi-author">
        <div className={`t-avatar ${avatar}`}>{initials}</div>
        <div>
          <div className="t-name">{name}</div>
          <div className="t-loc">{location}</div>
        </div>
      </div>
    </div>
  );
}
