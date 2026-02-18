import React from 'react';
import { Link } from "react-router-dom"
import posiciones from "../assets/estadisticas/posiciones.png";
import temporadas from "../assets/estadisticas/temporadas.png";
import historial from "../assets/estadisticas/historial.png";
import internacionales from "../assets/estadisticas/internacionales.png";

const Estadisticas = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">ESTADISTICAS</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <Link
                                to="/tabla_posiciones"
                                className="bg-white rounded shadow hover:shadow-lg transition"
                              >
                    <img
                        src={posiciones}
                        alt="posiciones"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>TABLA DE POSICIONES</h2>
                </Link>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <Link
                                to="/temporadas"
                                className="bg-white rounded shadow hover:shadow-lg transition"
                              >
                    <img
                        src={temporadas}
                        alt="temporadas"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>TEMPORADAS</h2>
                </Link>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <Link
                                to="/historial"
                                className="bg-white rounded shadow hover:shadow-lg transition"
                              >
                    <img
                        src={historial}
                        alt="historial"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>HISTORIAL DE PARTIDOS</h2>
                </Link>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <Link
                                to="/internacionales"
                                className="bg-white rounded shadow hover:shadow-lg transition"
                              >
                    <img
                        src={internacionales}
                        alt="internacionales"
                        className="rounded-xl mx-auto w-64 h-40 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>COPAS INTERNACIONALES</h2>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Estadisticas;