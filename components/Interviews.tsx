import { Carousel } from "flowbite-react";

function CarouselVideo({ id }: { id: string }) {
  return (
    <iframe
      className="w-full aspect-video rounded-lg"
      src={`https://drive.google.com/file/d/${id}/preview`}
    />
  );
}

export default function Interviews() {
  return (
    <section className="mb-20">
      <div className="container mx-auto text-center px-6 sm:px-12">
        <h2 className="text-4xl font-extrabold mb-12">Entrevistas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          <Carousel
            className="w-full mx-auto aspect-video order-last sm:order-first"
            slide={false}
          >
            <CarouselVideo id="1NHnKjd41d0Lp55orvczfvBv-IN7W4vyS" />
            <CarouselVideo id="1NNWub1psimChpMr6FtlTIsm0gi2TwNHc" />
            <CarouselVideo id="1x4qFMxEqFQxMgo8sqNe58fwlx507_Vub" />
          </Carousel>
          <p className="text-gray-500 text-xl text-center sm:text-left">
            En TECSUP realizamos entrevistas a estudiantes para conocer sus
            perspectivas sobre la igualdad de género. Se abordaron temas como
            oportunidades, estereotipos y desafíos, con el objetivo de
            identificar problemas y generar propuestas inclusivas.
            <br />
            <br />
            Los resultados reflejaron avances y áreas pendientes, como la
            necesidad de mayor sensibilización y políticas inclusivas. Las ideas
            recopiladas serán clave para fortalecer la igualdad de género y
            cumplir con los objetivos del ODS 5.
          </p>
        </div>
      </div>
    </section>
  );
}
