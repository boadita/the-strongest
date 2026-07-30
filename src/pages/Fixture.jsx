import React from 'react';
import blooming from "../assets/rivales/blooming.png";
import oriente_petrolero from "../assets/rivales/oriente-petrolero.png";
import gv_san_jose from "../assets/rivales/gv-san-jose.png";
import bolivar from "../assets/rivales/bolivar.png";
import aurora from "../assets/rivales/aurora.png";

const Fixture = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS JULIO</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={bolivar}
                        alt="bolivar"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>12-7-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={oriente_petrolero}
                        alt="oriente_petrolero"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>15-7-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={gv_san_jose}
                        alt="gv_san_jose"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>18-7-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO JESÚS BERMÚDEZ</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={blooming}
                        alt="blooming"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>26-7-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO TAHUICHI AGUILERA</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={aurora}
                        alt="aurora"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>31-7-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;