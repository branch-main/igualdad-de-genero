"use client";

import { useEffect, useState } from "react";

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    const section = document.getElementById("introduction");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="introduction"
      className={`text-center px-6 pt-3 mb-20 transition-opacity duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div>
        <h2 className="font-extrabold text-4xl text-black mb-12">
          Introducción
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
          La igualdad de género no es solo un ideal, sino una necesidad para
          construir un mundo más justo y equitativo. A través de la historia,
          los movimientos y eventos han allanado el camino hacia un futuro donde
          todos podamos prosperar sin barreras ni prejuicios. Únete a nosotros
          para explorar los hitos clave de esta lucha esencial.
        </p>
      </div>
      <blockquote className="mt-16 italic text-gray-500 text-lg max-w-2xl mx-auto border-l-4 border-red-500 pl-4">
        &quot;La igualdad de género es más que un objetivo en sí mismo. Es una
        condición previa para enfrentar el desafío de reducir la pobreza,
        promover el desarrollo sostenible y construir un buen gobierno.&quot;
        <span className="block text-right font-bold text-gray-600 mt-2">
          — Kofi Annan
        </span>
      </blockquote>
    </section>
  );
}
