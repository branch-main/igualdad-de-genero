import React from "react";

const VideoSection = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-extrabold text-black mb-8">
          Elevator Pitch
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          En este video, exploramos acerca sobre la igualdad de género en la
          actualidad y sobre como podemos tomar acción a través de este sitio
          web
        </p>
        <div className="relative pt-5">
          <iframe
            className="w-full max-w-[80%] mx-auto aspect-video rounded-lg shadow-2xl"
            src="https://drive.google.com/file/d/1e7VzYp8TuTLsm1pX1L91ZeseLE6p_FNP/preview"
            title="Focus Group Video"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
