import { useEffect, useRef } from 'react';
import './Contact.css';

const PHONE = '+91 98494 27575';
const PHONE_RAW = '+919849427575';
const WHATSAPP_NUMBER = '919849427575';
const WHATSAPP_MSG = encodeURIComponent('Hello, I would like to know more about Sage Farm Cafe.');
const ADDRESS = '1227, Road No. 62A, Jubilee Hills, Hyderabad, Telangana 500033';
const MAPS_URL = 'https://maps.google.com/?q=Sage+Farm+Cafe+Jubilee+Hills+Hyderabad';
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.484019905339!2d78.40745!3d17.42186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977a7b4ee8ed%3A0xf47ba6f69fe69b94!2sSage%20Farm%20Cafe!5e0!3m2!1sen!2sin!4v1719910000000!5m2!1sen!2sin';

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
              el.classList.add('visible');
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
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact__header">
          <p className="section-eyebrow fade-up">Find Us</p>
          <h2 className="section-title fade-up delay-1">
            Come Visit<br /><em>Sage Farm</em>
          </h2>
          <p className="section-subtitle fade-up delay-2">
            We're nestled in the lush greenery of Jubilee Hills. Come hungry, leave happy.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left – Info */}
          <div className="contact__info-col fade-left">
            {/* Address */}
            <div className="contact__card">
              <div className="contact__card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="contact__card-title">Address</h3>
                <p className="contact__card-text">{ADDRESS}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                  id="get-directions-btn"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact__card">
              <div className="contact__card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </div>
              <div>
                <h3 className="contact__card-title">Phone</h3>
                <p className="contact__card-text">{PHONE}</p>
                <a href={`tel:${PHONE_RAW}`} className="contact__link" id="call-now-btn">
                  Call Now →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="contact__card">
              <div className="contact__card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h3 className="contact__card-title">Opening Hours</h3>
                <div className="contact__hours">
                  <div className="contact__hours-row">
                    <span>Monday – Friday</span>
                    <span>11:00 AM – 11:00 PM</span>
                  </div>
                  <div className="contact__hours-row">
                    <span>Saturday – Sunday</span>
                    <span>10:00 AM – 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="contact__actions">
              <a href={`tel:${PHONE_RAW}`} className="contact__action-btn contact__action-btn--call" id="contact-call-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action-btn contact__action-btn--whatsapp"
                id="contact-whatsapp-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.555 4.126 1.527 5.862L0 24l6.335-1.52A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.007-1.372l-.36-.213-3.732.895.928-3.636-.234-.373A9.77 9.77 0 0 1 2.182 12C2.182 6.569 6.569 2.182 12 2.182c5.431 0 9.818 4.387 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action-btn contact__action-btn--maps"
                id="contact-directions-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Right – Map */}
          <div className="contact__map-col fade-right">
            <div className="contact__map-frame">
              <iframe
                src={MAPS_EMBED}
                title="Sage Farm Cafe location on Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact__map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
