import { reviews } from '../data/content';
import { QuoteIcon, StarIcon } from './Icons';

export default function Reviews() {
  return (
    <section className="reviews section" id={reviews.id}>
      <div className="container">
        <h2 className="section-title">{reviews.title}</h2>

        <div className="reviews__grid">
          {reviews.items.map((r) => (
            <figure className="review" key={r.name}>
              <span className="review__quotemark" aria-hidden="true">
                <QuoteIcon />
              </span>
              <div className="review__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="review__text">{r.quote}</blockquote>
              <figcaption className="review__name">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
