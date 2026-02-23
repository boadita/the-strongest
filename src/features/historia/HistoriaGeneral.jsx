import { useState } from "react";

const HistoriaGeneral = () => {

  return (
    <div className="space-y-6">
      <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        HISTORIA DEL CLUB THE STRONGEST
      </h1>
      {/* INTRODUCCIÓN */}
      <section className='font-semibold text-justify'>
        <p className="text-gray-700 leading-relaxed text-justify">
          Desde 1908, The Strongest representa identidad, resistencia y grandeza.
          No es solo fútbol: es historia viva de La Paz y de Bolivia.
        </p>
      </section>

      {/* FUNDACIÓN */}
      <section className="mb-16 bg-yellow-500 p-10 font-semibold border-l-8 border-gray-950">
        <h2 className="text-xl font-bold mb-2">
          Los Inicios (1908)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6">
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">📅 8 de abril de 1908</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">👥 12 jóvenes fundadores</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">📍 La Paz</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">💪 “El más fuerte”</div>
        </div>

        <p className="text-gray-700 leading-relaxed text-justify">
          Fundado por jóvenes estudiantes liderados por José León López Villamil,
          el club nació con el nombre Strong Foot Ball Club, que fue cambiado el
          mismo día a The Strongest para reflejar una identidad de fortaleza y
          permanencia.
        </p>
      </section>

      {/* ERA AMATEUR */}
      <section className="mb-16 bg-yellow-500 p-10 font-semibold border-l-8 border-gray-950">
        <h2 className="text-xl font-bold mb-2">
          Dominio en la Era Amateur
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6">
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🏆 Primer campeón invicto (1914)</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🔥 Tetracampeón (1922–1925)</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🏟️ Inaugura el Hernando Siles</div>
        </div>

        <p className="text-gray-700 leading-relaxed text-justify">
          Durante las primeras décadas del fútbol boliviano, The Strongest fue
          protagonista absoluto, marcando el camino del deporte en La Paz y
          consolidando su grandeza temprana.
        </p>
      </section>

      {/* GUERRA DEL CHACO */}
      <section className="mb-16 bg-gray-950 p-10 font-semibold border-l-8 border-yellow-500">
        <h2 className="text-xl text-yellow-500 font-bold mb-2">
          La Guerra del Chaco
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6">
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center">🪖 600 socios al frente</div>
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center">🇧🇴 Club al servicio del país</div>
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center">📍 Cañada Strongest</div>
        </div>

        <p className="text-yellow-500 leading-relaxed text-justify">
          En 1932, el club suspendió sus actividades deportivas. Jugadores,
          dirigentes y socios se enlistaron para defender a Bolivia. En su honor,
          una batalla fue bautizada como Cañada Strongest.
        </p>
      </section>

      {/* PROFESIONALISMO */}
      <section className="mb-16 bg-yellow-500 p-10 font-semibold border-l-8 border-gray-950">
        <h2 className="text-xl font-bold mb-2">
          Era Profesional
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6">
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🏆 Primer campeón profesional (1952)</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🥇 Copa República (1958)</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">⚽ Base del fútbol moderno</div>
        </div>

        <p className="text-gray-700 leading-relaxed text-justify">
          Con la llegada del profesionalismo, The Strongest fue nuevamente
          pionero, convirtiéndose en el primer campeón nacional y consolidando su
          prestigio institucional.
        </p>
      </section>

      {/* VILOCO */}
      <section className="mb-16 bg-gray-950 p-10 font-semibold border-l-8 border-yellow-500">
        <h2 className="text-xl text-yellow-500 font-bold mb-2">
          La Tragedia de Viloco (1969)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6">
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center">✈️ Accidente aéreo</div>
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center">💔 Sin sobrevivientes</div>
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center">⚠️ Al borde de desaparecer</div>
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center">🐯 Renacer</div>
        </div>

        <p className="text-yellow-500 leading-relaxed text-justify">
          El 26 de septiembre de 1969, el avión que transportaba al primer plantel
          del club se estrelló en Viloco. Fue el momento más doloroso en la
          historia atigrada.
        </p>
        <p className="text-yellow-500 leading-relaxed text-justify">
          Sin jugadores ni recursos, la institución estuvo al borde de la
          desaparición. Gracias al liderazgo de Rafael Mendoza Castellón y la
          solidaridad internacional, The Strongest se reconstruyó y volvió a
          competir, demostrando que su espíritu era indestructible.
        </p>
      </section>

      {/* LIGA Y RENACER */}
      <section className="mb-16 bg-yellow-500 p-10 font-semibold border-l-8 border-gray-950">
        <h2 className="text-xl font-bold mb-2">
          La Era de la Liga y el Tigre Moderno
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6">
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🏆 Primer campeón de Liga (1977)</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🔥 Tricampeón histórico (2012)</div>
          <div className="bg-gray-900 text-yellow-500 p-4 rounded-lg text-center">🌎 Derribador de campeones</div>
        </div>

        <p className="text-gray-700 leading-relaxed text-justify">
          Cofundador de la Liga del Fútbol Profesional Boliviano, The Strongest
          continuó haciendo historia, convirtiéndose en el único tricampeón
          consecutivo y en un respetado rival internacional.
        </p>
      </section>

      {/* IDENTIDAD */}
      <section className="mb-16 bg-yellow-500 p-10 font-semibold border-l-8 border-gray-950">
        <h2 className="text-xl font-bold mb-2">
          Identidad Atigrada
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          El amarillo y negro representan el día y la noche. El Tigre simboliza
          la garra, el coraje y la lucha constante. The Strongest no solo gana
          títulos: deja legado.
        </p><br />
        <blockquote className="italic text-center">
          “Si The Strongest no hubiese sido fundado, habría existido la necesidad
          de crearlo.”
        </blockquote>
        <p className="text-center">Alberto J. Armando</p>
      </section>
    </div>
  );
};

export default HistoriaGeneral;
