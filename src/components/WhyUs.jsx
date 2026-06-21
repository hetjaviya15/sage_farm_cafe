import { useEffect, useRef } from 'react';
import './WhyUs.css';

const cards = [
  {
    id: 'why-fresh',
    icon: '🌾',
    title: 'Farm Fresh Ingredients',
    desc: 'Every ingredient is sourced directly from local organic farms. We partner with trusted growers to bring seasonal, nutrient-rich produce to your plate every single day.',
    accent: '#7a9c6b',
  },
  {
    id: 'why-beverages',
    icon: '☕',
    title: 'Handcrafted Beverages',
    desc: 'From single-origin cold brews to house-made herbal infusions and wellness tonics — every drink is crafted with intention, care, and the finest natural ingredients.',
    accent: '#c07a5a',
  },
  {
    id: 'why-ambience',
    icon: '🪴',
    title: 'Cozy Ambience',
    desc: 'Step into a serene retreat from the city. Our space is thoughtfully designed with natural wood, lush greenery, and warm lighting to create a calming, welcoming atmosphere.',
    accent: '#8b6f47',
  },
  {
    id: 'why-service',
    icon: '✨',
    title: 'Exceptional Service',
    desc: "Our team treats every guest like family. We take pride in attentive, warm hospitality that makes each visit memorable — from your first hello to your last goodbye.",
    accent: '#4a7c3f',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up, .zoom-in').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-us section" id="why-us" ref={sectionRef}>
      <div className="container">
        <div className="why-us__header">
          <p className="section-eyebrow fade-up">Why Choose Us</p>
          <h2 className="section-title fade-up delay-1">
            The Sage Farm<br /><em>Difference</em>
          </h2>
          <p className="section-subtitle fade-up delay-2">
            More than just a cafe — we're a commitment to quality, wellness, and community.
          </p>
        </div>

        <div className="why-us__grid">
          {cards.map((card, i) => (
            <div
              key={card.id}
              id={card.id}
              className={`why-us__card zoom-in delay-${i + 1}`}
              style={{ '--card-accent': card.accent }}
            >
              <div className="why-us__card-icon-wrap">
                <span className="why-us__card-icon">{card.icon}</span>
                <div className="why-us__card-icon-bg" />
              </div>
              <h3 className="why-us__card-title">{card.title}</h3>
              <p className="why-us__card-desc">{card.desc}</p>
              <div className="why-us__card-accent-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
