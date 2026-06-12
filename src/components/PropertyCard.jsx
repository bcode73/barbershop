import ImageWithFallback from './ImageWithFallback';
import PropertySpecs from './PropertySpecs';
import { AccessibleIcon } from './Icons';

// A single listing card: photo on top, white info panel below.
export default function PropertyCard({ card }) {
  return (
    <article className="card">
      <div className="card__media">
        <ImageWithFallback src={card.image} alt={card.imageAlt} className="card__img" />
      </div>

      <div className="card__body">
        <p className="card__status">{card.status}</p>
        <h3 className="card__title">{card.title}</h3>

        {card.accessible && (
          <p className="accessible">
            <AccessibleIcon />
            <span>This property is wheelchair accessible</span>
          </p>
        )}

        <PropertySpecs
          beds={card.beds}
          baths={card.baths}
          cars={card.cars}
          className="specs--sm"
        />
      </div>
    </article>
  );
}
