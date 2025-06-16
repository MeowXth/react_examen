import React from 'react';
import Modales from './Modales';
import './Cartas.css';
import caporalImg from './assets/caporal.jpg';
import morenadaImg from './assets/morenada.jpeg';
import salayImg from './assets/salay.jpg';
function Cartas() {
  const cursos = [
    {
      titulo: "Curso de Caporal",
      texto: "Sumérgete en la vibrante cultura del Caporal, uno de los bailes folklóricos más emblemáticos de Bolivia. Aprende desde los pasos básicos y la postura elegante hasta las coreografías más complejas. Desarrolla tu coordinación, expresividad y siente la energía contagiosa de cada movimiento. Ideal para principiantes y bailarines que deseen perfeccionar su técnica y entender la rica historia detrás de este baile tradicional.",
      img: caporalImg,
    },

    {
      titulo: "Curso de Morenada",
      texto: "Descubre la majestuosidad de la Morenada, una danza que representa la historia y el legado cultural de Bolivia. Este curso te guiará a través de sus complejos pasos, el manejo del peso de la vestimenta y la interpretación de los personajes tradicionales. Conviértete en un experto en este baile ceremonial, desarrollando fuerza, resistencia y una profunda conexión con sus raíces andinas. Perfecto para quienes buscan una experiencia dancística llena de significado.",
      iimg: morenadaImg,
    },
    {
      titulo: "Salay",
      texto: "Déjate envolver por la dulzura y el dinamismo del Salay, una danza que celebra el coqueteo y la festividad. Aprende sus pasos característicos, giros y zapateos que reflejan la alegría de las comunidades del valle. Este curso te ayudará a mejorar tu ritmo, agilidad y carisma en la pista de baile, ofreciéndote una forma divertida de expresar la cultura boliviana. Apto para todas las edades y niveles, enfocado en la diversión y el aprendizaje colectivo.",
      img: salayImg,
    }
  ];

  return (
    <div className="cartas-contenedor">
      {cursos.map((curso, index) => (
        <div key={index} className="carta-base">
          <img src={curso.img} alt="Curso" className="carta-imagen" />
          <div className="carta-cuerpo">
            <h5>{curso.titulo}</h5>
            <p>{curso.texto}</p>
            <Modales />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cartas;

