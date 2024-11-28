import React from "react";
import {
  FaUsers,
  FaBriefcase,
  FaBook,
  FaRegEdit,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";

const perceptionsData = [
  {
    title: "Roles de Género",
    description:
      "Las expectativas de género limitan las oportunidades, especialmente en roles de cuidado para mujeres y en el rol de proveedor para hombres.",
    icon: <FaUsers />,
  },
  {
    title: "Ámbito Laboral",
    description:
      "Las mujeres enfrentan obstáculos para ascender, mientras que los hombres reciben promociones más rápidamente, a pesar de experiencias similares.",
    icon: <FaBriefcase />,
  },
  {
    title: "Educación",
    description:
      "Las niñas son desalentadas de carreras en ciencia o tecnología, mientras que los niños no siguen áreas de cuidado o arte.",
    icon: <FaBook />,
  },
  {
    title: "Políticas de Equidad",
    description:
      "Algunos consideran que las políticas de igualdad son necesarias, pero otros creen que son insuficientes o incluso generan tensiones.",
    icon: <FaRegEdit />,
  },
  {
    title: "Violencia de Género",
    description:
      "La violencia de género sigue presente. Se requiere un cambio cultural y más campañas de sensibilización para reducirla.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Igualdad en el Hogar",
    description:
      "Aunque se promueve la igualdad de género, las mujeres siguen asumiendo la mayoría de las responsabilidades domésticas.",
    icon: <FaHandsHelping />,
  },
];

const GenderPerceptionInfo: React.FC = () => {
  return (
    <section className="px-5 sm:px-10 mx-auto max-w-6xl mb-20">
      <h2 className="font-extrabold text-4xl max-w-3xl mx-auto text-black mb-12 text-center">
        Percepciones Clave sobre la Igualdad de Género
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {perceptionsData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:bg-red-100 transform transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl text-red-500 mr-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenderPerceptionInfo;
