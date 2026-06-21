import { useEffect, useRef } from 'react';
import './Gallery.css';

// Curated Unsplash images for the gallery
const galleryItems = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    alt: 'Sage Farm Cafe interior – warm wooden tables and greenery',
    label: 'Cafe Interior',
    size: 'tall',
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    alt: 'Specialty latte art',
    label: 'Specialty Coffee',
    size: 'normal',
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80',
    alt: 'Farm fresh salad',
    label: 'Farm Fresh Salad',
    size: 'normal',
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80',
    alt: 'Outdoor cafe seating with plants',
    label: 'Outdoor Seating',
    size: 'wide',
  },
  {
    id: 'gal-5',
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    alt: 'Artisan dessert plating',
    label: 'Artisan Desserts',
    size: 'normal',
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80',
    alt: 'Cozy cafe dining experience',
    label: 'Dining Experience',
    size: 'tall',
  },
  {
    id: 'gal-7',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    alt: 'Morning coffee ritual',
    label: 'Morning Coffee',
    size: 'normal',
  },
  {
    id: 'gal-8',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    alt: 'Gourmet food plating',
    label: 'Gourmet Plates',
    size: 'normal',
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.gallery-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery__header">
          <p className="section-eyebrow fade-up">Our Space & Food</p>
          <h2 className="section-title fade-up delay-1">
            A Glimpse into<br /><em>Sage Farm</em>
          </h2>
          <p className="section-subtitle fade-up delay-2">
            Every corner, every dish, every moment — crafted with intention.
          </p>
        </div>

        <div className="gallery__masonry">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              id={item.id}
              className={`gallery-item gallery-item--${item.size}`}
            >
              <div className="gallery-item__inner">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-item__img"
                  loading="lazy"
                />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__label">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
