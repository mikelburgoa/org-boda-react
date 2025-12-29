// src/components/Hero.jsx
export default function Hero() {
    return (
      <section
        id="inicio"
        className="hero-section d-flex align-items-center"
        style={{ height: '100vh', background: "url('src/assets/Bodas_hero1.webp') center/100% 100% no-repeat" }}
      >
        <div className="hero-overlay"></div>
        <div className="container text-center text-white hero-content">
          <p className="hero-tagline mb-2">Haz realidad la boda de tus sueños</p>
          <h1 className="display-3 fw-bold">Tu boda, un día inolvidable</h1>
          <p className="lead mt-3 fs-4">
            Desde las invitaciones hasta la decoración, hago que cada detalle cuente
          </p>
          <div className="mt-4">
            <a href="#sobre" className="btn btn-primary btn-lg me-3">Conóceme</a>
            <a href="#servicios" className="btn btn-outline-light btn-lg">Ver Servicios</a>
          </div>
        </div>
      </section>
    );
  }
  