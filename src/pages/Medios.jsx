import React from 'react';
import el_derribador from "../assets/medios/el_derribador.png";
import biblioteca from "../assets/medios/biblioteca.jpg";
import el_mas_fuerte from "../assets/medios/el_mas_fuerte.jpg";
import area_atigrada from "../assets/medios/area_atigrada.jpg";
import DonTigre from "../assets/medios/DonTigre.gif";
import oficial from "../assets/medios/oficial.jpg";

const Medios = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">MEDIOS DE COMUNICACIÓN</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <div className="w-full h-56 flex items-center justify-center">
                        <img
                            src={el_derribador}
                            alt="el_derribador"
                            className="rounded-xl max-w-full max-h-full object-contain"
                        />
                    </div>
                    <h2 className="font-bold text-center mt-2 dark:text-gray-800">EL DERRIBADOR</h2>
                    <span className='flex justify-center dark:text-gray-800 mt-1'>Radio partidaria del club</span>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <div className="w-full h-56 flex items-center justify-center">
                        <img
                            src={biblioteca}
                            alt="biblioteca"
                            className="rounded-xl max-w-full max-h-full object-contain"
                        />
                    </div>

                    <h2 className="font-bold text-center mt-2 dark:text-gray-800">LA BIBLIOTECA STRONGUISTA "IVÁN AGUILAR MURGUÍA"</h2>
                    <span className='flex justify-center dark:text-gray-800 mt-1'>Biblioteca para encontrar libros del club</span>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <div className="w-full h-56 flex items-center justify-center">
                        <img
                            src={el_mas_fuerte}
                            alt="el_mas_fuerte"
                            className="rounded-xl max-w-full max-h-full object-contain"
                        />
                    </div>
                    <h2 className="font-bold text-center mt-2 dark:text-gray-800">EL + FUERTE</h2>
                    <span className='flex justify-center dark:text-gray-800 mt-1'>Revista dedicada al club</span>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <div className="w-full h-56 flex items-center justify-center">
                        <img
                            src={area_atigrada}
                            alt="area_atigrada"
                            className="rounded-xl max-w-full max-h-full object-contain"
                        />
                    </div>
                    <h2 className="font-bold text-center mt-2 dark:text-gray-800">ÁREA ATIGRADA</h2>
                    <span className='flex justify-center dark:text-gray-800 mt-1'>Información del club en redes sociales</span>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <div className="w-full h-56 flex items-center justify-center">
                        <img
                            src={DonTigre}
                            alt="DonTigre"
                            className="rounded-xl max-w-full max-h-full object-contain"
                        />
                    </div>
                    <h2 className="font-bold text-center mt-2 dark:text-gray-800">DON TIGRE</h2>
                    <span className='flex justify-center dark:text-gray-800 mt-1'>Información y chistes del club</span>
                </div>
                <div className="rounded-xl shadow bg-yellow-100 p-4 overflow-hidden hover:scale-105 transition">
                    <div className="w-full h-56 flex items-center justify-center">
                        <img
                            src={oficial}
                            alt="oficial"
                            className="rounded-xl max-w-full max-h-full object-contain"
                        />
                    </div>
                    <h2 className="font-bold text-center mt-2 dark:text-gray-800">www.clubthestrongest.bo</h2>
                    <span className='flex justify-center dark:text-gray-800 mt-1'>Página oficial del club</span>
                </div>
            </div>
        </div>
    );
};

export default Medios;