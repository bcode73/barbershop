import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FeaturedProperty from './components/FeaturedProperty';
import ListingsSection from './components/ListingsSection';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { featuredListings, openHouses } from './data/content';

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <FeaturedProperty />
        <ListingsSection section={featuredListings} tone="light" />
        <ListingsSection section={openHouses} tone="alt" />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
