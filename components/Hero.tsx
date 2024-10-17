"use client";

import Image from "next/image";
import hero from "@/app/images/hero.png";

export default function Hero() {
  function handleClick() {
    const section = document.getElementById("introduction");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center mx-5 gap-16 sm:gap-10 mt-10 sm:mt-20 mb-5 sm:mx-20">
      <div className="sm:w-1/2 flex flex-col gap-10 sm:gap-5 items-center sm:items-start text-center sm:text-left">
        <h1 className="font-bold text-6xl sm:leading-normal">
          <span className="text-red-500">Igualdad de género</span> en Tecsup
        </h1>
        <p className="font-medium text-gray-600 text-xl max-w-[80%]">
          &quot;La igualdad de género es clave para construir una sociedad justa
          y equilibrada&quot;
        </p>
        <button
          className="bg-red-500 sm:mt-5 py-2 px-5 font-bold text-white fonttext-xl rounded-lg hover:bg-red-700 transition-colors w-fit"
          onClick={handleClick}
        >
          Conocer más
        </button>
      </div>
      <Image className="sm:w-1/2" src={hero} alt="Igualdad de género" />
    </div>
  );
}
