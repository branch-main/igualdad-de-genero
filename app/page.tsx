import Hero from "@/components/Hero";
import Chart from "@/components/Chart";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <section
        id="introduction"
        className="pt-5 mx-5 sm:mx-10 flex flex-col gap-5"
      >
        <h2 className="font-bold text-4xl">Introducción</h2>
        La igualdad de género es un principio fundamental para lograr una
        sociedad justa y equitativa. A lo largo de la historia, diversos
        movimientos y eventos han marcado hitos importantes en la lucha por la
        igualdad de derechos entre hombres y mujeres. A continuación,
        exploraremos algunos de estos eventos históricos clave.
      </section>
      <section className="pt-5 mx-5 sm:mx-10 flex flex-col gap-5">
        <h2 className="font-bold text-4xl">Información cuantitativa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
          <div>
            <h3 className="mx-auto font-bold text-2xl">
              Avances y Desafíos en la Igualdad de Género a Nivel Global
            </h3>
            <br />
            <ul className="flex flex-col gap-2">
              <li>
                <strong>Matrícula Escolar:</strong> A nivel mundial, la tasa de
                matriculación primaria para niñas alcanzó el 91% en 2022, en
                comparación con el 93% de los niños. En educación secundaria, el
                77% de las niñas están matriculadas frente al 81% de los niños.
              </li>
              <li>
                <strong>Alfabetización:</strong> La tasa de alfabetización
                femenina ha aumentado del 76% en 1990 al 83% en 2022. En
                regiones como el sur de Asia y África Subsahariana, las tasas de
                alfabetización femenina son menores.
              </li>
              <li>
                <strong>Participación Laboral:</strong> En 2023, la tasa de
                participación laboral de las mujeres globalmente fue del 47%, en
                comparación con el 74% de los hombres.
              </li>
              <li>
                <strong>Brecha Salarial:</strong> Las mujeres ganan, en
                promedio, un 20% menos que los hombres. En países de altos
                ingresos, esta brecha se reduce al 16%.
              </li>
              <li>
                <strong>Parlamentos:</strong> A nivel mundial, las mujeres
                ocupan el 26% de los escaños en parlamentos nacionales, un
                aumento desde el 11% en 1995.
              </li>
              <li>
                <strong>Cargos Ejecutivos:</strong> En 2023, las mujeres
                representaban el 29% de los puestos ejecutivos en empresas del
                Fortune 500.
              </li>
              <li>
                <strong>Prevalencia:</strong> Se estima que 1 de cada 3 mujeres
                en el mundo ha experimentado violencia física o sexual en algún
                momento de su vida.
              </li>
              <li>
                <strong>Leyes y Protección:</strong> El 95% de los países tienen
                leyes que prohíben la violencia doméstica, pero solo el 60% de
                las mujeres afectadas buscan ayuda.
              </li>
              <li>
                <strong>Acceso a Servicios:</strong> El 74% de las mujeres en
                edad reproductiva tienen acceso a servicios de planificación
                familiar.
              </li>
              <li>
                <strong>Mortalidad Materna:</strong> La tasa de mortalidad
                materna global ha disminuido a 152 por cada 100,000 nacidos
                vivos en 2022.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-2xl">
              Estado Actual de la Igualdad de Género en América Latina y el
              Caribe
            </h3>
            <br />
            <ul className="flex flex-col gap-2">
              <li>
                <strong>Matrícula Escolar:</strong> En ALC, la tasa de
                matriculación primaria para niñas alcanzó el 98% en 2022.
              </li>
              <li>
                <strong>Deserción Escolar:</strong> La tasa de deserción escolar
                entre las niñas es del 8%, menor que el 10% de los niños, pero
                en Guatemala alcanza el 15%.
              </li>
              <li>
                <strong>Tasa de Empleo:</strong> La tasa de empleo femenino en
                ALC es del 54%, comparada con el 72% de los hombres.
              </li>
              <li>
                <strong>Brecha Salarial:</strong> Las mujeres en ALC ganan, en
                promedio, un 16% menos que los hombres.
              </li>
              <li>
                <strong>Parlamentos:</strong> En 2023, las mujeres ocupaban el
                25% de los escaños en parlamentos nacionales de ALC.
              </li>
              <li>
                <strong>Cargos Ejecutivos:</strong> Solo el 20% de los cargos
                directivos en las principales empresas de ALC están ocupados por
                mujeres.
              </li>
              <li>
                <strong>Prevalencia:</strong> En ALC, 1 de cada 4 mujeres ha
                sufrido violencia física o sexual a lo largo de su vida.
              </li>
              <li>
                <strong>Femicidios:</strong> La tasa de femicidios en ALC es de
                3 por cada 100,000 mujeres, siendo El Salvador el país con la
                tasa más alta (10 por cada 100,000).
              </li>
              <li>
                <strong>Acceso a Servicios de Salud:</strong> El 85% de las
                mujeres en ALC tienen acceso a servicios de salud reproductiva.
              </li>
              <li>
                <strong>Tasa de Mortalidad Materna:</strong> La tasa de
                mortalidad materna en ALC ha disminuido a 68 por 100,000 nacidos
                vivos en 2022.
              </li>
              <li>
                <strong>Educación STEM:</strong> Solo el 30% de las estudiantes
                en ALC se matriculan en carreras de Ciencia, Tecnología,
                Ingeniería y Matemáticas (STEM).
              </li>
              <li>
                <strong>Investigación y Desarrollo:</strong> Las mujeres
                representan solo el 25% de los investigadores en ALC.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-5 mx-5 sm:mx-10 flex flex-col gap-5">
        <h2 className="font-bold text-4xl">Información cuantitativa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
          <div className="flex flex-col gap-3">
            <p>
              <strong>Percepción de Roles de Género:</strong> Muchas personas
              creen que los roles de género tradicionales siguen limitando las
              oportunidades de hombres y mujeres. Por ejemplo, algunas mujeres
              mencionan sentirse presionadas a asumir roles de cuidado, mientras
              que los hombres sienten que se les exige actuar de manera
              &quot;fuerte&quot; y &quot;proveedora&quot;.
            </p>
            <p>
              <strong>Experiencias en el Ámbito Laboral:</strong> Varios
              testimonios reflejan que las mujeres enfrentan obstáculos para
              ascender en sus carreras, mientras que los hombres reciben
              promociones más rápidamente, incluso cuando la experiencia y las
              habilidades son similares.
            </p>
            <p>
              <strong>Impacto en la Educación:</strong> Personas de diferentes
              contextos indican que las expectativas de género afectan las
              oportunidades educativas, limitando las aspiraciones de muchas
              niñas hacia áreas como ciencia o tecnología, mientras que a los
              niños se les desanima de seguir carreras en áreas de cuidado y
              arte.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p>
              <strong>Opiniones sobre Políticas de Equidad:</strong> Algunos
              creen que las políticas de igualdad de género son necesarias y
              efectivas, mientras que otros consideran que pueden ser
              insuficientes o incluso generar tensiones. Las experiencias varían
              dependiendo de la región y la implementación de estas políticas.
            </p>
            <p>
              <strong>Experiencias de Violencia de Género:</strong> Existen
              testimonios de personas que han experimentado o presenciado
              discriminación y violencia de género en sus comunidades. Muchas
              mencionan la importancia de campañas de sensibilización y de apoyo
              para cambiar estas conductas y reducir la violencia.
            </p>
            <p>
              <strong>Igualdad en el Hogar:</strong> Algunas personas opinan que
              la igualdad de género también debe reflejarse en las tareas del
              hogar y la crianza. Sin embargo, muchas mujeres aún reportan
              cargar con la mayor parte de estas responsabilidades, lo que
              afecta su tiempo personal y laboral.
            </p>
          </div>
        </div>
      </section>
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
            Nuestro objetivo es recopilar datos significativos sobre la igualdad
            de género en el instituto y contribuir al cumplimiento del ODS
            (Objetivo de Desarrollo Sostenible) relacionado con la igualdad de
            género. Con esta información, buscamos desarrollar soluciones
            inclusivas que beneficien a toda la comunidad. Para ello, hemos
            diseñado una encuesta que abarca las siguientes preguntas:
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
            <Chart
              text="¿Consideras que el instituto realiza suficientes campañas o actividades de concienciación sobre la igualdad de género?"
              labels={["Sí", "No"]}
              series={[7, 11]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
