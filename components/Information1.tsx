import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaChartBar,
  FaMoneyBillWave,
  FaLandmark,
  FaHandHoldingHeart,
} from "react-icons/fa";

const dataGlobal = [
  {
    title: "Matrícula Escolar",
    description:
      "La tasa de matriculación primaria para niñas alcanzó el 91% en 2022, en comparación con el 93% de los niños.",
    value: 91,
    icon: <FaGraduationCap />,
  },
  {
    title: "Alfabetización",
    description:
      "La tasa de alfabetización femenina ha aumentado del 76% en 1990 al 83% en 2022.",
    value: 83,
    icon: <FaUsers />,
  },
  {
    title: "Participación Laboral",
    description:
      "En 2023, la tasa de participación laboral de las mujeres globalmente fue del 47%, en comparación con el 74% de los hombres.",
    value: 47,
    icon: <FaChartBar />,
  },
  {
    title: "Brecha Salarial",

    description:
      "Las mujeres ganan, en promedio, un 20% menos que los hombres.",
    value: 20,
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Parlamentos",
    description:
      "Las mujeres ocupan el 26% de los escaños en parlamentos nacionales, un aumento desde el 11% en 1995.",
    value: 26,
    icon: <FaLandmark />,
  },
];

const dataALC = [
  {
    title: "Matrícula Escolar",
    description:
      "En ALC, la tasa de matriculación primaria para niñas alcanzó el 98% en 2022.",
    value: 98,
    icon: <FaGraduationCap />,
  },
  {
    title: "Deserción Escolar",
    description:
      "La tasa de deserción escolar entre las niñas es del 8%, menor que el 10% de los niños.",
    value: 8,
    icon: <FaUsers />,
  },
  {
    title: "Tasa de Empleo",
    description:
      "La tasa de empleo femenino en ALC es del 54%, comparada con el 72% de los hombres.",
    value: 54,
    icon: <FaChartBar />,
  },
  {
    title: "Brecha Salarial",
    description:
      "Las mujeres en ALC ganan, en promedio, un 16% menos que los hombres.",
    value: 16,
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Femicidios",
    description:
      "La tasa de femicidios en ALC es de 3 por cada 100,000 mujeres, siendo El Salvador el país con la tasa más alta.",
    value: 3,
    icon: <FaHandHoldingHeart />,
  },
];

const InfoSection: React.FC<{ title: string; data: any[] }> = ({
  title,
  data,
}) => {
  return (
    <section className="py-10 px-5 sm:px-10">
      <h2 className="font-extrabold text-4xl sm:text-5xl text-black mb-10 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
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

            <div className="mb-4">
              {/* Gráfico de barra */}
              <div className="w-full bg-[#fe9093] rounded-full h-2.5">
                <div
                  className={`h-2.5 bg-red-500 rounded-full`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm pt-3">{item.description}</p>
            </div>

            <div className="text-2xl font-semibold text-gray-800">
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const QuantitativeInfo: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center flex-col">
      <InfoSection
        title="Avances y Desafíos en la Igualdad de Género a Nivel Global"
        data={dataGlobal}
      />
      <InfoSection
        title="Estado Actual de la Igualdad de Género en América Latina y el Caribe"
        data={dataALC}
      />
    </div>
  );
};

export default QuantitativeInfo;
