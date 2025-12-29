// src/hooks/useWhatsapp.js
import { useEffect } from 'react';
import { contactInfo } from '../config/contact.js';

export default function useWhatsapp() {
  useEffect(() => {
    const btn = document.querySelector(".whatsapp-float");
    if (!btn) return;

    const phone = contactInfo.phone;
    const message = contactInfo.whatsapp.message;
    btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, []);
}
