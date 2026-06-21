import { useEffect, useRef } from 'react';
import './Hero.css';

const WHATSAPP_NUMBER = '919849427575';
const WHATSAPP_RESERVE_MSG = encodeURIComponent('Hello, I would like to reserve a table at Sage Farm Cafe.');

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Parallax on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const bg = heroRef.current.querySelector('.hero__bg');
      if (bg) {
        bg.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Entrance animations
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.querySelectorAll('.hero__animate').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 160);
        });
      }
    }, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('about');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background */}
      <div className="hero__bg-wrapper">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/hero.png)' }} />
        <div className="hero__overlay" />
        <div className="hero__overlay-gradient" />
      </div>

      {/* Floating decorative elements */}
      <div className="hero__deco hero__deco--1">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.12">
          <circle cx="60" cy="60" r="59" stroke="white" strokeWidth="1"/>
          <circle cx="60" cy="60" r="40" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="hero__deco hero__deco--2">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.1">
          <path d="M40 5 C20 20, 10 35, 20 55 C28 70, 40 72, 40 72 C40 72, 52 70, 60 55 C70 35, 60 20, 40 5Z" fill="white"/>
        </svg>
      </div>
      <div className="hero__deco hero__deco--3">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.08">
          <path d="M30 3 L35.5 20.3 L54 20.3 L39.7 30.7 L45.2 48 L30 37.6 L14.8 48 L20.3 30.7 L6 20.3 L24.5 20.3 Z" fill="white"/>
        </svg>
      </div>

      {/* Content */}
      <div className="hero__content" ref={textRef}>
        <p className="hero__eyebrow hero__animate">
          <span className="hero__eyebrow-line" />
          Farm Fresh Experience
          <span className="hero__eyebrow-line" />
        </p>

        <h1 className="hero__title hero__animate">
          Experience Hyderabad's<br />
          <em>Most Charming Cafe</em>
        </h1>

        <p className="hero__description hero__animate">
          A perfect blend of fresh ingredients, handcrafted beverages,<br className="hero__br" />
          and unforgettable dining experiences.
        </p>

        <div className="hero__actions hero__animate">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_RESERVE_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--primary"
            id="hero-reserve-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Reserve Table
          </a>
          <button
            className="hero__btn hero__btn--outline"
            onClick={scrollToNext}
            id="hero-explore-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
            Explore More
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats hero__animate">
          <div className="hero__stat">
            <span className="hero__stat-num">10+</span>
            <span className="hero__stat-label">Years of Excellence</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">500+</span>
            <span className="hero__stat-label">Happy Guests Daily</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">100%</span>
            <span className="hero__stat-label">Farm Fresh Organic</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="hero__scroll" onClick={scrollToNext} aria-label="Scroll down" id="hero-scroll-btn">
        <span className="hero__scroll-dot" />
      </button>
    </section>
  );
}
