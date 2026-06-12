import PropertyCard from './PropertyCard';

// Reused for both "Featured Listings" and "Open Houses" — a centred title
// above a three-up grid of property cards.
export default function ListingsSection({ section, tone = 'light' }) {
  return (
    <section className={`listings section section--${tone}`} id={section.id}>
      <div className="container">
        <h2 className="section-title">{section.title}</h2>
        <div className="listings__grid">
          {section.cards.map((card) => (
            <PropertyCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
