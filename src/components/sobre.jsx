// src/components/Sobre.jsx
export default function Sobre() {
  return (
    <section id="sobre" className="py-5 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-5 text-center text-md-start">
            <img 
              src="src/assets/viri.jpeg" 
              alt="Viri, organizadora profesional de bodas" 
              className="img-fluid rounded shadow sobre-img" 
            />
          </div>
          <div className="col-md-7 fade-in">
            <p className="sobre-tagline">Haz de tu boda un día inolvidable</p>
            <h2 className="mb-3">Sobre Viri</h2>
            <p>
              Hola, soy <strong>Viri</strong>, tu organizadora de bodas. Me apasiona hacer de cada boda un día único y lleno de magia. Desde las invitaciones hasta el catering, me encargo de cada detalle para que tú solo disfrutes.
            </p>
            <p>
              Con años de experiencia y una pasión por la decoración, la música y los detalles especiales, mi misión es crear bodas inolvidables, adaptadas a tu estilo y personalidad.
            </p>
            <a href="#servicios" className="btn btn-primary mt-3">Ver Servicios</a>
          </div>
        </div>
      </div>
    </section>
  );
}
