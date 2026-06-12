import { brand, footer } from '../data/content';
import ImageWithFallback from './ImageWithFallback';
import { SocialIcon } from './Icons';

export default function Footer() {
  const { contact, hours, social, credit, tagline } = footer;

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__info">
          <div className="footer__cols">
            <div className="footer__col">
              <h3 className="footer__title">{contact.title}</h3>
              <address className="footer__text">
                {contact.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                {contact.phone && (
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>
                )}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </address>
            </div>

            <div className="footer__col">
              <h3 className="footer__title">{hours.title}</h3>
              <ul className="footer__hours">
                {hours.lines.map((h) => (
                  <li key={h.days}>
                    <span className="footer__hours-days">{h.days}</span>
                    <span className="footer__hours-time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__social">
            <h3 className="footer__title">{social.title}</h3>
            <div className="footer__social-links">
              {social.links.map((s) => (
                <a
                  key={s.network}
                  href={s.href}
                  aria-label={s.network}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon network={s.network} size="1.25rem" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__brand">
            {brand.name}
            {tagline && <span className="footer__tagline">{tagline}</span>}
          </div>
        </div>

        <div className="footer__media">
          <ImageWithFallback
            src={footer.image}
            alt={footer.imageAlt}
            className="footer__img"
          />
        </div>
      </div>

      <div className="footer__bar">
        <span>
          © {new Date().getFullYear()} {brand.name}
        </span>
        {credit && (
          <span className="footer__credit">
            {credit.label}{' '}
            <a href={credit.href} target="_blank" rel="noopener noreferrer">
              {credit.name}
            </a>
          </span>
        )}
      </div>
    </footer>
  );
}
