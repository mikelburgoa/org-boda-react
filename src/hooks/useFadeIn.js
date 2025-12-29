// src/hooks/useFadeIn.js
import { useEffect } from 'react';

export default function useFadeIn() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');

    const observerOptions = { threshold: 0.2 };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    return () => appearOnScroll.disconnect();
  }, []);
}
