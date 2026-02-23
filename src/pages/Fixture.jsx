import React from 'react';
import bolivar from "../assets/rivales/bolivar.png";
import tachira from "../assets/rivales/tachira.png";
import always_ready from "../assets/rivales/always_ready.png"
import nacional_potosi from "../assets/rivales/nacional_potosi.png";

const Fixture = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS FEBRERO</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={tachira}
                        alt="tachira"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>3-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO RAFAEL MENDOZA CASTELLÓN</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={bolivar}
                        alt="bolivar"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>6-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={tachira}
                        alt="tachira"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>10-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO PUEBLO NUEVO</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={always_ready}
                        alt="always_ready"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>22-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO VILLA INGENIO</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;