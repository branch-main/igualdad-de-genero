import Image from "next/image";

import igualdadDeGenero from "./images/igualdad-de-genero.jpeg";
import graph1 from "./images/1.jpg";
import graph2 from "./images/2.jpg";
import graph3 from "./images/3.jpg";
import graph4 from "./images/4.jpg";
import graph5 from "./images/5.jpg";
import graph6 from "./images/6.jpg";
import graph7 from "./images/7.jpg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <main className="flex flex-col gap-20 row-start-2 text-center">
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-bold text-5xl text-red-500">
            Promoviendo una ODS:
          </h1>
          <h1 className="font-bold text-5xl text-red-500">
            Igualdad de Género
          </h1>
          <h2 className="font-light text-3xl text-gray-500 tracking-widest">
            Aplicada en Tecsup
          </h2>
        </div>
        <div className="flex flex-row gap-16 mx-48">
          <Image src={igualdadDeGenero} alt="igualdad de género" />
          <div className="text-left flex flex-col gap-5">
            <h2 className="font-bold text-4xl text-black">Introducción</h2>
            <p className="font-medium text-lg">
              La igualdad de género es un principio fundamental para lograr una
              sociedad justa y equitativa. A lo largo de la historia, diversos
              movimientos y eventos han marcado hitos importantes en la lucha
              por la igualdad de derechos entre hombres y mujeres. A
              continuación, exploraremos algunos de estos eventos históricos
              clave.
            </p>
          </div>
        </div>
        <section className="text-left mx-20 flex flex-col gap-5">
          <h2 className="font-bold text-4xl">Focus group</h2>
          <div className="grid grid-cols-2 gap-10">
            <p>
              Nuestro equipo ha llevado a cabo un focus group virtual con el
              objetivo de compartir y analizar experiencias relacionadas con la
              igualdad de género. En este espacio de diálogo, participaron 5
              personas, quienes aportaron sus perspectivas y vivencias sobre los
              retos y avances en torno a la equidad. Las discusiones giraron en
              torno a temas clave como la representación de género en el entorno
              laboral, la equidad en el hogar, y los estereotipos de género,
              permitiéndonos obtener una visión más clara de las barreras que
              aún existen y de las estrategias que pueden implementarse para
              promover un entorno más inclusivo y justo. Las ideas recopiladas
              servirán como base para futuras acciones orientadas a fomentar una
              igualdad de género real y sostenible.
            </p>
            <iframe
              className="aspect-video"
              src="https://drive.google.com/file/d/1i8KNOqxSidxJHwdlFPkUiNHT58nXpbY6/preview"
              width="600"
            />
          </div>
        </section>
        <section className="text-left mx-20 flex flex-col gap-5">
          <h2 className="font-bold text-4xl">Encuesta</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col items-start gap-5">
              <div>
                <b>Objetivo:</b> Obtener datos valiosos acerca de la igualdad de
                género en el instituto y apoyar a la ODS de la igualdad de
                género para poder buscar una solución que funcione para todos.
                <br />
                <br />
                Para lograr recopilar informacón hemos realizado una encuesta
                considerando las siguientes preguntas:
              </div>
              <div className="flex flex-col gap-6">
                <div className="font-bold">
                  ¿Consideras que en Tecsup se promueve la igualdad de género?
                </div>
                <div className="font-bold">
                  ¿Has presenciado o escuchado de situaciones de desigualdad de
                  género en el instituto?
                </div>
                <div className="font-bold">
                  ¿Sientes que tanto hombres como mujeres tienen las mismas
                  oportunidades para participar en actividades extracurriculares
                  o liderar proyectos en el instituto?
                </div>
                <div className="font-bold">
                  ¿Crees que el personal docente y administrativo del instituto
                  trata a los estudiantes por igual sin importar su género?
                </div>
                <div className="font-bold">
                  ¿Piensas que los materiales educativos (libros, videos,
                  ejemplos en clase) son inclusivos y promueven la igualdad de
                  género?
                </div>
                <div className="font-bold">
                  ¿Estás de acuerdo con que los reglamentos y políticas del
                  instituto favorecen la igualdad de género?
                </div>
                <div className="font-bold">
                  ¿Consideras que el instituto realiza suficientes campañas o
                  actividades de concienciación sobre la igualdad de género?
                </div>
                <div className="font-bold">
                  ¿Qué acciones crees que debería tomar el instituto para
                  promover la igualdad de género entre estudiantes y docentes?
                </div>
                <div className="font-bold">
                  ¿De qué manera crees que la educación en el instituto puede
                  influir en la igualdad de género fuera de las aulas?
                </div>
                <div className="font-bold">
                  ¿Qué propuestas harías para mejorar la sensibilización sobre
                  la igualdad de género en el instituto?
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-bold text-lg">Resultados de la encuesta:</h4>
              <div className="grid grid-cols-2 gap-5">
                <Image className="aspect-square" src={graph1} alt="Graph 1" />
                <Image className="aspect-square" src={graph2} alt="Graph 2" />
                <Image className="aspect-square" src={graph3} alt="Graph 3" />
                <Image className="aspect-square" src={graph4} alt="Graph 4" />
                <Image className="aspect-square" src={graph5} alt="Graph 5" />
                <Image className="aspect-square" src={graph6} alt="Graph 6" />
                <Image className="aspect-square" src={graph7} alt="Graph 7" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
