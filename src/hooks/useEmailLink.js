// src/hooks/useEmailLink.js
import { useEffect } from 'react';
import { contactInfo } from '../config/contact.js';

export default function useEmailLink() {
  useEffect(() => {
    const emailLink = document.querySelector("#sendEmail");
    if (!emailLink) return;

    const recipient = contactInfo.email;
    const subject = contactInfo.emailTemplate.subject;
    const body = contactInfo.emailTemplate.body;

    emailLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, []);
}
