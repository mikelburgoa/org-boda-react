// src/components/Servicios.jsx
const serviciosData = [
    {
      titulo: "Invitaciones",
      descripcion: "Creamos invitaciones personalizadas que reflejan el estilo de tu boda.",
      icono: "bi-card-text",
      imgBack: "src/assets/Bodas_hero1.webp",
      altBack: "Ejemplo de invitaciones de boda personalizadas y elegantes"
    },
    {
      titulo: "Regalos",
      descripcion: "Detalles únicos para tus invitados que quedarán en su memoria.",
      icono: "bi-gift",
      imgBack: "src/assets/viri.jpeg",
      altBack: "Ejemplo de regalos y detalles únicos para invitados de boda"
    },
    {
      titulo: "Flores",
      descripcion: "Arreglos florales hermosos y personalizados para cada rincón de tu boda.",
      icono: "bi-flower1",
      imgBack: "src/assets/placeholder.webp",
      altBack: "Arreglos florales elegantes y personalizados para decoración de boda"
    },
    {
      titulo: "Música",
      descripcion: "Selección musical y bandas para ambientar tu boda según tu estilo.",
      icono: "bi-music-note-beamed",
      imgBack: "src/assets/placeholder.webp",
      altBack: "Servicios de música y bandas para ambientar la boda"
    },
    {
      titulo: "Decoración",
      descripcion: "Diseñamos espacios mágicos que hacen tu boda inolvidable.",
      icono: "bi-brush",
      imgBack: "src/assets/placeholder.webp",
      altBack: "Espacios decorados de forma mágica e inolvidable para bodas"
    },
    {
      titulo: "Catering",
      descripcion: "Menús deliciosos y personalizados para satisfacer a todos tus invitados.",
      icono: "bi-basket",
      imgBack: "src/assets/placeholder.webp",
      altBack: "Menús deliciosos y personalizados de catering para bodas"
    }
  ];
  
  export default function Servicios() {
    return (
      <section id="servicios" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Mis Servicios</h2>
          <div className="row g-4">
            {serviciosData.map((servicio, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 text-center shadow-sm p-0 servicio-card">
                  <div className="servicio-inner">
                    <div className="servicio-front p-4">
                      <i className={`bi ${servicio.icono} fs-1 mb-3 text-rosa`}></i>
                      <h5 className="card-title">{servicio.titulo}</h5>
                      <p className="card-text">{servicio.descripcion}</p>
                      <button className="ver-mas" type="button" aria-label={`Ver más información sobre ${servicio.titulo}`} aria-expanded="false">
                        Ver más
                      </button>
                    </div>
                    <div className="servicio-back" aria-hidden="true">
                      <img src={servicio.imgBack} alt={servicio.altBack} loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  