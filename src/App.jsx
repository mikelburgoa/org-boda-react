// src/App.jsx

// Estilos
import './App.css';

// Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicios from './components/Servicios';
import Proceso from './components/Proceso';
import Footer from './components/Footer';

// Hooks
import useFadeIn from './hooks/useFadeIn';
import useFlipCards from './hooks/useFlipCards';
import useWhatsapp from './hooks/useWhatsapp';
import useEmailLink from './hooks/useEmailLink';

function App() {
  // Hooks de comportamiento
  useFadeIn();
  useFlipCards();
  useWhatsapp();
  useEmailLink();

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicios />
      <Proceso />
      <Footer />
    </>
  );
}

export default App;
