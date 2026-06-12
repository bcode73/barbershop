// Inline SVG icons. They inherit `currentColor`, so colour is controlled with
// CSS. Sized via the `size` prop (defaults to 1em so they scale with text).

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
});

export function BedIcon({ size = '1em' }) {
  return (
    <svg {...base(size)}>
      <path d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" />
      <path d="M3 18v2M21 18v2M3 14h18" />
      <path d="M7 11V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M12 11V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

export function BathIcon({ size = '1em' }) {
  return (
    <svg {...base(size)}>
      <path d="M4 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2" />
      <path d="M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M7 18l-1 2M18 18l1 2M8 7h.01" />
    </svg>
  );
}

export function CarIcon({ size = '1em' }) {
  return (
    <svg {...base(size)}>
      <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13" />
      <path d="M4 13h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.5M5.5 18H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  );
}

export function AccessibleIcon({ size = '1em' }) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="4" r="1.4" />
      <path d="M10 7l.3 4h4.2M10.3 11l-.6 3.5M9.7 14.5a4 4 0 1 0 5 4" />
      <path d="M14.5 11l1 6h2.5" />
    </svg>
  );
}

export function ArrowIcon({ size = '1em' }) {
  return (
    <svg {...base(size)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function QuoteIcon({ size = '1em' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.5 6C6.5 6 4 8.6 4 12v6h6v-6H7c0-1.9 1.1-3 2.5-3V6zm10 0c-3 0-5.5 2.6-5.5 6v6h6v-6h-3c0-1.9 1.1-3 2.5-3V6z" />
    </svg>
  );
}

export function StarIcon({ size = '1em' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
    </svg>
  );
}

export function InstagramIcon({ size = '1em' }) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = '1em' }) {
  return (
    <svg {...base(size)}>
      <path d="M14 8.5h2.2M14 8.5V7a2 2 0 0 1 2-2h1M14 8.5v11M14 12h3" />
    </svg>
  );
}

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

export function SocialIcon({ network, size }) {
  const Cmp = socialIcons[network] || InstagramIcon;
  return <Cmp size={size} />;
}
