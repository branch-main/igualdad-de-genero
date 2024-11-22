import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-500 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          © 2024 IgualdadDeGenero. Todos los derechos reservados.
        </p>
        <ul className="flex space-x-6 mb-4 sm:mb-0">
          <li>
            <a
              href="#"
              className="text-sm hover:text-red-300 transition duration-300 ease-in-out"
            >
              Política de Privacidad
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:text-red-300 transition duration-300 ease-in-out"
            >
              Términos del Servicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:text-red-300 transition duration-300 ease-in-out"
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-xl hover:text-red-300 transition duration-300 ease-in-out"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-xl hover:text-red-300 transition duration-300 ease-in-out"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-xl hover:text-red-300 transition duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-xl hover:text-red-300 transition duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
