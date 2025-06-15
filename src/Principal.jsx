import './Principal.css';
import { Routes, Route, Link } from "react-router-dom";
import Acordeon from './Acordeon';
import Cartas from './Cartas';
function Inicio() {
  return (
    <div className="inicio">
      <Acordeon />
    </div>
  );
}

function Oferta() {
  return (
    <div className="oferta">
      <h2>Ofertas de Cursos</h2>
      <Cartas></Cartas>
    </div>
  );
}

function Principal() {
  return (
    <div className="contenedor">
      <div className="titulo">
        <h1>'Sergio el bailador' Alejandro Brando Carrillo Choquetarqui</h1>
      </div>

      <div className="menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/pag2">Oferta de Cursos</Link></li>
        </ul>
      </div>

      <div className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/pag2" element={<Oferta />} />
        </Routes>
      </div>

      <div className="footer">
        <h3>Todos los Derechos Reservados 2025 Alejandro Carrillo</h3>
      </div>
    </div>
  );
}

export default Principal;

