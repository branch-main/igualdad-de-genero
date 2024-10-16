import Image from "next/image";

import igualdadDeGenero from "@/app/images/igualdad-de-genero.jpeg";

export default function Hero() {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-5xl text-red-500 font-bold">Promoviendo una ODS:</h1>
      <h1 className="text-5xl text-red-500 font-bold mt-1">
        Igualdad de Género
      </h1>
      <p className="text-3xl font-light text-gray-500 tracking-widest mt-5">
        Aplicada en Tecsup
      </p>
      <div className="flex flex-row gap-16 mx-48 mt-16">
        <Image src={igualdadDeGenero} alt="Igualdad de género" />
        <div className="text-left flex flex-col">
          <h2 className="font-bold text-4xl text-black">Introducción</h2>
          <p className="font-medium text-lg mt-5">
            La igualdad de género es un principio fundamental para lograr una
            sociedad justa y equitativa. A lo largo de la historia, diversos
            movimientos y eventos han marcado hitos importantes en la lucha por
            la igualdad de derechos entre hombres y mujeres. A continuación,
            exploraremos algunos de estos eventos históricos clave.
          </p>
        </div>
      </div>
    </div>
  );
}
