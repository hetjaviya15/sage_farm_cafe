import { useEffect, useRef } from 'react';
import './Dishes.css';

const dishes = [
  {
    id: 'dish-pizza',
    image: '/images/pizza.png',
    title: 'Wood Fired Pizza',
    desc: 'Hand-stretched artisan dough, heirloom tomatoes, buffalo mozzarella & fresh basil from our garden.',
    tag: 'Chef\'s Signature',
  },
  {
    id: 'dish-salad',
    image: '/images/salad.png',
    title: 'Farm Fresh Salad',
    desc: 'A vibrant medley of seasonal greens, edible flowers, avocado & house-made vinaigrette.',
    tag: 'Fan Favourite',
  },
  {
    id: 'dish-sandwich',
    image: '/images/sandwich.png',
    title: 'Gourmet Sandwich',
    desc: 'Toasted sourdough stacked with grilled chicken, microgreens, smoked cheese & herb aioli.',
    tag: 'Bestseller',
  },
  {
    id: 'dish-pasta',
    image: '/images/pasta.png',
    title: 'Signature Pasta',
    desc: 'Silky handmade fettuccine tossed in a truffle cream sauce, finished with shaved parmesan.',
    tag: 'Premium',
  },
  {
    id: 'dish-coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    title: 'Specialty Coffee',
    desc: 'Single-origin pour-overs, cold brews & latte art — all made with ethically sourced beans.',
    tag: 'House Special',
  },
  {
    id: 'dish-dessert',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    title: 'Dessert Collection',
    desc: 'Indulgent seasonal desserts made in-house — from raw cakes to honey-drizzled tarts.',
    tag: 'Sweet Endings',
  },
];

export default function Dishes() {
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
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="dishes section" id="dishes" ref={sectionRef}>
      <div className="container">
        <div className="dishes__header">
          <p className="section-eyebrow fade-up">Our Specialities</p>
          <h2 className="section-title fade-up delay-1">
            Special Dishes<br />
            <em>Crafted with Love</em>
          </h2>
          <p className="section-subtitle fade-up delay-2">
            Every dish tells the story of the farm, the season, and the people who grew it.
          </p>
        </div>

        <div className="dishes__grid">
          {dishes.map((dish, i) => (
            <div
              key={dish.id}
              id={dish.id}
              className={`dish-card zoom-in delay-${(i % 4) + 1}`}
            >
              <div className="dish-card__image-wrap">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="dish-card__image"
                  loading="lazy"
                />
                <div className="dish-card__overlay" />
                <span className="dish-card__tag">{dish.tag}</span>
              </div>
              <div className="dish-card__body">
                <h3 className="dish-card__title">{dish.title}</h3>
                <p className="dish-card__desc">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
