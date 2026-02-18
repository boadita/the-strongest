import React from 'react';
import chaynhita from "../../assets/simbolos/chaynhita.jpg";
import tigre from "../../assets/simbolos/tigre.jpg";
import vicunha from "../../assets/simbolos/vicunha.jpg";
import condor from "../../assets/simbolos/condor.jpg";
import negrito from "../../assets/simbolos/negrito.jpg";
import escudo from "../../assets/simbolos/escudo.jpg";
import himno from "../../assets/simbolos/himno.jpg";
import grito_de_guerra from "../../assets/simbolos/grito_de_guerra.jpg";

const Simbolos = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">SÍMBOLOS</h1>
            <div className="grid grid-cols-1 gap-8 p-10">
                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={chaynhita}
                        alt="chaynhita"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            CHAYÑITA
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Conocido también como <strong>"Jilguero negro de Bolivia"</strong>,
                            la chayñita es un pájaro típico de La Paz, de cuyo plumaje se tomaron los colores del club The Strongest
                            en el acto de fundación. Desde entonces la identificación con estos colores ha sido
                            invariable y ha dado pie a composiciones musicales, como la canción <em> "Mi chayñita"</em>
                            de Adrián Patiño.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={vicunha}
                        alt="vicunha"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            VICUÑA
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Alrededor de los años 30, la vicuña fue adoptada como otro de los símbolos del club.
                            Los stronguistas de la época la consecuencia de un buen augurio, por lo que hasta los
                            años 50 fueron adornados por la tienda Bueno, Bonito y Barato de don Gastón Velasco y
                            arrendas por el señor David Guardia. En lo reciente, se recuerda a Vico y a Manolo como
                            las vicuñas del Tricampeonato.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={condor}
                        alt="condor"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            CÓNDOR
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            <em>"Condorcito quisiera ser, desde el Illimani para divisar al Strongest fuerte que 
                            sabe jugar"</em>, son un par de estrofas de la canción que dio fuerza al nuevo símbolo,
                            el cóndor, el majestuoso cóndor de los Andes. Esta imponente ave andina representa 
                            la fuerza, la velocidad y él llega lejos, lo cual lo identifica con The Strongest.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={tigre}
                        alt="tigre"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            TIGRE
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            El tigre de bengala es el símbolo más actual del club por su identificación con los
                            colores, aunque su uso data del año 1941, cuando el presidente de la Asociación de 
                            Fútbol de La Paz, Max de la Vega llamó tigres a los jugadores del club The Strongest 
                            por sus colores y por su garra. El apelativo gustó entre el público y desde entonces
                            se asoció al equipo con dicho animal.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={negrito}
                        alt="negrito"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            NEGRITO
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            <strong>"La gente dice que soy strongista de corazón, porque soy negro negrito atigrado de corazón"</strong>.
                            Esa canción junto a <em>"Negra Samba"</em> aluden a la raza negra y su relación con el equipo gualdinegro.
                            Prueba de ello es esta estatua a escala real de un negrito con boina del club The Strongest y una bandera 
                            en sus manos, que hoy se guarda con celo en la casa del Tigre en Achumani.

                        </p>
                    </div>
                </div>

                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={escudo}
                        alt="escudo"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            ESCUDO
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Se presume que el escudo del club aparece en la década del 30 en la camiseta del prtero José Bascón,
                            el cual tenía tres de color negro y dos de amarillo. Luego de la tragedia de Viloco, cuando esporádicamente
                            se utilizaba una cabeza de tigre como escudo, el Ingeniero Felipe Murguía diseñó el blasón con siete franjas,
                            cuatro negros y tres dorados. A este diseño se sumó en la época actual el tigre.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={himno}
                        alt="himno"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            HIMNO DEL CLUB
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            El himno de The Strongest fue compuesto en los albores de la Guerra del Chaco por Adrían Patiño.
                            Esta versión toma como base la canción <em>"Nevando está"</em> de este mismo compositor, a la que 
                            Froylán Pinilla (jugador, hincha y dirigente del club) le agregó la letra. Se trata de un foxtrot
                            aymara con derivaciones del jazz que fue estrenada en 1936 en el aniversario del club.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center hover:scale-105 transition">
                    <img
                        src={grito_de_guerra}
                        alt="grito_de_guerra"
                        className="rounded-xl w-full md:w-64 h-40 object-cover"
                    />
                    <div>
                        <h2 className='font-bold text-xl mb-2 text-black text-center'>
                            GRITO DE GUERRA
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            El grito <strong>"Huarikasaya Kalatakaya"</strong> (Tiembla la vicuña, rompe la piedra)
                            es una expresión aymara con la que el periodista Francisco "Pancho" Villarejos arrengó
                            a The Strongest en un amistoso realizado en Sucre el 25 de mayo de 1929. La frase,
                            sin embargo, fue popularizada por Raúl "Chupa" Riveros desde la segunda mitad del sigo,
                            en cuya voz se la recuerda.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Simbolos;