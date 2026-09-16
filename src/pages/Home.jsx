import React from 'react';

const Home = () => {
  return (
    <div className="space-y-6 tv:space-y-10 tv:px-8">

      {/* Título */}
      <div className="
      font-bold
      dark:text-gray-800
      text-5xl
      tv:text-6xl
      tv-lg:text-7xl
      text-center
      p-3
      tv:p-5
    ">
        KALATAKAYA HUARIKASAYA
      </div>

      {/* Partidos */}
      <div className="
      flex
      flex-col
      lg:flex-row
      gap-6
      tv:gap-10
      dark:text-gray-800
    ">

        {/* ÚLTIMO PARTIDO */}
        <div className="
        bg-yellow-100
        p-4
        tv:p-8
        rounded-xl
        shadow
        lg:w-1/2
      ">

          <h3 className="
          font-bold
          text-xl
          tv:text-3xl
          mb-1
          tv:mb-4
          text-center
        ">
            ÚLTIMO PARTIDO
          </h3>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              FECHA:
            </h4>
            <span className="text-2xl tv:text-3xl">
              15-9-2026
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              CIUDAD:
            </h4>
            <span className="text-2xl tv:text-3xl">
              EL ALTO
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              ESTADIO:
            </h4>
            <span className="text-2xl tv:text-3xl">
              VILLA INGENIO
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              TORNEO:
            </h4>
            <span className="text-2xl tv:text-3xl">
              LIGA FBF
            </span>
          </div>

          {/* Resultado */}
          <div className="
          flex
          flex-col
          items-center
          justify-center
          p-4
          tv:p-8
          gap-2
          tv:gap-4
          border
          border-black
          rounded-lg
          tv:rounded-xl
        ">

            <div className="font-bold text-lg tv:text-3xl">
              ABB
            </div>

            <div className="text-2xl tv:text-5xl font-bold text-black">
              1-2
            </div>

            <div className="font-bold text-lg tv:text-3xl">
              THE STRONGEST
            </div>

          </div>
        </div>


        {/* PRÓXIMO PARTIDO */}
        <div className="
        bg-black
        text-white
        p-4
        tv:p-8
        rounded-xl
        shadow
        lg:w-1/2
      ">

          <h3 className="
          font-bold
          text-xl
          tv:text-3xl
          mb-1
          tv:mb-4
          text-center
        ">
            PRÓXIMO PARTIDO
          </h3>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              FECHA:
            </h4>
            <span className="text-2xl tv:text-3xl">
              20-9-2026
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              CIUDAD:
            </h4>
            <span className="text-2xl tv:text-3xl">
              LA PAZ
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              ESTADIO:
            </h4>
            <span className="text-2xl tv:text-3xl">
              HERNANDO SILES
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 tv:gap-4 tv:p-2">
            <h4 className="font-bold text-2xl tv:text-3xl">
              TORNEO:
            </h4>
            <span className="text-2xl tv:text-3xl">
              COPA PACEÑA
            </span>
          </div>

          {/* Próximo partido */}
          <div className="
          flex
          flex-col
          items-center
          justify-center
          p-4
          tv:p-8
          gap-2
          tv:gap-4
          border
          border-white
          rounded-lg
          tv:rounded-xl
        ">

            <div className="font-bold text-lg tv:text-3xl">
              THE STRONGEST
            </div>

            <div className="text-2xl tv:text-5xl font-bold text-white">
              vs
            </div>

            <div className="font-bold text-lg tv:text-3xl">
              BOLÍVAR
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
