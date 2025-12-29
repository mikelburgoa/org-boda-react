// src/hooks/useFlipCards.js
import { useEffect } from 'react';

export default function useFlipCards() {
  useEffect(() => {
    const cards = document.querySelectorAll('.servicio-card');
    const handlers = new Map();

    cards.forEach(card => {
      const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isActive = card.classList.contains('active');
        const button = card.querySelector('.ver-mas');

        if (isActive) {
          card.classList.remove('active');
          if (button) button.setAttribute('aria-expanded', 'false');
          return;
        }

        const currentlyActive = document.querySelector('.servicio-card.active');
        if (currentlyActive && currentlyActive !== card) {
          const prevButton = currentlyActive.querySelector('.ver-mas');
          currentlyActive.classList.remove('active');
          if (prevButton) prevButton.setAttribute('aria-expanded', 'false');
          setTimeout(() => {
            card.classList.add('active');
            if (button) button.setAttribute('aria-expanded', 'true');
          }, 300);
        } else {
          card.classList.add('active');
          if (button) button.setAttribute('aria-expanded', 'true');
        }
      };

      handlers.set(card, handleClick);
      card.addEventListener('click', handleClick);

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
