const Fundacion = () => {
  return (
    <article className="space-y-6">

      {/* TÍTULO */}
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        FUNDACIÓN DEL CLUB
      </h1>

      {/* INTRODUCCIÓN */}
      <p className="text-gray-700 leading-relaxed">
        La génesis de <strong>The Strongest</strong> responde a la necesidad de
        crear una institución sólida en una época donde los clubes de fútbol
        eran efímeros. Desde su origen, el club nació con una identidad fuerte,
        destinada a perdurar en el tiempo.
      </p>

      {/* FUNDACIÓN */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Origen y Fundación
        </h2>

        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            <strong>25 de marzo de 1908:</strong> La idea nació en un kiosco de la
            Plaza Murillo.
          </li>
          <li>
            <strong>8 de abril de 1908:</strong> Se formalizó la fundación en la
            casa de Alberto Requena ubicada entre las calles Buenaventura Bueno y 
            Juan de la Riva de la ciudad de La Paz.
          </li>
        </ul>
      </section>

      {/* FUNDADORES */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Fundadores
        </h2>

        <p className="text-gray-700 leading-relaxed">
          El club fue fundado por un grupo de <strong>12 jóvenes</strong>,
          principalmente provenientes del <strong>American Institute</strong> y
          el <strong>Colegio San Simón</strong>, liderados por
          <strong> José León López Villamil</strong>, quien fue el primer
          presidente de la institución.
        </p>
      </section>

      {/* NOMBRE */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Evolución del Nombre
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Inicialmente el club fue bautizado como{" "}
          <strong>"Strong Foot Ball Club"</strong>. Sin embargo, el nombre fue
          modificado rápidamente a <strong>"The Strongest"</strong>, bajo la
          premisa expresada por Víctor Manuel Franco:
        </p>

        <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-800 mt-3">
          “Fuerte no es lo cabal, nosotros dijimos ¡El más fuerte!”
        </blockquote>
      </section>

      {/* SIMBOLOGÍA */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Simbología
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Los colores <strong>amarillo</strong> y <strong>negro </strong> 
          representan el día y la noche, además de un espíritu de rebeldía y
          fortaleza. El grito de guerra del club,
          <strong> “¡Huarikasaya Kalatakaya!” </strong> 
          (En tiempos de frío, las piedras revientan), sintetiza la fuerza del
          club ante la adversidad.
        </p>
      </section>

      {/* PRIMERA ALINEACIÓN */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Primera Alineación (1908)
        </h2>

        <p className="text-gray-700 mb-2">
          Formación táctica utilizada: <strong>2-3-5</strong>
        </p>

        <div className="grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <ul className="space-y-1">
            <li><strong>Arquero:</strong> Alberto Requena</li>
            <li><strong>Defensas:</strong> Luis Rivera, Ramón González</li>
            <li>
              <strong>Mediocampistas:</strong> Alberto Tavel, José López Villamil,
              Juan González
            </li>
            <li>
              <strong>Delanteros:</strong> Víctor Manuel Franco, Armando Elío,
              Francisco Guachalla, Isaac González, Hugo Alipaz
            </li>
          </ul>
        </div>
      </section>

    </article>
  );
};

export default Fundacion;
