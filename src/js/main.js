// src/js/main.js
import { useEffect } from 'react';
import { contactInfo } from '../config/contact.js';

/* ----------------- Fade-in al hacer scroll ----------------- */
export function useFadeIn() {
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

/* ----------------- Giros de cartas (flip cards) ----------------- */
export function useFlipCards() {
  useEffect(() => {
    const cards = document.querySelectorAll('.servicio-card');
    const handlers = new Map();

    cards.forEach(card => {
      const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = card.classList.contains('active');
        const button = card.querySelector('.ver-mas');
        
        // Si la card ya está activa, la desactivamos
        if (isActive) {
          card.classList.remove('active');
          if (button) {
            button.setAttribute('aria-expanded', 'false');
          }
          return;
        }
        
        // Si hay otra card activa, la desactivamos primero
        const currentlyActive = document.querySelector('.servicio-card.active');
        if (currentlyActive && currentlyActive !== card) {
          const prevButton = currentlyActive.querySelector('.ver-mas');
          currentlyActive.classList.remove('active');
          if (prevButton) {
            prevButton.setAttribute('aria-expanded', 'false');
          }
          // Esperamos a que termine la animación antes de activar la nueva
          setTimeout(() => {
            card.classList.add('active');
            if (button) {
              button.setAttribute('aria-expanded', 'true');
            }
          }, 300);
        } else {
          // Si no hay ninguna activa, activamos directamente
          card.classList.add('active');
          if (button) {
            button.setAttribute('aria-expanded', 'true');
          }
        }
      };

      handlers.set(card, handleClick);
      card.addEventListener('click', handleClick);
      
      // Añadir soporte para teclado (Enter y Espacio)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
        }
      });
    });

    return () => {
      handlers.forEach((handleClick, card) => {
        card.removeEventListener('click', handleClick);
      });
    };
  }, []);
}

/* ----------------- Botón WhatsApp flotante ----------------- */
export function useWhatsapp() {
  useEffect(() => {
    const btn = document.querySelector(".whatsapp-float");
    if (!btn) return;

    const phone = contactInfo.phone;
    const message = contactInfo.whatsapp.message;
    btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, []);
}

/* ----------------- Enlace de email en footer ----------------- */
export function useEmailLink() {
  useEffect(() => {
    const emailLink = document.querySelector("#sendEmail");
    if (!emailLink) return;

    const recipient = contactInfo.email;
    const subject = contactInfo.emailTemplate.subject;
    const body = contactInfo.emailTemplate.body;

    emailLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, []);
}
