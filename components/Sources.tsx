export default function Fuentes() {
  const fuentes = [
    {
      nombre: "ONU Mujeres",
      descripcion:
        "Organización internacional que impulsa la igualdad de género y el empoderamiento de las mujeres.",
      enlace: "https://www.unwomen.org",
      icono: "🌍",
    },
    {
      nombre: "Instituto Europeo de Igualdad de Género (EIGE)",
      descripcion:
        "Proporciona datos y recursos para cerrar brechas de género en Europa.",
      enlace: "https://eige.europa.eu",
      icono: "📊",
    },
    {
      nombre: "Naciones Unidas - Igualdad de Género",
      descripcion:
        "Información sobre las iniciativas globales para alcanzar la igualdad de género como parte de los ODS.",
      enlace: "https://www.un.org/sustainabledevelopment/gender-equality/",
      icono: "🌐",
    },
    {
      nombre: "UNESCO - Igualdad de Género",
      descripcion:
        "Promueve la igualdad de género a través de la educación, la ciencia y la cultura.",
      enlace: "https://www.unesco.org/en/gender-equality",
      icono: "🎓",
    },
  ];

  return (
    <section className="px-6 sm:px-12 mb-20">
      <h2 className="text-4xl font-extrabold text-center mb-8">
        Nuestras Fuentes
      </h2>
      <div className="max-w-5xl mx-auto">
        <ul className="gap-6 grid sm:grid-cols-2">
          {fuentes.map((fuente, index) => (
            <li
              key={index}
              className="flex items-start hover:bg-red-100 hover:scale-105 transition-all space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <span className="text-3xl">{fuente.icono}</span>
              <div>
                <h3 className="text-lg font-semibold text-red-600">
                  {fuente.nombre}
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  {fuente.descripcion}
                </p>
                <a
                  href={fuente.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-700 font-semibold mt-2 inline-block"
                >
                  Leer más
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
