"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";

interface BlogPost {
  titulo: string;
  autor: string;
  resumen: string;
  contenido: string;
}

const blogs: BlogPost[] = [
  {
    titulo: "Cambiando Estereotipos",
    autor: "Ana Torres",
    resumen:
      "Ana Torres, como educadora, lidera talleres en comunidades rurales para cambiar la mentalidad sobre los roles de género. Uno de los momentos más impactantes fue cuando una joven decidió estudiar biología tras ver ejemplos de mujeres científicas.",
    contenido:
      "Como educadora, siempre he creído que la educación es la herramienta más poderosa para cambiar el mundo. En mi trabajo liderando talleres en comunidades rurales, me he encontrado con muchos adolescentes que tienen sueños y metas, pero que a menudo se ven limitados por los roles de género impuestos por la sociedad. Durante nuestros talleres, hablamos sobre cómo los estereotipos de género pueden influir en las decisiones de carrera, en los intereses y en la vida cotidiana. Nos centramos especialmente en mostrar ejemplos de mujeres que han roto barreras en campos como la ciencia, la tecnología y la política, áreas que muchas veces parecen estar reservadas solo para hombres. Un momento que recuerdo con especial cariño fue cuando una joven, que nunca había considerado una carrera científica, se acercó después del taller para decirme que quería estudiar biología. Me dijo que nunca pensó que las mujeres podían tener éxito en ese campo hasta que escuchó sobre algunas científicas famosas. Ver cómo cambiaba su perspectiva en ese momento fue uno de los momentos más gratificantes de mi vida. Estos talleres no solo están abriendo puertas para las jóvenes de nuestra comunidad, sino que también están cambiando mentalidades, y eso, para mí, es el verdadero cambio.",
  },
  {
    titulo: "Mundo Igualitario",
    autor: "Javier Morales",
    resumen:
      "Javier Morales comparte su experiencia trabajando en una ONG que promueve la inclusión de mujeres en sectores dominados por hombres, como la tecnología y la construcción. Destaca la historia de Laura, una joven carpintera que logró ser reconocida a nivel internacional.",
    contenido:
      "Mi involucramiento en una ONG que promueve la inclusión de mujeres en sectores tradicionalmente dominados por hombres, como la tecnología y la construcción, ha sido una experiencia muy reveladora. Al principio, me sentí un poco fuera de lugar, ya que no era algo que hubiera considerado antes, pero pronto me di cuenta de lo esencial que es apoyar a las mujeres en estos campos. Uno de los momentos más significativos para mí fue cuando conocí a Laura, una joven carpintera que había estado trabajando en el sector durante años pero no tenía la oportunidad de mostrar su trabajo fuera de su comunidad. A través de la ONG, le ayudamos a preparar una presentación para una feria internacional de construcción. Aunque Laura estaba nerviosa y dudaba de sus habilidades, le proporcionamos el apoyo necesario para que pudiera mostrar su increíble trabajo. Cuando se presentó en la feria, fue una de las participantes más aclamadas. Su historia resonó en todos los asistentes, y al final del evento, varias empresas de construcción se acercaron para ofrecerle oportunidades de trabajo. Este tipo de experiencia demuestra el poder de dar visibilidad a las mujeres en sectores donde su presencia es escasa. A través de la inclusión y la visibilidad, no solo estamos promoviendo la igualdad de género, sino que también estamos abriendo puertas para que las mujeres demuestren lo que realmente pueden lograr.",
  },
  {
    titulo: "Voces sin Barreras",
    autor: "Laura Sandoval",

    resumen:
      "Laura Sandoval organiza un club de lectura feminista donde las participantes son inspiradas a iniciar proyectos propios. Relata cómo la lectura de 'El segundo sexo' de Simone de Beauvoir impactó en su comunidad.",
    contenido:
      "Desde que comencé a organizar un club de lectura feminista en mi comunidad, he sido testigo de cómo los libros tienen el poder de cambiar la forma en que las personas ven el mundo. En nuestras reuniones, discutimos historias de autoras que han cuestionado los estereotipos de género, las normas sociales y las estructuras de poder. Lo que más me emociona es ver cómo las mujeres que asisten al club se sienten inspiradas a iniciar proyectos propios, desde pequeñas iniciativas de emprendimiento hasta organizaciones que abogan por los derechos de las mujeres en su comunidad. Una de las historias que más impactó a nuestras miembros fue la de Simone de Beauvoir y su obra 'El segundo sexo'. Después de leer el libro, muchas comenzaron a cuestionarse sobre sus propios roles en la sociedad y cómo sus vidas habían sido influenciadas por expectativas externas. Algunas de las participantes, que antes pensaban que sus únicas opciones eran trabajos tradicionalmente femeninos, comenzaron a explorar nuevas posibilidades de carrera. Ver cómo la literatura puede ser una herramienta de liberación es una experiencia que nunca imaginé que viviría. La igualdad de género no solo se logra con leyes, sino también con cambios culturales profundos que empiezan en nuestras mentes y corazones.",
  },
  {
    titulo: "Puentes de Igualdad",
    autor: "Pedro García",
    resumen:
      "Pedro García reflexiona sobre cómo compartir las tareas domésticas en su hogar con su pareja contribuyó a cambiar las mentalidades sobre roles de género en su comunidad.",
    contenido:
      "Decidí involucrarme en las tareas domésticas no solo porque mi pareja lo necesitaba, sino porque creía firmemente que si quería promover la igualdad de género, debía comenzar por mi propio hogar. Al principio, me costó un poco, ya que, como muchos, estaba acostumbrado a que las responsabilidades domésticas recayeran principalmente sobre mi pareja. Sin embargo, a medida que comencé a compartir estas responsabilidades, no solo descubrí lo mucho que mi pareja hacía, sino también cómo esto mejoraba nuestra relación y, sobre todo, cómo afectaba positivamente a nuestros hijos. Mis hijos, al vernos compartir las tareas del hogar de manera equitativa, empezaron a comprender que el trabajo doméstico no tiene que ser asignado a un solo género. Cuando les pregunté qué pensaban sobre los roles de género en la familia, uno de ellos me dijo: 'Papá, tú y mamá hacen lo mismo, no hay diferencia'. Ese comentario me hizo darme cuenta de que estábamos haciendo un buen trabajo. Este cambio en nuestra casa ha tenido un impacto en la comunidad en la que vivimos, ya que amigos y vecinos han comenzado a preguntarnos cómo podemos ser tan equilibrados en el hogar. La corresponsabilidad no solo cambia familias, cambia comunidades, y esa es la verdadera fuerza del cambio.",
  },
  {
    titulo: "Ella Puede",
    autor: "Mariana Rojas",
    resumen:
      "Mariana Rojas organiza un hackatón solo para mujeres, donde las participantes aprendieron a programar y crearon aplicaciones tecnológicas. El evento empoderó a muchas a iniciar sus propios proyectos.",
    contenido:
      "Recuerdo el día que decidí organizar un hackatón solo para mujeres. Fue un desafío, ya que muchas de las participantes no tenían experiencia previa en programación, pero estaban dispuestas a aprender. Durante los tres días del evento, trabajamos en equipo, les enseñamos habilidades de codificación, pero también les hablamos sobre cómo podían utilizar la tecnología para resolver problemas reales en sus comunidades. Fue increíble ver cómo muchas de ellas, que al principio no creían que pudieran hacerlo, terminaron creando aplicaciones funcionales que resuelven desde problemas de salud hasta necesidades educativas. Lo más impresionante fue cómo la confianza de cada una aumentó a medida que avanzaba el evento. El miedo al fracaso desapareció, y en su lugar, surgió una sensación de empoderamiento. Después del hackatón, varias de las participantes iniciaron sus propios proyectos tecnológicos y algunas incluso fueron reconocidas por empresas de tecnología. Para mí, este evento no solo fue sobre enseñar a programar, sino sobre romper las barreras que las mujeres enfrentan en la tecnología y empoderarlas para que se conviertan en líderes de este campo.",
  },
  {
    titulo: "Igualdad en el Campo",
    autor: "Roberto Esteban",
    resumen:
      "Roberto Esteban cuenta cómo trabajar con mujeres campesinas para mejorar técnicas agrícolas y acceso a mercados ha transformado sus vidas, permitiéndoles liderar en sus comunidades.",
    contenido:
      "Trabajar con mujeres campesinas ha sido una experiencia reveladora y transformadora. Muchas de ellas, antes de recibir capacitación técnica, se veían a sí mismas como parte de un sistema agrícola tradicional donde las oportunidades eran limitadas y las decisiones eran tomadas por los hombres. Sin embargo, al introducirlas en nuevas técnicas de cultivo y gestión agrícola, vi cómo su confianza crecía. Una de las historias que más me impactó fue la de Margarita, una mujer campesina que, tras aprender sobre técnicas avanzadas de cultivo y acceso a mercados más grandes, logró triplicar la producción de su finca. Lo más impresionante no solo fue el aumento en la productividad, sino cómo Margarita y otras mujeres comenzaron a compartir sus conocimientos con otras en sus comunidades. De ser trabajadoras invisibles, pasaron a ser líderes que inspiraban a otras mujeres a buscar la independencia económica a través del agro. Esta experiencia me ha demostrado que la igualdad de género no solo es un tema urbano, sino también fundamental en el campo, donde las mujeres pueden ser agentes de cambio económico y social.",
  },
  {
    titulo: "Perspectivas Globales",
    autor: "Sofía Martínez",
    resumen:
      "Sofía Martínez reflexiona sobre su participación en foros internacionales donde apoyó la creación de becas para niñas y presentó datos sobre cómo la educación impacta en el desarrollo económico y social.",
    contenido:
      "Representar a jóvenes líderes en foros internacionales sobre igualdad de género ha sido una de las experiencias más enriquecedoras y educativas de mi vida. En estos espacios, he tenido la oportunidad de discutir temas clave sobre cómo las políticas públicas pueden garantizar que las niñas en regiones desfavorecidas tengan acceso a una educación de calidad. Durante uno de los foros, conocí a una joven activista de África que lidera proyectos educativos para niñas desplazadas por conflictos bélicos. Su historia me conmovió profundamente y me hizo darme cuenta de la gran brecha que aún existe entre los derechos educativos de niñas en diferentes partes del mundo. Una de las iniciativas que apoyamos fue la creación de becas para niñas en comunidades vulnerables, lo que les permitió no solo acceder a la educación sino también a talleres de liderazgo. Durante el evento, tuve la oportunidad de presentar datos sobre cómo la educación de las mujeres tiene un impacto directo en el desarrollo económico y social de los países, y cómo, al empoderarlas, estamos generando una cadena de cambios positivos. La igualdad de género y la educación son un par de herramientas imprescindibles para erradicar la pobreza y fomentar sociedades más justas.",
  },
  {
    titulo: "Rompiendo Esquemas",
    autor: "Diego Fernández",
    resumen:
      "Diego Fernández enseña robótica a niñas de comunidades marginadas, empoderándolas para diseñar soluciones tecnológicas a problemas locales como el acceso al agua.",
    contenido:
      "Enseñar robótica a niñas en comunidades marginadas ha sido un desafío, pero también una experiencia increíblemente gratificante. La mayoría de ellas no tenía acceso a tecnología avanzada, y muchas veces pensaban que la tecnología era solo para hombres. Decidí organizar talleres en los que, además de enseñarles a programar y construir robots, trabajé con ellas en temas de autoconfianza y liderazgo. Al principio, muchas de las niñas dudaban de su capacidad, pero a medida que avanzábamos, comenzaron a disfrutar del proceso y a desarrollar ideas innovadoras. Una de las experiencias más emotivas fue cuando un grupo de niñas diseñó un robot para ayudar a recolectar agua en su comunidad, donde el acceso al agua es limitado. Presentaron su proyecto en una feria local y fueron reconocidas por su creatividad. Este tipo de logros demuestra que las niñas tienen un potencial increíble cuando se les dan las herramientas y el espacio para desarrollarse. Al final, no solo les enseñamos tecnología, sino que les mostramos que no hay límites para lo que pueden lograr. La robótica es solo una de las formas en que las niñas pueden desafiar los roles de género y empoderarse.",
  },
  {
    titulo: "Iguales por Derecho",
    autor: "Carla Gómez",
    resumen:
      "Carla Gómez utiliza el arte para promover la igualdad de género en su comunidad, pintando murales que visibilizan la lucha por la igualdad y fomentan el diálogo sobre el tema.",
    contenido:
      "El arte siempre ha sido una forma poderosa de expresión, y cuando decidí utilizarlo para promover la igualdad de género, nunca imaginé cuán profundo sería el impacto. Junto con un grupo de mujeres y hombres de mi comunidad, pintamos murales en espacios públicos que cuentan historias de lucha por la igualdad. Cada mural tiene un mensaje claro: la igualdad de género no es una cuestión de derechos, sino de justicia. A través de cada pincelada, tratamos de visibilizar la lucha de muchas mujeres que han sido silenciadas por años, pero también mostrar los logros que hemos alcanzado juntas. Lo más hermoso de este proyecto ha sido ver cómo las personas de la comunidad, al pasar por estos murales, se sienten inspiradas a hablar más abiertamente sobre los temas de género. Muchos de ellos me han contado que el arte les hizo reflexionar sobre cómo las normas sociales han influido en sus vidas y relaciones. No solo pintamos muros, sino que estamos construyendo un espacio donde el diálogo sobre la igualdad se da de manera más abierta. El arte es una herramienta poderosa para cambiar mentes y corazones, y estoy convencida de que estos murales seguirán inspirando a futuras generaciones.",
  },
];

