import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const reviews = [
  {
    id: 'rev-1',
    name: 'Priya Reddy',
    role: 'Food Blogger',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
    text: "Sage Farm Cafe is an absolute gem in Jubilee Hills. The farm-fresh salad bowl was the freshest I've had in Hyderabad — vibrant, nourishing, and beautifully presented. The ambiance is so calming you forget you're in the middle of the city!",
  },
  {
    id: 'rev-2',
    name: 'Arjun Sharma',
    role: 'Entrepreneur',
    avatar: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
    text: "I've been coming here every Sunday for brunch for over two years. The wood-fired pizza is unmatched. But what keeps me coming back is the genuinely warm service and the fact that you know every ingredient is fresh and honest. A true farm-to-table experience.",
  },
  {
    id: 'rev-3',
    name: 'Meera Nair',
    role: 'Wellness Coach',
    avatar: 'https://i.pravatar.cc/80?img=32',
    rating: 5,
    text: "As someone who takes nutrition seriously, finding Sage Farm Cafe was like finding a sanctuary. They actually know where their food comes from. The herbal cold brew and the quinoa bowl are my weekly staples. Highly recommend for health-conscious diners!",
  },
  {
    id: 'rev-4',
    name: 'Karthik Raj',
    role: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/80?img=3',
    rating: 5,
    text: "Took my family here for a celebration dinner and it exceeded every expectation. The dessert collection was extraordinary. The staff made us feel so special. Sage Farm Cafe is now our go-to for all special occasions in Hyderabad.",
  },
  {
    id: 'rev-5',
    name: 'Divya Menon',
    role: 'Interior Designer',
    avatar: 'https://i.pravatar.cc/80?img=25',
    rating: 5,
    text: "As an interior designer, I appreciate thoughtful spaces — and Sage Farm Cafe is exquisite. Every corner is intentional. But the real star is the food: the truffle pasta is absolutely divine. This place has soul.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  const goTo = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 300);
  };

  const next = () => goTo((active + 1) % reviews.length);
  const prev = () => goTo((active - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const review = reviews[active];

  return (
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="testimonials__bg-deco" />
      <div className="container">
        <div className="testimonials__header">
          <p className="section-eyebrow fade-up">What Our Guests Say</p>
          <h2 className="section-title fade-up delay-1">
            Stories from<br /><em>Our Community</em>
          </h2>
        </div>

        <div className="testimonials__carousel fade-up delay-2">
          <div className={`testimonials__card ${isAnimating ? 'exit' : 'enter'}`}>
            {/* Stars */}
            <div className="testimonials__stars">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Quote */}
            <div className="testimonials__quote-icon">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                <path d="M0 28V17.5C0 7.5 5.5 2 16.5 0L18 3C13 4.5 10 8 10 13H16V28H0ZM20 28V17.5C20 7.5 25.5 2 36.5 0L38 3C33 4.5 30 8 30 13H36V28H20Z" fill="currentColor" opacity="0.12"/>
              </svg>
            </div>

            <blockquote className="testimonials__text">"{review.text}"</blockquote>

            <div className="testimonials__author">
              <img src={review.avatar} alt={review.name} className="testimonials__avatar" />
              <div>
                <strong className="testimonials__name">{review.name}</strong>
                <span className="testimonials__role">{review.role}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="testimonials__controls">
            <button className="testimonials__btn" onClick={prev} aria-label="Previous review" id="testimonial-prev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className="testimonials__dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button className="testimonials__btn" onClick={next} aria-label="Next review" id="testimonial-next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
