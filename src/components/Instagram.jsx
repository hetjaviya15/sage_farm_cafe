import { useEffect, useRef } from 'react';
import './Instagram.css';

const INSTAGRAM_URL = 'https://www.instagram.com/sage_farm_cafe/';

const feedImages = [
  { id: 'ig-1', src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80', alt: 'Coffee latte art' },
  { id: 'ig-2', src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80', alt: 'Artisan dessert' },
  { id: 'ig-3', src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', alt: 'Fresh salad bowl' },
  { id: 'ig-4', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80', alt: 'Gourmet dish' },
  { id: 'ig-5', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', alt: 'Morning brew' },
  { id: 'ig-6', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80', alt: 'Cafe interior' },
];

export default function Instagram() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up, .ig-item').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="instagram section" id="instagram" ref={sectionRef}>
      <div className="container">
        <div className="instagram__header">
          <p className="section-eyebrow fade-up">Social Media</p>
          <h2 className="section-title fade-up delay-1">
            Follow Our<br /><em>Journey</em>
          </h2>
          <p className="section-subtitle fade-up delay-2">
            Join our community on Instagram for daily farm-fresh inspiration, behind-the-scenes moments, and seasonal specials.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram__handle fade-up delay-3"
            id="instagram-handle-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @sage_farm_cafe
          </a>
        </div>

        {/* Feed Grid */}
        <div className="instagram__grid">
          {feedImages.map((img, i) => (
            <a
              key={img.id}
              id={img.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-item"
              aria-label={`View ${img.alt} on Instagram`}
            >
              <div className="ig-item__inner">
                <img src={img.src} alt={img.alt} className="ig-item__img" loading="lazy" />
                <div className="ig-item__overlay">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="instagram__cta fade-up">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="instagram-visit-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Visit Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
