// A simple, elegant line-art floor plan used in the Featured Property section.
// Swap this for an <ImageWithFallback> pointing at a real floor-plan image if
// you have one.
export default function FloorPlan({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 470"
      role="img"
      aria-label="Floor plan of the featured property"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Outer wall */}
        <rect x="24" y="24" width="352" height="422" rx="3" />
        {/* Main vertical divider */}
        <path d="M210 24 V446" />
        {/* Upper-left room (bedroom) */}
        <path d="M24 180 H210" />
        {/* Lower-left split */}
        <path d="M24 320 H210" />
        {/* Right side horizontal split */}
        <path d="M210 250 H376" />
        {/* Small closet / bath on right */}
        <path d="M300 24 V120 H376" />
        {/* Kitchen island */}
        <rect x="250" y="300" width="86" height="44" rx="4" strokeWidth="2" />
        {/* Door swings */}
        <path d="M150 180 a30 30 0 0 1 30 30" strokeWidth="1.6" />
        <path d="M150 320 a30 30 0 0 0 30 -30" strokeWidth="1.6" />
        <path d="M210 130 a26 26 0 0 1 26 26" strokeWidth="1.6" />
      </g>
      <g
        fill="currentColor"
        fontFamily="Jost, sans-serif"
        fontSize="15"
        letterSpacing="1.5"
        opacity="0.7"
      >
        <text x="117" y="108" textAnchor="middle">BEDROOM</text>
        <text x="117" y="256" textAnchor="middle">LIVING</text>
        <text x="117" y="390" textAnchor="middle">BATH</text>
        <text x="293" y="150" textAnchor="middle">BATH</text>
        <text x="293" y="235" textAnchor="middle">DINING</text>
        <text x="293" y="390" textAnchor="middle">KITCHEN</text>
      </g>
    </svg>
  );
}
