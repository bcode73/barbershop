import { hero } from '../data/content';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <ImageWithFallback
        src={hero.image}
        alt={hero.imageAlt}
        className="hero__bg"
      />
      <div className="hero__scrim" />

      <div className="hero__content">
        <h1 className="hero__title">
          {hero.tagline.split('\n').map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h1>

        <div className="hero__actions">
          {hero.buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              className={`btn ${b.variant === 'solid' ? 'btn--solid' : 'btn--outline'}`}
            >
              {b.label}
            </a>
          ))}
        </div>
      </div>

      <a href="#intro" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
