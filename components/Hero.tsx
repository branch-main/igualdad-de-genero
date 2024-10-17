import Image from "next/image";

import igualdadDeGenero from "@/app/images/aaa.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center mx-5 gap-10 mt-10 sm:mt-24 sm:mx-20">
      <Image
        className="sm:w-1/2"
        src={igualdadDeGenero}
        alt="Igualdad de género"
      />
      <div className="sm:w-1/2 flex flex-col gap-5 items-center sm:items-start text-center sm:text-left">
        <h1 className="font-bold text-6xl leading-normal">
          <span className="text-red-500">Igualdad de género</span> en Tecsup
        </h1>
        <p className="font-medium text-gray-600 text-xl max-w-[80%]">
          &quot;La igualdad de género es clave para construir una sociedad justa
          y equilibrada.&quot;
        </p>
        <Link
          href="#introduction"
          className="bg-red-500 sm:mt-5 py-2 px-5 font-bold text-white fonttext-xl rounded-lg hover:bg-red-400 transition-all w-fit"
        >
          Conocer más
        </Link>
      </div>
    </div>
  );
}
