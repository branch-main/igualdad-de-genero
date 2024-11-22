import Image from "next/image";

const teamMembers = [
  {
    name: "Alan Roncal",
    role: "Desarrollador Principal",
    description:
      "Alan es el encargado y supervisor del desarrollo de esta página.",
    image: "https://via.placeholder.com/150",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Carlos Cáceres",
    role: "Investigador",

    description:
      "Carlos se encarga de la recopilación e interpretación de datos de fuentes externas.",
    image: "https://via.placeholder.com/150",
    github: "#",

    linkedin: "#",
  },
  {
    name: "José Sánchez",
    role: "Investigador",
    description:
      "José es el encargado de gestionar las encuestas y entrevistas, recolecta información.",
    image: "https://via.placeholder.com/150",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Mauricio Sedano",
    role: "Diseñador UI/UX",
    description:
      "Mauricio se encarga de la interfaz de usuario para retener y llamar la atención del usuario.",
    image: "https://via.placeholder.com/150",
    github: "#",
    linkedin: "#",
  },
];

export default function Equipo() {
  return (
    <section className="py-10 bg-neutral-100 mt-32">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black">
          Conoce al Equipo
        </h2>

        <p className="mt-4 text-xl text-gray-600">
          Un grupo de profesionales comprometidos con la igualdad de género y la
          tecnología.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:bg-red-100 transform transition duration-300 ease-in-out"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-sm text-gray-600 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
