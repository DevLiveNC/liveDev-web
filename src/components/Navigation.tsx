import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımda' },
    { href: '#services', label: 'Hizmetler' },
    { href: '#portfolio', label: 'Projeler' },
    { href: '#yazilarim', label: 'Yazılarım' },
    { href: '#pricing', label: 'Paketler' },
    { href: '#contact', label: 'İletişim' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group" onClick={(e) => scrollToSection(e, '#home')}>
            <div className="gradient-brand p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-sky-500/20">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-heading">
              LiveDev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-subtle hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-brand group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-brand px-6 py-2"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/[0.06] backdrop-blur-sm transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-nav border-t border-sky-500/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-2 text-subtle hover:text-white hover:bg-white/[0.06] backdrop-blur-sm rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block text-center btn-brand px-4 py-2"
            >
              Teklif Al
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
