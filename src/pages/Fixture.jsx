import React from 'react';
import ABB from "../assets/rivales/ABB.png";
import real_potosi from "../assets/rivales/real-potosi.png";
import always_ready from "../assets/rivales/always_ready.png";
import oriente_petrolero from "../assets/rivales/oriente-petrolero.png";
import gv_san_jose from "../assets/rivales/gv-san-jose.png";
import bolivar from "../assets/rivales/bolivar.png";

const Fixture = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS ABRIL</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={ABB}
                        alt="ABB"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>3-5-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={real_potosi}
                        alt="real_potosi"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>10-5-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={always_ready}
                        alt="always_ready"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>13-5-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO VILLA INGENIO</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={oriente_petrolero}
                        alt="oriente_petrolero"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>17-5-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={gv_san_jose}
                        alt="gv_san_jose"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>22-5-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO JESÚS BERMÚDEZ</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={bolivar}
                        alt="bolivar"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>31-5-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;