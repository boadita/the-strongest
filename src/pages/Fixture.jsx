import React from 'react';
import bolivar from "../assets/rivales/bolivar.png";
import tachira from "../assets/rivales/tachira.png";
import nacional_potosi from "../assets/rivales/nacional_potosi.png";

const Fixture = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">PARTIDOS FEBRERO</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
                <div className="bg-yellow-100 p-4 rounded-xl shadow">
                    <img
                        src={tachira}
                        alt="tachira"
                        className="rounded-xl mx-auto w-64 h-70 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>3-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO RAFAEL MENDOZA CASTELLÓN</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl shadow">
                    <img
                        src={bolivar}
                        alt="bolivar"
                        className="rounded-xl mx-auto w-64 h-80 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>6-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO HERNANDO SILES</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl shadow">
                    <img
                        src={tachira}
                        alt="tachira"
                        className="rounded-xl mx-auto w-64 h-70 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>10-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO PUEBLO NUEVO</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl shadow">
                    <img
                        src={nacional_potosi}
                        alt="nacional_potosi"
                        className="rounded-xl mx-auto w-64 h-70 object-cover"
                    />
                    <h2 className='font-bold text-center mt-2'>21-2-2026</h2>
                    <p className='font-bold text-center mt-2'>ESTADIO VÍCTOR AGUSTÍN UGARTE</p>
                </div>
            </div>
        </div>
    );
};

export default Fixture;