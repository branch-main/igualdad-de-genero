import Image from "next/image";

import igualdadDeGenero from "@/app/images/igualdad-de-genero.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col mt-10 text-center px-5">
      <h1 className="text-5xl text-red-500 font-bold">Promoviendo una ODS:</h1>
      <h1 className="text-5xl text-red-500 font-bold mt-1">
        Igualdad de Género
      </h1>
      <p className="text-3xl font-light text-gray-500 tracking-widest mt-5">
        Aplicada en Tecsup
      </p>
      <div className="flex flex-col sm:flex-row gap-16 items-center justify-center mt-16">
        <Image src={igualdadDeGenero} alt="Igualdad de género" />
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-left font-medium text-3xl mt-5 sm:w-[500px]">
            &quot;La igualdad de género es clave para construir una sociedad
            justa y equilibrada.&quot;
          </p>
          <Link
            href="#introduction"
            className="bg-red-500 mt-6 py-2 px-5 font-bold text-white fonttext-xl rounded-lg hover:bg-transparent hover:text-black border-2 border-red-500 transition-all w-fit scroll-smooth"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
}
