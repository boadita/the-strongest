import React from 'react';
import cancha_gustavo_carlos_otero from "../assets/predios/cancha-gustavo-carlos-otero.jpg";
import estadio from "../assets/predios/estadio.jpg";
import complejo from "../assets/predios/complejo.jpg";
import yungas from "../assets/predios/yungas.jpg";
import satelite from "../assets/predios/satelite.jpg";
import colon from "../assets/predios/colon.jpg";

const Predios = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PREDIOS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <img
                        src={cancha_gustavo_carlos_otero}
                        alt="cancha_gustavo_carlos_otero"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>CANCHA GUSTAVO CARLOS OTERO</h2>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <img
                        src={estadio}
                        alt="estadio"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>ESTADIO RAFAEL MENDOZA CASTELLÓN</h2>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <img
                        src={complejo}
                        alt="complejo"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>COMPLEJO DE ACHUMANI</h2>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <img
                        src={yungas}
                        alt="yungas"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>ESCUELA CAÑADA STRONGEST</h2>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <img
                        src={satelite}
                        alt="satelite"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>ESCUELA CIUDAD SATÉLITE</h2>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <img
                        src={colon}
                        alt="colon"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>SEDE DEL CLUB</h2>
                </div>
            </div>
        </div>
    );
};

export default Predios;