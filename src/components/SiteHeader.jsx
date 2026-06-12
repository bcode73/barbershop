import { useEffect, useState } from 'react';
import { brand, navLinks } from '../data/content';

// Sticky header: transparent while over the hero, solid cream once scrolled.
// The brand sits in the centre (as in the original design) with nav links
// flanking it on desktop and stacking beneath on mobile.
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const left = navLinks.slice(0, 2);
  const right = navLinks.slice(2);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <nav className="site-header__nav site-header__nav--left">
          {left.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a className="site-header__brand" href="#top">
          {brand.name}
        </a>

        <nav className="site-header__nav site-header__nav--right">
          {right.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
