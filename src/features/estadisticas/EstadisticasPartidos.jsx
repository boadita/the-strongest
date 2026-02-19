import { useMemo, useState } from "react";
import partidos from "../../data/historial.json";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";


const THE_STRONGEST = "THE STRONGEST";

const obtenerResultadoTS = (partido) => {
    const esLocal = partido.EQUIPO === "THE STRONGEST";

    const limpio = partido.RESULTADO.replace(/\s+/g, "");

    // Detectar penales
    const penales = limpio.match(/\((\d+)\)/g);

    let goles1, goles2, pen1, pen2;

    if (penales) {
        [goles1, goles2] = limpio.split("-").map(v => parseInt(v));
        [pen1, pen2] = penales.map(p => parseInt(p.replace(/[()]/g, "")));
    } else {
        [goles1, goles2] = limpio.split("-").map(Number);
    }

    const golesTS = esLocal ? goles1 : goles2;
    const golesRival = esLocal ? goles2 : goles1;

    // Resultado por goles
    if (golesTS > golesRival) return "ganado";
    if (golesTS < golesRival) return "perdido";

    // Empate en goles → revisar penales
    if (pen1 !== undefined) {
        const penTS = esLocal ? pen1 : pen2;
        const penRival = esLocal ? pen2 : pen1;

        if (penTS > penRival) return "ganado";
        if (penTS < penRival) return "perdido";
    }

    return "empatado";
};


