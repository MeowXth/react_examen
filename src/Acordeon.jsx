import './Acordeon.css'
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Example(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Danza 1</AccordionHeader>
          <AccordionBody accordionId="1" className='acor-cuerpo'>
            <strong>La Diablada:</strong> Una de las danzas más emblemáticas de Bolivia, originaria de Oruro. Representa la lucha entre el bien y el mal, con bailarines ataviados con impresionantes máscaras de diablos, ángeles y otros personajes míticos. Es central en el Carnaval de Oruro, declarado Obra Maestra del Patrimonio Oral e Intangible de la Humanidad por la UNESCO.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Danza 2</AccordionHeader>
          <AccordionBody accordionId="2" className='acor-cuerpo'>
            <strong>La Morenada:</strong> Danza folklórica que evoca la época colonial y la trata de esclavos africanos. Los bailarines, conocidos como "morenos", visten trajes voluminosos adornados con matracas y caretas que simulan rasgos africanos. El ritmo pesado y los movimientos lentos caracterizan esta danza, que expresa tanto el sufrimiento como la resistencia de los esclavos.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Danza 3</AccordionHeader>
          <AccordionBody accordionId="3" className='acor-cuerpo'>
           <strong>El Caporal:</strong> De origen relativamente reciente, esta danza es una de las más populares y enérgicas. Se inspira en la figura del "caporal", el capataz mulato de las haciendas, que supervisaba a los esclavos. Los bailarines visten botas altas, látigos y sombreros, realizando pasos ágiles y acrobáticos al ritmo de una música vibrante.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Danza 4</AccordionHeader>
          <AccordionBody accordionId="4">
           <strong>El Salay:</strong> Una danza alegre y juvenil, característica de los valles de Bolivia. Se distingue por el zapateo constante y enérgico de los bailarines, quienes lucen trajes coloridos y sombreros pequeños. Representa el cortejo y la alegría de las festividades comunales, con movimientos sincronizados y coqueteos entre parejas.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Danza 5</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>La Kullawada:</strong> Danza que se relaciona con el oficio de los hilanderos y tejedores de lana. Los bailarines portan un huso en la mano, simbolizando el trabajo artesanal. Sus trajes son elegantes y coloridos, y los movimientos son cadenciosos y coordinados, simulando el proceso de hilado. Es una danza de gran riqueza cultural y visual.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Example;