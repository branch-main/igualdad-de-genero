import Chart from "./Chart";

export default function Survey() {
  return (
    <section className="mx-5 sm:mx-10 mb-20">
      <h2 className="font-extrabold text-4xl text-center text-black mb-12">
        Resultados de nuestra encuesta
      </h2>
      <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <Chart
          text="¿Consideras que en Tecsup se promueve la igualdad de género?"
          labels={["Sí", "No"]}
          series={[4, 14]}
        />
        <Chart
          text="¿Has presenciado o escuchado de situaciones de desigualdad de género en el instituto?"
          labels={["Sí", "No"]}
          series={[7, 10]}
        />
        <Chart
          text="¿Sientes que tanto hombres como mujeres tienen las mismas oportunidades para participar en actividades extracurriculares o liderar proyectos en el instituto?"
          labels={["Sí", "No", "No estoy seguro/a"]}
          series={[11, 1, 6]}
        />
        <Chart
          text="¿Crees que el personal docente y administrativo del instituto trata a los estudiantes por igual sin importar su género?"
          labels={["Sí", "No"]}
          series={[12, 6]}
        />
        <Chart
          text="¿Piensas que los materiales educativos (libros, videos, ejemplos en clase) son inclusivos y promueven la igualdad de género?"
          labels={["Sí", "No", "No estoy seguro/a"]}
          series={[8, 4, 6]}
        />
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
    </section>
  );
}
