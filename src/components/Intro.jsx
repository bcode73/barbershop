import { intro } from '../data/content';
import ImageWithFallback from './ImageWithFallback';
import { ArrowIcon } from './Icons';

export default function Intro() {
  return (
    <section className="intro section" id="intro">
      <div className="intro__inner">
        <div className="intro__media">
          <ImageWithFallback
            src={intro.image}
            alt={intro.imageAlt}
            className="intro__img"
          />
        </div>

        <div className="intro__body">
          <h2 className="intro__heading">{intro.heading}</h2>
          <a href={intro.cta.href} className="btn btn--solid btn--lg">
            {intro.cta.label}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
