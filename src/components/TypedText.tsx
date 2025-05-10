import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'sin derrochar tu presupuesto',
        'en tiempo record',
        'con tecnología de punta'
      ],
      typeSpeed: 50,      // Velocidad de escritura
      backSpeed: 20,      // Velocidad de borrado más rápida
      backDelay: 2000,    // Tiempo que espera antes de empezar a borrar
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className="text-[#cbe850] inline-block text-center" ref={el}></span>
  );
}