import Hero from "@/components/Hero";
import Chart from "@/components/Chart";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <section className="mx-5 sm:mx-10 flex flex-col gap-5">
        <h2 className="font-bold text-4xl">Focus group</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
          <p>
            Nuestro equipo ha llevado a cabo un focus group virtual con el
            objetivo de compartir y analizar experiencias relacionadas con la
            igualdad de género. En este espacio de diálogo, participaron 5
            personas, quienes aportaron sus perspectivas y vivencias sobre los
            retos y avances en torno a la equidad. Las discusiones giraron en
            torno a temas clave como la representación de género en el entorno
            laboral, la equidad en el hogar, y los estereotipos de género,
            permitiéndonos obtener una visión más clara de las barreras que aún
            existen y de las estrategias que pueden implementarse para promover
            un entorno más inclusivo y justo. Las ideas recopiladas servirán
            como base para futuras acciones orientadas a fomentar una igualdad
            de género real y sostenible.
          </p>
          <iframe
            className="aspect-video w-full"
            src="https://drive.google.com/file/d/1i8KNOqxSidxJHwdlFPkUiNHT58nXpbY6/preview"
          />
        </div>
      </section>
      <section className="mx-5 sm:mx-10 text-left flex flex-col gap-5">
        <h2 className="font-bold text-4xl">Encuesta</h2>
        <div className="flex flex-col items-start gap-5">
          <p>
            Nuestro objetivo con la es obtener datos valiosos acerca de la
            igualdad de género en el instituto y apoyar a la ODS de la igualdad
            de género para poder buscar una solución que funcione para todos.
            Para lograr recopilar información hemos realizado una encuesta
            considerando las siguientes preguntas:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Chart
              text="¿Consideras que en Tecsup se promueve la igualdad de género?"
              labels={["Sí", "No"]}
              series={[4, 14]}
            />
            <Chart
              text="¿Has presenciado o escuchado de situaciones de desigualdad de género en el instituto?"
              labels={["Sí", "No"]}
              series={[100, 50]}
            />
            <Chart
              text="¿Sientes que tanto hombres como mujeres tienen las mismas oportunidades para participar en actividades extracurriculares o liderar proyectos en el instituto?"
              labels={["Sí", "No", "No estoy seguro/a"]}
              series={[80, 70, 30]}
            />
            <Chart
              text="¿Crees que el personal docente y administrativo del instituto trata a los estudiantes por igual sin importar su género?"
              labels={["Sí", "No"]}
              series={[90, 60]}
            />
            <Chart
              text="¿Piensas que los materiales educativos (libros, videos, ejemplos en clase) son inclusivos y promueven la igualdad de género?"
              labels={["Sí", "No", "No estoy seguro/a"]}
              series={[85, 65, 20]}
            />
            <Chart
              text="¿Estás de acuerdo con que los reglamentos y políticas del instituto favorecen la igualdad de género?"
              labels={["Sí", "No", "No estoy seguro/a"]}
              series={[95, 55, 25]}
            />
            <Chart
              text="¿Consideras que el instituto realiza suficientes campañas o actividades de concienciación sobre la igualdad de género?"
              labels={["Sí", "No"]}
              series={[75, 85]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
