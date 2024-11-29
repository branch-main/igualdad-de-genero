export default function Advertising() {
  return (
    <section className="py-12 px-5 sm:px-10 flex flex-col items-center bg-gradient-to-r from-red-800 to-red-500 mb-20">
      <div className="max-w-[800px]">
        <div className="flex flex-col">
          <h2 className="font-bold text-4xl text-center text-white mb-6">
            Video Publicitario
          </h2>
          <p className="text-gray-200 mb-6 text-xl text-center">
            Estamos construyendo un futuro más equitativo en Tecsup. Sé parte
            del cambio y acompáñanos en este camino hacia la igualdad.
          </p>
        </div>
        <div className="w-[80%] mx-auto pt-5">
          <iframe
            width="270"
            height="480"
            className="aspect-[9/16] mx-auto rounded-lg shadow-2xl"
            src="https://drive.google.com/file/d/1mVvjCoYOO1thVui3adRsjG6gQottRezg/preview"
            title="Focus Group Video"
          />
        </div>
      </div>
    </section>
  );
}
