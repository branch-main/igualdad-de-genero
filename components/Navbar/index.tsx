import Image from "next/image";
import Link from "next/link";

import igualdadDeGenero from "@/app/images/igualdad-de-genero.jpeg";

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={igualdadDeGenero} alt="Logo" width={50} />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <Link href="/" className="px-3">
              Inicio
            </Link>
            <Link href="/" className="px-3">
              Blog
            </Link>
            <Link href="/team" className="px-3">
              Equipo
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
