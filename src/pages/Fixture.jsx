import React from 'react';
import gv_san_jose from "../assets/rivales/gv-san-jose.png";
import blooming from "../assets/rivales/blooming.png";
import aurora from "../assets/rivales/aurora.png";
import fc_universitario from "../assets/rivales/fc_universitario.png";
import always_ready from "../assets/rivales/always_ready.png";
import bolivar from "../assets/rivales/bolivar.png";

const Fixture = () => {
    return (
        <div className="space-y-6 tv:space-y-10 tv:px-8">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS NOVIEMBRE</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 tv:grid-cols-4 tv-lg:grid-cols-5 tv:gap-8 gap-8 p-10">
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={gv_san_jose}
                        alt="gv_san_jose"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>1-11-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={always_ready}
                        alt="always_ready"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>4-11-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={bolivar}
                        alt="bolivar"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>8-11-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={blooming}
                        alt="blooming"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>22-11-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={aurora}
                        alt="aurora"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>29-11-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO FÉLIX CAPRILES</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;