const procesoData = [
  {
    icono: "bi-chat-heart",
    titulo: "Primera toma de contacto",
    descripcion: "Hablamos de vuestra idea, estilo y todo lo que soñáis para ese día."
  },
  {
    icono: "bi-calendar-check",
    titulo: "Planificación y diseño",
    descripcion: "Diseñamos juntos cada detalle y coordinamos proveedores y tiempos."
  },
  {
    icono: "bi-heart-fill",
    titulo: "El gran día",
    descripcion: "Disfrutáis sin preocupaciones mientras yo me encargo de todo."
  }
];

const faqData = [
  {
    pregunta: "¿Cuánto tiempo antes debo contratar tus servicios?",
    respuesta: "Lo ideal es contratar con al menos 6 meses de antelación para garantizar disponibilidad y tiempo de planificación."
  },
  {
    pregunta: "¿Puedo personalizar todos los servicios?",
    respuesta: "Sí, cada detalle puede adaptarse a vuestro estilo y preferencias."
  },
  {
    pregunta: "¿Cómo gestionas la coordinación con proveedores?",
    respuesta: "Me encargo de toda la coordinación y comunicación con proveedores."
  }
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-5">
      <div className="container">
        <h2 className="mb-5">Cómo Trabajo</h2>
        <div className="row g-4">
          {procesoData.map((item, index) => (
            <div key={index} className="col-md-4 fade-in">
              <div className="proceso-card text-center">
                <i className={`bi ${item.icono} fs-2 mb-3`}></i>
                <h5>{item.titulo}</h5>
                <p>{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-5 mb-4">Preguntas Frecuentes</h3>
        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" id={`faqHeading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                  aria-expanded="false"
                  aria-controls={`faq${index}`}
                >
                  {faq.pregunta}
                </button>
              </h2>
              <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion" aria-labelledby={`faqHeading${index}`}>
                <div className="accordion-body">{faq.respuesta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
