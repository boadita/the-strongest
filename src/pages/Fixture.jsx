import React from 'react';
import blooming from "../assets/rivales/blooming.png";
import fc_universitario from "../assets/rivales/fc_universitario.png";
import san_antonio from "../assets/rivales/san_antonio.png";
import real_tomayapo from "../assets/rivales/real_tomayapo.png";
import real_oruro from "../assets/rivales/real-oruro.png";

const Fixture = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS ABRIL</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={blooming}
                        alt="blooming"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>1-4-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={fc_universitario}
                        alt="fc_universitario"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>5-4-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO FÉLIX CAPRILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={san_antonio}
                        alt="san_antonio"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>12-4-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={real_tomayapo}
                        alt="real_tomayapo"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>23-4-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO IV CENTENARIO</p>
                </div>
                <div className="bg-yellow-100 dark:text-gray-800 p-4 rounded-xl shadow">
                    <img
                        src={real_oruro}
                        alt="real_oruro"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"
                    />
                    <h2 className='font-bold text-center mt-2'>26-4-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO JESÚS BERMÚDEZ</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;