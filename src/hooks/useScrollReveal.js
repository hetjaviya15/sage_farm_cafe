import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe all animatable children
    const animatables = element.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');
    if (animatables.length > 0) {
      animatables.forEach(el => observer.observe(el));
    } else if (element.classList.contains('fade-up') || 
               element.classList.contains('fade-left') || 
               element.classList.contains('fade-right') ||
               element.classList.contains('zoom-in')) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useNavScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
}
