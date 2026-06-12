// ---------------------------------------------------------------------------
// Site content
// ---------------------------------------------------------------------------
// Everything the page displays lives here so it's easy to tweak without
// touching the components. Text was taken from the original Canva design;
// swap any of it (and the Unsplash photo IDs below) for your own.
// ---------------------------------------------------------------------------

// Build an Unsplash image URL from a photo id. Tweak w/h/q as needed, or
// replace the whole `src` with a path to your own image in /public.
const unsplash = (id, w = 1200, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}` +
  (h ? `&h=${h}` : '');

export const brand = {
  name: 'Thomas Larson Group',
};

export const hero = {
  tagline: 'Let us help you\nmake the move.',
  image: unsplash('1600210492493-0946911123ea', 2000),
  imageAlt: 'Elegant modern living room interior',
  buttons: [
    { label: 'List Your Home', href: '#contact', variant: 'outline' },
    { label: 'Buy a Home', href: '#listings', variant: 'solid' },
  ],
};

export const intro = {
  heading: 'We have what it takes to get you the best deal for your ideal home.',
  cta: { label: 'Get Started', href: '#contact' },
  image: unsplash('1560250097-0b93528c311a', 1000, 1100),
  imageAlt: 'A real estate agent in a business suit standing in an office',
};

export const featured = {
  eyebrow: 'Featured Property',
  status: 'House for Sale',
  title: '14 Milena Grove',
  beds: 2,
  baths: 2,
  cars: 1,
  accessible: true,
  image: unsplash('1564013799919-ab600027ffc6', 1400),
  imageAlt: 'A modern house with a pool',
};

export const featuredListings = {
  id: 'listings',
  title: 'Featured Listings',
  cards: [
    {
      status: 'House For Rent',
      title: '234 Talensville Lane',
      beds: 4,
      baths: 3,
      cars: 2,
      accessible: true,
      image: unsplash('1570129477492-45c003edd2be', 900),
      imageAlt: 'A two-storey modern house',
    },
    {
      status: 'House For Rent',
      title: '56 Goulcrest Drive',
      beds: 3,
      baths: 2,
      cars: 1,
      accessible: false,
      image: unsplash('1512917774080-9991f1c4c750', 900),
      imageAlt: 'A modern house with wooden siding and windows',
    },
    {
      status: 'House For Rent',
      title: '7 Walderlane Hill',
      beds: 2,
      baths: 2,
      cars: 1,
      accessible: false,
      image: unsplash('1613490493576-7fde63acd811', 900),
      imageAlt: 'A modern house with a swimming pool',
    },
  ],
};

export const openHouses = {
  id: 'open-houses',
  title: 'Open Houses',
  cards: [
    {
      status: 'House For Lease',
      title: '88 Grayervine Hill',
      beds: 3,
      baths: 2.5,
      cars: 1,
      accessible: true,
      image: unsplash('1568605114967-8130f3a36994', 900),
      imageAlt: 'A modern home with a driveway and a brick walkway',
    },
    {
      status: 'House For Lease',
      title: '901 Vinestone Drive',
      beds: 4,
      baths: 3.5,
      cars: 2,
      accessible: false,
      image: unsplash('1605276374104-dee2a0ed3cd6', 900),
      imageAlt: 'A modern home in the winter with snow on the ground',
    },
    {
      status: 'House For Lease',
      title: '1203 S. Milenna Avenue',
      beds: 2,
      baths: 2,
      cars: 1,
      accessible: true,
      image: unsplash('1600596542815-ffad4c1539a9', 900),
      imageAlt: 'A modern house with a pool in the backyard',
    },
  ],
};

export const reviews = {
  id: 'reviews',
  title: 'Client Reviews',
  items: [
    {
      quote:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      name: 'Powell Finwood',
    },
    {
      quote:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable. Boost your product and service's credibility by adding testimonials from your clients.",
      name: 'Ingrid Correa',
    },
    {
      quote:
        "Boost your product and service's credibility by adding testimonials from your clients.",
      name: 'Hannah Elmore',
    },
  ],
};

export const footer = {
  contact: {
    title: 'Contact Us',
    address: ['445 Lekki', 'Lagos, Nigeria'],
    phone: '',
    email: 'studio@samsec.com.ng',
  },
  hours: {
    title: 'Office Hours',
    lines: [
      { days: 'Open 24/7', time: 'Available any time, any day' },
    ],
  },
  social: {
    title: 'Get Social',
    links: [
      { network: 'instagram', href: '#' },
      { network: 'facebook', href: '#' },
    ],
  },
  image: unsplash('1600880292203-757bb62b4baf', 1200),
  imageAlt: 'Three people standing in an open room discussing',
};

// Anchor links used by the header navigation.
export const navLinks = [
  { label: 'Listings', href: '#listings' },
  { label: 'Open Houses', href: '#open-houses' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];
