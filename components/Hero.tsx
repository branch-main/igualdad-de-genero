"use client";

import Image from "next/image";
import hero from "@/app/images/hero.png";

function scrollToElementWithOffset(id: string, offset: number) {
  const element = document.getElementById(id);
  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

export default function Hero() {
  function handleClick() {
    scrollToElementWithOffset("introduction", 120);
  }

  return (
    <section className="px-8 sm:px-14 sm:h-screen xl:h-auto bg-gradient-to-b from-red-100 pt-16">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 sm:h-full py-14">
        <div className="sm:w-1/2 flex flex-col gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left">
          <h1 className="font-extrabold text-6xl sm:text-7xl text-black">
            Igualdad de género en <span className="text-red-600">Tecsup</span>
          </h1>
          <p className="font-medium text-gray-500 text-xl max-w-2xl">
            La igualdad de género es esencial para construir una sociedad más
            justa y equilibrada. En Tecsup, estamos comprometidos con la
            equidad.
          </p>
          <button
            className="bg-red-600 py-3 px-6 font-medium text-white text-lg rounded-lg hover:bg-red-800 transition-colors mt-5 w-fit"
            onClick={handleClick}
          >
            Conocer más
          </button>
        </div>
        <Image className="sm:w-1/2" src={hero} alt="Igualdad de género" />
      </div>
    </section>
  );
}
