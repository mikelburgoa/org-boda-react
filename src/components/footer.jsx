// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid text-center" id="contacto">
        <p className="footer-tagline">Creando bodas únicas, sin prisas y con alma.</p>
        <div className="footer-contact">
          <a className="footer-link" aria-label="Enviar email" id="sendEmail">
            <i className="bi bi-envelope"></i> info@tudominio.es
          </a>
          <a href="https://instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="bi bi-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/TUPAGINA" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="bi bi-facebook"></i> Facebook
          </a>
        </div>
        <p className="footer-copy">© 2025 · ¿Qué miras?</p>
      </div>
    </footer>
  );
}
