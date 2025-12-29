// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top" role="navigation" aria-label="Navegación principal">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold" href="#inicio">Organización de Bodas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link active" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#sobre">Sobre Mi</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#proceso">Cómo Trabajo</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  