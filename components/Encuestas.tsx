import Chart from "./Chart";

export default function Encuestas() {
  return (
    <section className="py-10 mx-5 sm:mx-10">
      <h2 className="font-extrabold text-4xl sm:text-5xl text-center text-black mb-12">
        Resultados de nuestra encuesta
      </h2>
      <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            ¿Consideras que en Tecsup se promueve la igualdad de género?
          </h3>
          <Chart
            text="¿Consideras que en Tecsup se promueve la igualdad de género?"
            labels={["Sí", "No"]}
            series={[4, 14]}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            ¿Has presenciado o escuchado de situaciones de desigualdad de género
            en el instituto?
          </h3>
          <Chart
            text="¿Has presenciado o escuchado de situaciones de desigualdad de género en el instituto?"
            labels={["Sí", "No"]}
            series={[7, 10]}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            ¿Sientes que tanto hombres como mujeres tienen las mismas
            oportunidades para participar en actividades extracurriculares o
            liderar proyectos en el instituto?
          </h3>
          <Chart
            text="¿Sientes que tanto hombres como mujeres tienen las mismas oportunidades para participar en actividades extracurriculares o liderar proyectos en el instituto?"
            labels={["Sí", "No", "No estoy seguro/a"]}
            series={[11, 1, 6]}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            ¿Crees que el personal docente y administrativo del instituto trata
            a los estudiantes por igual sin importar su género?
          </h3>
          <Chart
            text="¿Crees que el personal docente y administrativo del instituto trata a los estudiantes por igual sin importar su género?"
            labels={["Sí", "No"]}
            series={[12, 6]}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            ¿Piensas que los materiales educativos (libros, videos, ejemplos en
            clase) son inclusivos y promueven la igualdad de género?
          </h3>
          <Chart
            text="¿Piensas que los materiales educativos (libros, videos, ejemplos en clase) son inclusivos y promueven la igualdad de género?"
            labels={["Sí", "No", "No estoy seguro/a"]}
            series={[8, 4, 6]}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            ¿Estás de acuerdo con que los reglamentos y políticas del instituto
            favorecen la igualdad de género?
          </h3>
          <Chart
            text="¿Estás de acuerdo con que los reglamentos y políticas del instituto favorecen la igualdad de género?"
            labels={[
              "Totalmente de acuerdo",
              "De acuerdo",
              "Ni de acuerdo ni en desacuerdo",
              "En desacuerdo",
              "Totalmente en desacuerdo",
            ]}
            series={[7, 4, 6, 0, 1]}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            ¿Consideras que el instituto realiza suficientes campañas o
            actividades de concienciación sobre la igualdad de género?
          </h3>
          <Chart
            text="¿Consideras que el instituto realiza suficientes campañas o actividades de concienciación sobre la igualdad de género?"
            labels={["Sí", "No"]}
            series={[7, 11]}
          />
        </div>
      </div>
    </section>
  );
}
