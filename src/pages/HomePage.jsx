import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import BrandHighlights from '../components/BrandHighlights';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <BrandHighlights />
    </>
  );
};

export default HomePage;
