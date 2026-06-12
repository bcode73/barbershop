import { useState } from 'react';

// Renders an <img>, but if the source fails to load (e.g. an Unsplash photo id
// was changed or you're offline) it swaps to a tasteful beige placeholder that
// shows the alt text, so the layout never collapses.
export default function ImageWithFallback({ src, alt, className, ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`img-fallback ${className || ''}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="img-fallback__icon">
          <path
            d="M3 10.5L12 4l9 6.5M5 9.5V20h14V9.5M9.5 20v-5h5v5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="img-fallback__label">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
