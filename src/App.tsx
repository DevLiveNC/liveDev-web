import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import FloatingActions from './components/FloatingActions';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import ScrollToTop from './components/ScrollToTop';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import CTABanner from './components/CTABanner';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
      <CTABanner />
      <Newsletter />
      <Contact />
      <Footer />
      <FloatingActions />
      <ScrollToTop />
    </div>
  );
}

export default App;
