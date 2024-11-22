export default function FocusGroup() {
  return (
    <section className="py-10 px-5 sm:px-10 flex flex-col items-center bg-gradient-to-r from-red-800 to-red-500 mt-20">
      <div className="max-w-[800px]">
        <div className="flex flex-col">
          <h2 className="font-bold text-5xl text-center text-white mb-6">
            Vide Publicitario
          </h2>
          <p className="text-gray-200 mb-6 text-xl text-center">
            Un video breve que muestra momentos de equidad con el mensaje:
            &quot;La igualdad es el camino&quot;.
          </p>
        </div>
        <div className="w-[80%] mx-auto pt-5">
          <iframe
            className="w-full aspect-video rounded-lg shadow-2xl"
            src="https://drive.google.com/file/d/1i8KNOqxSidxJHwdlFPkUiNHT58nXpbY6/preview"
            title="Focus Group Video"
          />
        </div>
      </div>
    </section>
  );
}