const EstadisticasPartidos = () => {
    const [equipoSeleccionado, setEquipoSeleccionado] = useState("");
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");
    const [modalidadSeleccionada, setModalidadSeleccionada] = useState("");
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");
    const [torneoSeleccionado, setTorneoSeleccionado] = useState("");

    /* =========================
       FILTROS ÚNICOS
    ========================= */

    const equiposUnicos = useMemo(() => {
        const set = new Set();
        partidos.forEach(p => {
            if (p.EQUIPO !== THE_STRONGEST) set.add(p.EQUIPO);
            if (p.EQUIPO2 !== THE_STRONGEST) set.add(p.EQUIPO2);
        });
        return [...set].sort();
    }, []);

    const ciudadesUnicas = useMemo(
        () => [...new Set(partidos.map(p => p.CIUDAD).filter(Boolean))].sort(),
        []
    );

    const modalidadesUnicas = useMemo(
        () => [...new Set(partidos.map(p => p.MODALIDAD).filter(Boolean))].sort(),
        []
    );

    const tiposUnicos = useMemo(
        () => [...new Set(partidos.map(p => p.TIPO).filter(Boolean))].sort(),
        []
    );

    const torneosFiltrados = useMemo(() => {
        if (!equipoSeleccionado) return [];
        return [
            ...new Set(
                partidos
                    .filter(
                        p =>
                            (p.EQUIPO === THE_STRONGEST && p.EQUIPO2 === equipoSeleccionado) ||
                            (p.EQUIPO2 === THE_STRONGEST && p.EQUIPO === equipoSeleccionado)
                    )
                    .map(p => p.TORNEO)
            )
        ].sort();
    }, [equipoSeleccionado]);

    /* =========================
       PARTIDOS FILTRADOS
    ========================= */

    const partidosFiltrados = useMemo(() => {
        if (!equipoSeleccionado) return [];

        return partidos.filter(p => {
            const juegaTS =
                p.EQUIPO === THE_STRONGEST || p.EQUIPO2 === THE_STRONGEST;

            if (!juegaTS) return false;

            const rival =
                p.EQUIPO === THE_STRONGEST ? p.EQUIPO2 : p.EQUIPO;

            return (
                rival === equipoSeleccionado &&
                (!ciudadSeleccionada || p.CIUDAD === ciudadSeleccionada) &&
                (!modalidadSeleccionada || p.MODALIDAD === modalidadSeleccionada) &&
                (!tipoSeleccionado || p.TIPO === tipoSeleccionado) &&
                (!torneoSeleccionado || p.TORNEO === torneoSeleccionado)
            );
        });
    }, [
        equipoSeleccionado,
        ciudadSeleccionada,
        modalidadSeleccionada,
        tipoSeleccionado,
        torneoSeleccionado
    ]);

    const resumen = useMemo(() => {
        const inicial = { ganado: 0, empatado: 0, perdido: 0 };

        partidosFiltrados.forEach(p => {
            const r = obtenerResultadoTS(p);
            inicial[r]++;
        });

        return inicial;
    }, [partidosFiltrados]);

    const dataGrafica = useMemo(() => ([
        {
            name: "Ganados",
            value: resumen.ganado
        },
        {
            name: "Empatados",
            value: resumen.empatado
        },
        {
            name: "Perdidos",
            value: resumen.perdido
        }
    ]), [resumen]);


    return (
        <div className="p-4">
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                {/* RIVAL */}
                <div className="flex flex-col gap-1">
                    <span className="font-bold">RIVAL:</span>
                    <select
                        value={equipoSeleccionado}
                        onChange={e => setEquipoSeleccionado(e.target.value)}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Seleccione rival</option>
                        {equiposUnicos.map(eq => (
                            <option key={eq} value={eq}>{eq}</option>
                        ))}
                    </select>
                </div>

                {/* CIUDAD */}
                <div className="flex flex-col gap-1">
                    <span className="font-bold">CIUDAD:</span>
                    <select
                        value={ciudadSeleccionada}
                        onChange={e => setCiudadSeleccionada(e.target.value)}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todas</option>
                        {ciudadesUnicas.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                {/* MODALIDAD */}
                <div className="flex flex-col gap-1">
                    <span className="font-bold">MODALIDAD:</span>
                    <select
                        value={modalidadSeleccionada}
                        onChange={e => setModalidadSeleccionada(e.target.value)}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todas</option>
                        {modalidadesUnicas.map(m => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>

                {/* TIPO */}
                <div className="flex flex-col gap-1">
                    <span className="font-bold">TIPO:</span>
                    <select
                        value={tipoSeleccionado}
                        onChange={e => setTipoSeleccionado(e.target.value)}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todos</option>
                        {tiposUnicos.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>

                {/* TORNEO */}
                <div className="flex flex-col gap-1">
                    <span className="font-bold">TORNEO:</span>
                    <select
                        value={torneoSeleccionado}
                        onChange={e => setTorneoSeleccionado(e.target.value)}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                        disabled={!torneosFiltrados.length}
                    >
                        <option value="">Todos</option>
                        {torneosFiltrados.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>

            </nav>

            {!equipoSeleccionado ? (
                <p className="text-center mt-6 text-gray-500 font-semibold">
                    Selecciona un rival para ver estadísticas
                </p>
            ) : (
                <div className="mt-6 overflow-x-auto">
                    <h2 className="text-xl font-bold text-center mb-4">
                        THE STRONGEST vs {equipoSeleccionado}
                    </h2>

                    {partidosFiltrados.length === 0 ? (
                        <p className="text-center text-gray-500">
                            No hay partidos con los filtros seleccionados
                        </p>
                    ) : (

                        equipoSeleccionado && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
                                <div className="border rounded p-3 bg-green-100 font-bold">
                                    Ganados: {resumen.ganado}
                                </div>

                                <div className="border rounded p-3 bg-gray-100 font-bold">
                                    Empatados: {resumen.empatado}
                                </div>

                                <div className="border rounded p-3 bg-red-100 font-bold">
                                    Perdidos: {resumen.perdido}
                                </div>
                            </div>

                        )

                    )}
                </div>
            )}
            {equipoSeleccionado && (
                <div className="w-full h-64 mb-8">
                    <h3 className="text-lg font-bold text-center mb-2">
                        Rendimiento
                    </h3>

                    <ResponsiveContainer width="100%" height="100%" className="bg-yellow-100 font-semibold text-black">
                        <BarChart data={dataGrafica}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#3f3f3e" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default EstadisticasPartidos;
