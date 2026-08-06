import React from 'react';
import nacional_potosi from "../assets/rivales/nacional_potosi.png";
import inde_petro from "../assets/rivales/inde-petro.png";
import guabira from "../assets/rivales/guabira.png";
import oriente_petrolero from "../assets/rivales/oriente-petrolero.png";
import fc_universitario from "../assets/rivales/fc_universitario.png";
import san_antonio from "../assets/rivales/san_antonio.png";
import bolivar from "../assets/rivales/bolivar.png";

const Fixture = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS AGOSTO</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={nacional_potosi}
                        alt="nacional_potosi"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>5-8-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO VÍCTOR AGUSTÍN UGARTE</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={inde_petro}
                        alt="inde_petro"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>8-8-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={guabira}
                        alt="guabira"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>15-8-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO GILBERTO PARADA</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={oriente_petrolero}
                        alt="oriente_petrolero"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>18-8-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={fc_universitario}
                        alt="fc_universitario"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>21-8-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={san_antonio}
                        alt="san_antonio"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>26-8-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO FÉLIX CAPRILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={bolivar}
                        alt="bolivar"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>30-8-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;