export default function Blogs() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(blogs[0]);

  const handleModalOpen = (post: BlogPost) => {
    setModalContent(post);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <section className="px-6 sm:px-12 pt-[120px] py-10 mb-12">
      <h2 className="container text-4xl font-extrabold text-center mb-4">
        Blogs y experiencias
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
        Esta sección comparte historias inspiradoras sobre cómo romper los
        estereotipos de género y promover la igualdad a través de la educación,
        el empoderamiento y la visibilidad en diversos campos, demostrando el
        impacto positivo de estas acciones en las comunidades.
      </p>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:bg-red-100 transform transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-red-600">
              {blog.titulo}
            </h3>
            <p className="text-gray-500 text-sm mt-2">Por {blog.autor}</p>

            <p className="text-gray-700 mt-4">{blog.resumen}</p>
            <button
              onClick={() => handleModalOpen(blog)}
              className="text-red-500 hover:text-red-700 font-semibold mt-4 inline-block"
            >
              Leer más
            </button>
          </div>
        ))}
      </div>

      <Modal show={modalOpen} onClose={handleModalClose}>
        <Modal.Header>
          <p className="text-red-600">{modalContent.titulo}</p>
        </Modal.Header>
        <Modal.Body>
          <p className="text-gray-500 text-sm mb-6">
            Por <span className="font-extrabold">{modalContent.autor}</span>
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            {modalContent.contenido}
          </p>
        </Modal.Body>
      </Modal>
    </section>
  );
}
