import React from 'react';
import real_tomayapo from "../assets/rivales/real_tomayapo.png";
import real_oruro from "../assets/rivales/real-oruro.png";
import guabira from "../assets/rivales/guabira.png";
import real_potosi from "../assets/rivales/real-potosi.png";
import fc_universitario from "../assets/rivales/fc_universitario.png";
import always_ready from "../assets/rivales/always_ready.png";
import bolivar from "../assets/rivales/bolivar.png";

const Fixture = () => {
    return (
        <div className="space-y-6 tv:space-y-10 tv:px-8">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS SEPTIEMBRE</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 tv:grid-cols-4 tv-lg:grid-cols-5 tv:gap-8 gap-8 p-10">
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={fc_universitario}
                        alt="fc_universitario"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>3-10-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={guabira}
                        alt="guabira"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>7-10-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO GILBERTO PARADA</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={real_potosi}
                        alt="real_potosi"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>11-10-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO VICTOR AGUSTÍN UGARTE</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={always_ready}
                        alt="always_ready"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>18-10-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;