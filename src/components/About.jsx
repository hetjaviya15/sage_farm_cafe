import { useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { num: '2014', label: 'Established' },
  { num: '100%', label: 'Organic Produce' },
  { num: '4.8★', label: 'Average Rating' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          {/* Left – Image */}
          <div className="about__image-col fade-left">
            <div className="about__image-frame">
              <img src="/images/about.png" alt="Inside Sage Farm Cafe – warm, plant-filled dining area" className="about__image" />
              <div className="about__image-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <path d="M8 12l3 3 5-5"/>
                </svg>
                <span>Farm to Table<br/>Since 2014</span>
              </div>
            </div>
            {/* Floating leaf decoration */}
            <div className="about__deco-leaf">
              <svg viewBox="0 0 80 120" fill="none">
                <path d="M40 5 C15 25, 5 50, 15 75 C22 92, 35 100, 40 105 C45 100, 58 92, 65 75 C75 50, 65 25, 40 5Z" fill="#7a9c6b" opacity="0.18"/>
                <line x1="40" y1="5" x2="40" y2="105" stroke="#7a9c6b" strokeWidth="1" opacity="0.25"/>
                <line x1="28" y1="40" x2="40" y2="50" stroke="#7a9c6b" strokeWidth="0.8" opacity="0.2"/>
                <line x1="52" y1="40" x2="40" y2="50" stroke="#7a9c6b" strokeWidth="0.8" opacity="0.2"/>
              </svg>
            </div>
          </div>

          {/* Right – Text */}
          <div className="about__text-col">
            <p className="section-eyebrow fade-up">Our Story</p>

            <h2 className="section-title about__title fade-up delay-1">
              Where Every Meal Begins<br />
              <em>in the Field</em>
            </h2>

            <div className="about__body fade-up delay-2">
              <p>
                Sage Farm Cafe was born from a simple conviction: the best food starts with the best ingredients. Nestled in the green heart of Jubilee Hills, Hyderabad, we've been serving our community a taste of honest, nourishing food since 2014.
              </p>
              <p>
                Our farm-to-table philosophy means everything on your plate has travelled the shortest possible distance — from carefully chosen farms, straight to your fork. We celebrate seasonal produce, support local farmers, and believe that food is medicine.
              </p>
              <p>
                Whether you're here for a quiet solo breakfast, a leisurely lunch with family, or a slow Sunday brunch — we promise a space that feels like home, with warmth that lingers long after the last bite.
              </p>
            </div>

            {/* Value pillars */}
            <div className="about__pillars fade-up delay-3">
              <div className="about__pillar">
                <div className="about__pillar-icon">🌿</div>
                <div>
                  <strong>Farm Fresh Ingredients</strong>
                  <span>Sourced daily from trusted local farms</span>
                </div>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-icon">♻️</div>
                <div>
                  <strong>Sustainable Practices</strong>
                  <span>Zero waste kitchen, eco-conscious packaging</span>
                </div>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-icon">🤝</div>
                <div>
                  <strong>Community First</strong>
                  <span>Supporting Hyderabad's farming community</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="about__stats fade-up delay-4">
              {stats.map(s => (
                <div className="about__stat" key={s.label}>
                  <span className="about__stat-num">{s.num}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
