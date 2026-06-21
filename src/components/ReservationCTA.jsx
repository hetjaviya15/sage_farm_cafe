import { useEffect, useRef } from 'react';
import './ReservationCTA.css';

const WHATSAPP_NUMBER = '919849427575';
const WHATSAPP_MSG = encodeURIComponent('Hello, I would like to reserve a table at Sage Farm Cafe.');

export default function ReservationCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="reservation-cta" id="reservation" ref={sectionRef}>
      <div className="reservation-cta__bg" />
      <div className="reservation-cta__overlay" />

      {/* Floating decorations */}
      <div className="reservation-cta__deco reservation-cta__deco--1" />
      <div className="reservation-cta__deco reservation-cta__deco--2" />

      <div className="container">
        <div className="reservation-cta__content">
          <p className="section-eyebrow fade-up" style={{ color: 'rgba(200,230,180,0.8)' }}>
            <span style={{ background: 'rgba(200,230,180,0.3)' }} />
            Book a Table
            <span style={{ background: 'rgba(200,230,180,0.3)' }} />
          </p>

          <h2 className="reservation-cta__title fade-up delay-1">
            Reserve Your<br /><em>Perfect Table</em>
          </h2>

          <p className="reservation-cta__desc fade-up delay-2">
            Whether it's a quiet date night, a family gathering, or a celebration — let us make it unforgettable. Reach out to us on WhatsApp and we'll take care of everything.
          </p>

          <div className="reservation-cta__info fade-up delay-3">
            <div className="reservation-cta__info-item">
              <span>🕐</span>
              <span>Mon – Sun: 11:00 AM – 11:00 PM</span>
            </div>
            <div className="reservation-cta__info-item">
              <span>📍</span>
              <span>1227, Road No. 62A, Jubilee Hills, Hyderabad</span>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="reservation-cta__btn fade-up delay-4"
            id="reservation-cta-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.555 4.126 1.527 5.862L0 24l6.335-1.52A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.007-1.372l-.36-.213-3.732.895.928-3.636-.234-.373A9.77 9.77 0 0 1 2.182 12C2.182 6.569 6.569 2.182 12 2.182c5.431 0 9.818 4.387 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z"/>
            </svg>
            Book Now via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
