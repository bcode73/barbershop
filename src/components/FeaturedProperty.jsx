import { featured } from '../data/content';
import ImageWithFallback from './ImageWithFallback';
import FloorPlan from './FloorPlan';
import PropertySpecs from './PropertySpecs';
import { AccessibleIcon } from './Icons';

export default function FeaturedProperty() {
  return (
    <section className="featured section section--alt">
      <div className="container featured__inner">
        <div className="featured__left">
          <ImageWithFallback
            src={featured.image}
            alt={featured.imageAlt}
            className="featured__img"
          />

          <div className="featured__details">
            <p className="eyebrow">{featured.status}</p>
            <h2 className="featured__title">{featured.title}</h2>

            {featured.accessible && (
              <p className="accessible">
                <AccessibleIcon />
                <span>This property is wheelchair accessible</span>
              </p>
            )}

            <PropertySpecs
              beds={featured.beds}
              baths={featured.baths}
              cars={featured.cars}
            />
          </div>
        </div>

        <div className="featured__right">
          <span className="featured__planlabel">Floor Plan</span>
          <FloorPlan className="featured__plan" />
        </div>
      </div>
    </section>
  );
}
