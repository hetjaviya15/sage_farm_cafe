import { useState, useEffect } from 'react';
import { useNavScroll } from '../hooks/useScrollReveal';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Special Dishes', href: '#dishes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_NUMBER = '919849427575';
const WHATSAPP_RESERVE_MSG = encodeURIComponent('Hello, I would like to reserve a table at Sage Farm Cafe.');

export default function Navbar() {
  const navRef = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'why-us', 'dishes', 'gallery', 'testimonials', 'instagram', 'contact'];
      let current = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar" ref={navRef} id="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a className="navbar__logo" href="#home" onClick={() => handleNavClick('#home')}>
          <div className="navbar__logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M18 8 C12 12, 10 18, 14 22 C16 24, 18 24, 18 24 C18 24, 20 24, 22 22 C26 18, 24 12, 18 8Z" fill="currentColor" opacity="0.85"/>
              <path d="M18 24 L18 30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Sage Farm</span>
            <span className="navbar__logo-tagline">Cafe</span>
          </div>
        </a>

        {/* Center Nav Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.replace('#','') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__cta">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_RESERVE_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__reserve-btn"
            id="navbar-reserve-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Reserve Table
          </a>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_RESERVE_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-reserve"
        >
          Reserve Table
        </a>
      </div>
    </nav>
  );
}
