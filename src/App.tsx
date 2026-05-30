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
import BlogPostPage from './components/BlogPostPage';
import CTABanner from './components/CTABanner';
import AdminApp from './admin/AdminApp';

type AppRoute = 'home' | 'article' | 'admin';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [route, setRoute] = useState<AppRoute>('home');
  const [articleSlug, setArticleSlug] = useState<string | null>(null);
  const [adminPath, setAdminPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;

      if (hash.startsWith('#admin')) {
        setRoute('admin');
        setAdminPath(hash.replace('#admin', '').replace(/^\//, ''));
        setArticleSlug(null);
        window.scrollTo(0, 0);
        return;
      }

      if (hash.startsWith('#yazi/')) {
        setRoute('article');
        setArticleSlug(hash.replace('#yazi/', ''));
        window.scrollTo(0, 0);
        return;
      }

      setRoute('home');
      setArticleSlug(null);
      setAdminPath('');

      if (hash && hash !== '#') {
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  if (route === 'admin') {
    return <AdminApp path={adminPath} />;
  }

  if (route === 'article' && articleSlug) {
    return <BlogPostPage slug={articleSlug} isScrolled={isScrolled} />;
  }

  return (
    <div className="min-h-screen bg-ink text-slate-100 relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      <div className="relative z-10">
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
    </div>
  );
}

export default App;
