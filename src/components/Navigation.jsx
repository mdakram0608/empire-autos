import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Car Collection', href: '#collection' },
    { name: 'About Us', href: '#about' },
    { name: 'Stores', href: '#stores' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <a href="#home" className="logo">
            <img src="/logo.png" alt="Empire Autos" />
          </a>

          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="nav-actions">
            <a href="#sell-car" className="btn btn-primary">
              Sell Your Car
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#sell-car" 
                className="mobile-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell Your Car
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
