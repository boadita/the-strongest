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
import TvSelect from "../../components/TvSelect";

const THE_STRONGEST = "THE STRONGEST";
const obtenerResultadoTS = (partido) => {

    const esLocal = partido.EQUIPO === THE_STRONGEST;

    const limpio = partido.RESULTADO.replace(/\s+/g, "");

    // Detectar penales
    const penales = limpio.match(/\(\d+\)/g);

    let goles1, goles2, pen1, pen2;

    if (penales) {

        [goles1, goles2] = limpio
            .split("-")
            .map(v => parseInt(v));

        [pen1, pen2] = penales.map(
            p => parseInt(p.replace(/[()]/g, ""))
        );

    } else {

        [goles1, goles2] = limpio
            .split("-")
            .map(Number);

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


    /* =====================================================
       FILTROS ÚNICOS
    ===================================================== */

    const equiposUnicos = useMemo(() => {

        const set = new Set();

        partidos.forEach(p => {

            if (p.EQUIPO !== THE_STRONGEST) {
                set.add(p.EQUIPO);
            }

            if (p.EQUIPO2 !== THE_STRONGEST) {
                set.add(p.EQUIPO2);
            }

        });

        return [...set]
            .filter(Boolean)
            .sort();

    }, []);


    const ciudadesUnicas = useMemo(
        () =>
            [
                ...new Set(
                    partidos
                        .map(p => p.CIUDAD)
                        .filter(Boolean)
                )
            ].sort(),
        []
    );


    const modalidadesUnicas = useMemo(
        () =>
            [
                ...new Set(
                    partidos
                        .map(p => p.MODALIDAD)
                        .filter(Boolean)
                )
            ].sort(),
        []
    );


    const tiposUnicos = useMemo(
        () =>
            [
                ...new Set(
                    partidos
                        .map(p => p.TIPO)
                        .filter(Boolean)
                )
            ].sort(),
        []
    );


    /* =====================================================
       TORNEOS SEGÚN RIVAL
    ===================================================== */

    const torneosFiltrados = useMemo(() => {

        if (!equipoSeleccionado) {
            return [];
        }

        return [
            ...new Set(

                partidos
                    .filter(p => {

                        const enfrentamiento =
                            (
                                p.EQUIPO === THE_STRONGEST &&
                                p.EQUIPO2 === equipoSeleccionado
                            ) ||
                            (
                                p.EQUIPO2 === THE_STRONGEST &&
                                p.EQUIPO === equipoSeleccionado
                            );

                        return enfrentamiento;

                    })
                    .map(p => p.TORNEO)
                    .filter(Boolean)

            )
        ].sort();

    }, [equipoSeleccionado]);


    /* =====================================================
       MANEJADORES DE FILTROS
    ===================================================== */

    const handleEquipoChange = (valor) => {

        setEquipoSeleccionado(valor);

        // Si cambia el rival, el torneo anterior
        // deja de tener sentido.
        setTorneoSeleccionado("");

    };


    const handleCiudadChange = (valor) => {

        setCiudadSeleccionada(valor);

    };


    const handleModalidadChange = (valor) => {

        setModalidadSeleccionada(valor);

    };


    const handleTipoChange = (valor) => {

        setTipoSeleccionado(valor);

    };


    const handleTorneoChange = (valor) => {

        setTorneoSeleccionado(valor);

    };


    /* =====================================================
       PARTIDOS FILTRADOS
    ===================================================== */

    const partidosFiltrados = useMemo(() => {

        if (!equipoSeleccionado) {
            return [];
        }

        return partidos.filter(p => {

            const juegaTS =
                p.EQUIPO === THE_STRONGEST ||
                p.EQUIPO2 === THE_STRONGEST;

            if (!juegaTS) {
                return false;
            }

            const rival =
                p.EQUIPO === THE_STRONGEST
                    ? p.EQUIPO2
                    : p.EQUIPO;


            return (

                rival === equipoSeleccionado &&

                (
                    !ciudadSeleccionada ||
                    p.CIUDAD === ciudadSeleccionada
                ) &&

                (
                    !modalidadSeleccionada ||
                    p.MODALIDAD === modalidadSeleccionada
                ) &&

                (
                    !tipoSeleccionado ||
                    p.TIPO === tipoSeleccionado
                ) &&

                (
                    !torneoSeleccionado ||
                    p.TORNEO === torneoSeleccionado
                )

            );

        });

    }, [
        equipoSeleccionado,
        ciudadSeleccionada,
        modalidadSeleccionada,
        tipoSeleccionado,
        torneoSeleccionado
    ]);


    /* =====================================================
       RESUMEN
    ===================================================== */

    const resumen = useMemo(() => {

        const inicial = {
            ganado: 0,
            empatado: 0,
            perdido: 0
        };

        partidosFiltrados.forEach(p => {

            const resultado = obtenerResultadoTS(p);

            inicial[resultado]++;

        });

        return inicial;

    }, [partidosFiltrados]);


    /* =====================================================
       DATOS PARA GRÁFICA
    ===================================================== */

    const dataGrafica = useMemo(
        () => [

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

        ],
        [resumen]
    );


    return (

        <div className="p-4 tv:p-8">

            {/* =================================================
                FILTROS
            ================================================= */}

            <nav className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-5
                gap-4
                tv:gap-8
            ">

                {/* RIVAL */}

                <div className="flex flex-col gap-1">

                    <span className="
                        font-bold
                        dark:text-gray-800
                        tv:text-xl
                    ">
                        RIVAL:
                    </span>

                    <TvSelect
                        value={equipoSeleccionado}
                        options={equiposUnicos}
                        placeholder="Todos los equipos"
                        onChange={handleEquipoChange}
                    />

                </div>


                {/* CIUDAD */}

                <div className="flex flex-col gap-1">

                    <span className="
                        font-bold
                        dark:text-gray-800
                        tv:text-xl
                    ">
                        CIUDAD:
                    </span>

                    <TvSelect
                        value={ciudadSeleccionada}
                        options={ciudadesUnicas}
                        placeholder="Todas las ciudades"
                        onChange={handleCiudadChange}
                    />

                </div>


                {/* MODALIDAD */}

                <div className="flex flex-col gap-1">

                    <span className="
                        font-bold
                        dark:text-gray-800
                        tv:text-xl
                    ">
                        MODALIDAD:
                    </span>

                    <TvSelect
                        value={modalidadSeleccionada}
                        options={modalidadesUnicas}
                        placeholder="Todas las modalidades"
                        onChange={handleModalidadChange}
                    />

                </div>


                {/* TIPO */}

                <div className="flex flex-col gap-1">

                    <span className="
                        font-bold
                        dark:text-gray-800
                        tv:text-xl
                    ">
                        TIPO:
                    </span>

                    <TvSelect
                        value={tipoSeleccionado}
                        options={tiposUnicos}
                        placeholder="Todos los tipos"
                        onChange={handleTipoChange}
                    />

                </div>


                {/* TORNEO */}

                <div className="flex flex-col gap-1">

                    <span className="
                        font-bold
                        dark:text-gray-800
                        tv:text-xl
                    ">
                        TORNEO:
                    </span>

                    <TvSelect
                        value={torneoSeleccionado}
                        options={torneosFiltrados}
                        placeholder="Todos los torneos"
                        disabled={!torneosFiltrados.length}
                        onChange={handleTorneoChange}
                    />

                </div>

            </nav>


            {/* =================================================
                SIN RIVAL
            ================================================= */}

            {!equipoSeleccionado ? (

                <p className="
                    text-center
                    mt-6
                    text-gray-500
                    dark:text-gray-800
                    font-semibold
                    tv:text-2xl
                    tv:mt-12
                ">
                    Selecciona un rival para ver estadísticas
                </p>

            ) : (

                <div className="
                    mt-6
                    overflow-x-auto
                    tv:mt-12
                ">

                    <h2 className="
                        text-xl
                        font-bold
                        text-center
                        dark:text-gray-800
                        mb-4
                        tv:text-4xl
                        tv:mb-8
                    ">
                        THE STRONGEST vs {equipoSeleccionado}
                    </h2>


                    {/* =================================================
                        SIN PARTIDOS
                    ================================================= */}

                    {partidosFiltrados.length === 0 ? (

                        <p className="
                            text-center
                            text-gray-500
                            tv:text-xl
                        ">
                            No hay partidos con los filtros seleccionados
                        </p>

                    ) : (

                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-3
                            gap-4
                            mb-6
                            text-center
                            tv:gap-8
                            tv:mb-10
                        ">

                            <div className="
                                border
                                rounded
                                p-3
                                bg-green-100
                                dark:text-gray-800
                                font-bold
                                tv:p-6
                                tv:text-2xl
                            ">
                                Ganados: {resumen.ganado}
                            </div>


                            <div className="
                                border
                                rounded
                                p-3
                                bg-gray-100
                                dark:text-gray-800
                                font-bold
                                tv:p-6
                                tv:text-2xl
                            ">
                                Empatados: {resumen.empatado}
                            </div>


                            <div className="
                                border
                                rounded
                                p-3
                                bg-red-100
                                dark:text-gray-800
                                font-bold
                                tv:p-6
                                tv:text-2xl
                            ">
                                Perdidos: {resumen.perdido}
                            </div>

                        </div>

                    )}

                </div>

            )}


            {/* =================================================
                GRÁFICA
            ================================================= */}

            {equipoSeleccionado && (

                <div className="
                    w-full
                    h-64
                    mb-8
                    tv:h-96
                    tv:mb-12
                ">

                    <h3 className="
                        text-lg
                        font-bold
                        dark:text-gray-800
                        text-center
                        mb-2
                        tv:text-3xl
                        tv:mb-6
                    ">
                        Rendimiento
                    </h3>


                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                        className="
                            bg-yellow-100
                            font-semibold
                            text-black
                        "
                    >

                        <BarChart data={dataGrafica}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />

                            <YAxis allowDecimals={false} />

                            <Tooltip />

                            <Bar
                                dataKey="value"
                                fill="#3f3f3e"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            )}

        </div>

    );

};

export default EstadisticasPartidos;