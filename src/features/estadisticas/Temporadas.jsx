import { useState } from "react";

import Era_amateur from "../../data/temporadas/Era_amateur.json";
import Era_profesional_mixta from "../../data/temporadas/Era_profesional_mixta.json";
import Torneos_FBF from "../../data/temporadas/Torneos_FBF.json";
import Epoca_liguera from "../../data/temporadas/Epoca_liguera.json";
import Tiempos_acuales from "../../data/temporadas/Tiempos_acuales.json";

const Temporadas = () => {
    const [titulo, setTitulo] = useState("ERA AMATEUR");
    const [datos, setDatos] = useState(Era_amateur);
    const [eraActiva, setEraActiva] = useState("ERA AMATEUR");

    const cambiarEra = (nombre, data) => {
        setTitulo(nombre);
        setDatos(data);
        setEraActiva(nombre);
        setPaginaActual(1);
    };

    const filasPorPagina = 12;

    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = Math.ceil(datos.length / filasPorPagina);

    const indiceInicio = (paginaActual - 1) * filasPorPagina;
    const indiceFin = indiceInicio + filasPorPagina;

    const datosPaginados = datos.slice(indiceInicio, indiceFin);
    return (
        <div className="space-y-6 p-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">TEMPORADAS</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <button
                    onClick={() => cambiarEra("ERA AMATEUR", Era_amateur)}
                    className={`px-4 py-2 rounded font-bold text-center
        ${eraActiva === "ERA AMATEUR"
            ? "bg-black text-yellow-400"
            : "bg-yellow-100 text-black hover:bg-black hover:text-yellow-400"
        }`}
                >
                    ERA AMATEUR
                </button>
                <button
                    onClick={() =>
                        cambiarEra("ERA PROFESIONAL MIXTA", Era_profesional_mixta)
                    }
                    className={`px-4 py-2 rounded font-bold text-center
        ${eraActiva === "ERA PROFESIONAL MIXTA"
            ? "bg-black text-yellow-400"
            : "bg-yellow-100 text-black hover:bg-black hover:text-yellow-400"
        }`}
                >
                    ERA PROFESIONAL MIXTA
                </button>
                <button
                    onClick={() => cambiarEra("TORNEOS FBF", Torneos_FBF)}
                    className={`px-4 py-2 rounded font-bold text-center
        ${eraActiva === "TORNEOS FBF"
            ? "bg-black text-yellow-400"
            : "bg-yellow-100 text-black hover:bg-black hover:text-yellow-400"
        }`}
                >
                    TORNEOS FBF
                </button>
                <button
                    onClick={() => cambiarEra("ÉPOCA LIGUERA", Epoca_liguera)}
                    className={`px-4 py-2 rounded font-bold text-center
        ${eraActiva === "ÉPOCA LIGUERA"
            ? "bg-black text-yellow-400"
            : "bg-yellow-100 text-black hover:bg-black hover:text-yellow-400"
        }`}
                >
                    ÉPOCA LIGUERA
                </button>
                <button
                    onClick={() => cambiarEra("TIEMPOS ACTUALES", Tiempos_acuales)}
                    className={`px-4 py-2 rounded font-bold text-center
        ${eraActiva === "TIEMPOS ACTUALES"
            ? "bg-black text-yellow-400"
            : "bg-yellow-100 text-black hover:bg-black hover:text-yellow-400"
        }`}
                >
                    TIEMPOS ACTUALES
                </button>
            </div>
            {/* RESULTADO */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4 dark:text-gray-800 text-center">
                    {titulo}
                </h2>

                <div className="overflow-x-auto w-full">
                    <table className="min-w-full border-collapse text-sm md:text-base">
                        <thead className="bg-black text-white">
                            <tr>
                                {Object.keys(datos[0]).map((key) => (
                                    <th key={key} className="border px-3 py-2">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {datosPaginados.map((fila, index) => (
                                <tr key={index} className="text-center font-semibold dark:text-gray-800 bg-yellow-200 hover:bg-gray-100">
                                    {Object.values(fila).map((valor, i) => (
                                        <td key={i} className="border px-3 py-2">
                                            {valor}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* PAGINACIÓN */}
            <div className="flex justify-center mt-4 gap-2 flex-wrap">
                <button
                    onClick={() => setPaginaActual(p => Math.max(p - 1, 1))}
                    disabled={paginaActual === 1}
                    className="px-3 py-1 border rounded font-bold dark:text-gray-800 bg-yellow-100 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ⏮
                </button>

                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        onClick={() => setPaginaActual(num)}
                        className={`px-3 py-1 border rounded font-bold
        ${paginaActual === num
                                ? "bg-black text-yellow-400"
                                : "bg-yellow-100 dark:text-gray-800 hover:bg-black hover:text-yellow-400"}`}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() =>
                        setPaginaActual(p => Math.min(p + 1, totalPaginas))
                    }
                    disabled={paginaActual === totalPaginas}
                    className="px-3 py-1 border rounded font-bold dark:text-gray-800 bg-yellow-100 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ⏭
                </button>
            </div>
        </div>
    );
};

export default Temporadas;