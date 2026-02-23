import { useState, useEffect } from "react";

import int from "../../data/internacionales.json";

const Internacionales = () => {
    const [competenciaSeleccionada, setCompetenciaSeleccionada] = useState("LIBERTADORES");
    const [anioSeleccionado, setAnioSeleccionado] = useState(null);

    useEffect(() => {
        setAnioSeleccionado(null);
    }, [competenciaSeleccionada]);

    const partidosFiltrados = int.filter(
        (p) => p.TORNEO === competenciaSeleccionada
    );

    const aniosUnicos = [
        ...new Set(
            partidosFiltrados.map(p => p.FECHA.slice(0, 4))
        )
    ]

    const partidosPorAnio = anioSeleccionado
        ? partidosFiltrados.filter(
            p => p.FECHA.startsWith(anioSeleccionado)
        )
        : partidosFiltrados;

    return (
        <div className="space-y-6 p-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">TORNEOS INTERNACIONALES</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <button
                    onClick={() => setCompetenciaSeleccionada("LIBERTADORES")}
                    className={`px-4 py-2 rounded font-bold text-center
                        ${competenciaSeleccionada === "LIBERTADORES"
                        ? "bg-black text-yellow-400"
                        : "bg-yellow-100 dark:text-gray-800 hover:bg-black hover:text-yellow-400"
                        }`}
                >
                    LIBERTADORES
                </button>
                <button
                    onClick={() => setCompetenciaSeleccionada("SUDAMERICANA")}
                    className={`px-4 py-2 rounded font-bold text-center
                        ${competenciaSeleccionada === "SUDAMERICANA"
                        ? "bg-black text-yellow-400"
                        : "bg-yellow-100 dark:text-gray-800 hover:bg-black hover:text-yellow-400"
                        }`}
                >
                    SUDAMERICANA
                </button>
                <button
                    onClick={() => setCompetenciaSeleccionada("CONMEBOL")}
                    className={`px-4 py-2 rounded font-bold text-center
                        ${competenciaSeleccionada === "CONMEBOL"
                        ? "bg-black text-yellow-400"
                        : "bg-yellow-100 dark:text-gray-800 hover:bg-black hover:text-yellow-400"
                        }`}
                >
                    CONMEBOL
                </button>
                <button
                    onClick={() => setCompetenciaSeleccionada("MERCONORTE")}
                    className={`px-4 py-2 rounded font-bold text-center
                        ${competenciaSeleccionada === "MERCONORTE"
                        ? "bg-black text-yellow-400"
                        : "bg-yellow-100 dark:text-gray-800 hover:bg-black hover:text-yellow-400"
                        }`}
                >
                    MERCONORTE
                </button>
            </div>
            {/* LISTA DE PARTIDOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[280px_1fr] gap-6">
                <aside className="bg-yellow-100 rounded-lg shadow p-4 space-y-4">
                    <img
                        src={`/internacionales/${competenciaSeleccionada}.png`}
                        alt={competenciaSeleccionada}
                        className="w-full h-40 object-contain"
                    />
                    <h2 className="text-xl font-bold dark:text-gray-800 text-center uppercase">
                        {competenciaSeleccionada}
                    </h2>
                    <h3 className="font-semibold mb-2 text-gray-700">
                        PARTICIPACIONES:
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                        {aniosUnicos.map(anio => (
                            <li key={anio}>
                                <button
                                    onClick={() => setAnioSeleccionado(anio)}
                                    className={`w-full text-left px-3 py-1 font-semibold rounded
              ${anioSeleccionado === anio
                                            ? "bg-black text-yellow-400"
                                            : "bg-yellow-200 dark:text-gray-800 hover:bg-black hover:text-yellow-400"
                                        }`}
                                >
                                    {anio}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {partidosPorAnio.map((partido) => (
                            <div
                                key={partido.Id}
                                className="border rounded p-4 bg-yellow-100 dark:text-gray-800 shadow hover:shadow-lg transition"
                            >
                                <h2 className="font-semibold mb-2 text-center">
                                    {partido.EQUIPO} <br /> {partido.RESULTADO} <br />{partido.EQUIPO2}
                                </h2>

                                <p><b>Fecha:</b> {partido.FECHA}</p>
                                <p><b>Fase:</b> {partido.FASE}</p>
                                <p><b>Ciudad:</b> {partido.CIUDAD}</p>
                                <p><b>Estadio:</b> {partido.ESTADIO}</p>
                            </div>
                        ))}

                        {partidosFiltrados.length === 0 && (
                            <p className="text-gray-500">
                                No hay partidos registrados para esta competencia.
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Internacionales;