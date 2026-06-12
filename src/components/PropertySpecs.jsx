import { BedIcon, BathIcon, CarIcon } from './Icons';

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

// Beds / baths / cars row shared by the featured property and listing cards.
export default function PropertySpecs({ beds, baths, cars, className = '' }) {
  return (
    <ul className={`specs ${className}`}>
      <li className="specs__item">
        <BedIcon />
        <span>{plural(beds, 'Bed')}</span>
      </li>
      <li className="specs__item">
        <BathIcon />
        <span>{plural(baths, 'Bath')}</span>
      </li>
      <li className="specs__item">
        <CarIcon />
        <span>{plural(cars, 'Car')}</span>
      </li>
    </ul>
  );
}
