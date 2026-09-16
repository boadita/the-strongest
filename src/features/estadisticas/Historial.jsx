import { useState } from "react";
import { Link } from "react-router-dom";
import historial from "../../data/historial.json";
import TvSelect from "../../components/TvSelect";

const Historial = () => {

    // Clonamos el array para no mutar el original
    const histo = [...historial];

    const [anioSeleccionado, setAnioSeleccionado] = useState("");
    const [modalidadSeleccionada, setModalidadSeleccionada] = useState("");
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");
    const [torneoSeleccionado, setTorneoSeleccionado] = useState("");
    const [ciudadSeleccionada, setciudadSeleccionada] = useState("");
    const [estadioSeleccionado, setestadioSeleccionado] = useState("");
    const [equipoSeleccionado, setEquipoSeleccionado] = useState("");

    const aniosUnicos = [
        ...new Set(
            histo.map(h => h.FECHA.slice(0, 4))
        )
    ].sort((a, b) => b - a); // más recientes primero

    const modalidadesUnicas = [
        ...new Set(histo.map(h => h.MODALIDAD))
    ];

    const tiposUnicos = [
        ...new Set(histo.map(h => h.TIPO))
    ];

    const equiposUnicos = [
        ...new Set(
            histo.flatMap(h => [h.EQUIPO, h.EQUIPO2])
        )
    ].sort();

    const torneosFiltrados = [
        ...new Set(
            histo
                .filter(h =>
                    (tipoSeleccionado === "" || h.TIPO === tipoSeleccionado) &&
                    (modalidadSeleccionada === "" || h.MODALIDAD === modalidadSeleccionada)
                )
                .map(h => h.TORNEO)
        )
    ];

    const ciudadesUnicas = [
        ...new Set(histo.map(h => h.CIUDAD))
    ];

    const estadiosFiltrados = [
        ...new Set(
            histo
                .filter(h =>
                    (ciudadSeleccionada === "" || h.CIUDAD === ciudadSeleccionada)
                )
                .map(h => h.ESTADIO)
        )
    ];

    const handleTipoChange = (valor) => {
        setTipoSeleccionado(valor);
        setTorneoSeleccionado("");
        setPaginaActual(1);
    };

    const handleModalidadChange = (valor) => {
        setModalidadSeleccionada(valor);
        setTorneoSeleccionado("");
        setPaginaActual(1);
    };

    const handleCiudadChange = (valor) => {
        setciudadSeleccionada(valor);
        setestadioSeleccionado("");
        setPaginaActual(1);
    };

    const histoFiltrado = histo.filter(h =>
        (modalidadSeleccionada === "" || h.MODALIDAD === modalidadSeleccionada) &&
        (tipoSeleccionado === "" || h.TIPO === tipoSeleccionado) &&
        (torneoSeleccionado === "" || h.TORNEO === torneoSeleccionado) &&
        (ciudadSeleccionada === "" || h.CIUDAD === ciudadSeleccionada) &&
        (estadioSeleccionado === "" || h.ESTADIO === estadioSeleccionado) &&
        (equipoSeleccionado === "" ||
            h.EQUIPO === equipoSeleccionado ||
            h.EQUIPO2 === equipoSeleccionado) &&
        (anioSeleccionado === "" ||
            h.FECHA.slice(0, 4) === anioSeleccionado)
    );

    const obtenerPaginasVisibles = () => {
        const paginas = [];
        const rango = 2; // cuántas páginas a cada lado

        const inicio = Math.max(2, paginaActual - rango);
        const fin = Math.min(totalPaginas - 1, paginaActual + rango);

        paginas.push(1);

        if (inicio > 2) {
            paginas.push("...");
        }

        for (let i = inicio; i <= fin; i++) {
            paginas.push(i);
        }

        if (fin < totalPaginas - 1) {
            paginas.push("...");
        }

        if (totalPaginas > 1) {
            paginas.push(totalPaginas);
        }

        return paginas;
    };

    const filasPorPagina = 20;

    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = Math.ceil(histoFiltrado.length / filasPorPagina);

    const indiceInicio = (paginaActual - 1) * filasPorPagina;
    const indiceFin = indiceInicio + filasPorPagina;

    const datosPaginados = histoFiltrado.slice(indiceInicio, indiceFin);

    return (
        <div className="space-y-6 tv:space-y-10 tv:px-8 p-6">

            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* AÑO */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold dark:text-gray-800 whitespace-nowrap">
                        AÑO:
                    </span>

                    <TvSelect
                        value={anioSeleccionado}
                        options={aniosUnicos}
                        placeholder="Todos los años"
                        onChange={(valor) => {
                            setAnioSeleccionado(valor);
                            setPaginaActual(1);
                        }}
                    />
                </div>

                {/* EQUIPO */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold dark:text-gray-800 whitespace-nowrap">
                        RIVAL:
                    </span>

                    <TvSelect
                        value={equipoSeleccionado}
                        options={equiposUnicos}
                        placeholder="Todos los equipos"
                        onChange={(valor) => {
                            setEquipoSeleccionado(valor);
                            setPaginaActual(1);
                        }}
                    />
                </div>

                {/* CIUDAD */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold dark:text-gray-800 whitespace-nowrap">
                        CIUDAD:
                    </span>

                    <TvSelect
                        value={ciudadSeleccionada}
                        options={ciudadesUnicas}
                        placeholder="Todas las ciudades"
                        onChange={handleCiudadChange}
                    />
                </div>

                {/* ESTADIO */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold dark:text-gray-800 whitespace-nowrap">
                        ESTADIO:
                    </span>

                    <TvSelect
                        value={estadioSeleccionado}
                        options={estadiosFiltrados}
                        placeholder="Todos los estadios"
                        disabled={!estadiosFiltrados.length}
                        onChange={(valor) => {
                            setestadioSeleccionado(valor);
                            setPaginaActual(1);
                        }}
                    />
                </div>

                {/* MODALIDAD */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold dark:text-gray-800 whitespace-nowrap">
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
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold dark:text-gray-800 whitespace-nowrap">
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
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold dark:text-gray-800 whitespace-nowrap">
                        TORNEO:
                    </span>

                    <TvSelect
                        value={torneoSeleccionado}
                        options={torneosFiltrados}
                        placeholder="Todos los torneos"
                        disabled={!torneosFiltrados.length}
                        onChange={(valor) => {
                            setTorneoSeleccionado(valor);
                            setPaginaActual(1);
                        }}
                    />
                </div>

            </nav>

            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                HISTORIAL DE PARTIDOS
            </h1>

            {/* RESULTADO */}
            <div className="mt-6">
                <div className="overflow-x-auto w-full">

                    <table className="min-w-[1000px] w-full border-collapse text-xs sm:text-sm md:text-base">

                        <thead className="bg-black text-white sticky top-0 z-10">
                            <tr>
                                <th className="border px-2 py-2 whitespace-nowrap">
                                    Id
                                </th>

                                <th className="border px-2 py-2 whitespace-nowrap">
                                    FECHA
                                </th>

                                <th className="border px-2 py-2 whitespace-nowrap">
                                    EQUIPO
                                </th>

                                <th className="border px-2 py-2 whitespace-nowrap">
                                    RESULTADO
                                </th>

                                <th className="border px-2 py-2 whitespace-nowrap">
                                    EQUIPO2
                                </th>

                                <th className="border px-2 py-2 whitespace-nowrap">
                                    ESTADIO
                                </th>

                                <th className="border px-2 py-2 whitespace-nowrap">
                                    CIUDAD
                                </th>

                                <th className="border px-2 py-2 whitespace-nowrap">
                                    TORNEO
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {datosPaginados.map(h => (
                                <tr
                                    key={h.Id}
                                    className="font-semibold bg-yellow-100 dark:text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="border px-2 py-1 text-center">
                                        {h.Id}
                                    </td>

                                    <td className="border px-2 py-1 text-center whitespace-nowrap">
                                        {h.FECHA}
                                    </td>

                                    <td className="border px-2 py-1 text-center whitespace-nowrap">
                                        {h.EQUIPO}
                                    </td>

                                    <td className="border px-2 py-1 text-center">
                                        {h.RESULTADO}
                                    </td>

                                    <td className="border px-2 py-1 text-center whitespace-nowrap">
                                        {h.EQUIPO2}
                                    </td>

                                    <td className="border px-2 py-1 text-center whitespace-nowrap">
                                        {h.ESTADIO}
                                    </td>

                                    <td className="border px-2 py-1 text-center whitespace-nowrap">
                                        {h.CIUDAD}
                                    </td>

                                    <td className="border px-2 py-1 text-center whitespace-nowrap">
                                        {h.TORNEO}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>

            {/* PAGINACIÓN */}
            <div className="flex justify-center mt-4 gap-2 flex-wrap">

                <button
                    onClick={() =>
                        setPaginaActual(p => Math.max(p - 1, 1))
                    }
                    disabled={paginaActual === 1}
                    className="px-3 py-1 border rounded font-bold dark:text-gray-800 bg-yellow-100 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ⏮
                </button>

                {obtenerPaginasVisibles().map((num, index) =>
                    num === "..." ? (
                        <span
                            key={`dots-${index}`}
                            className="px-2 text-gray-500"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={num}
                            onClick={() => setPaginaActual(num)}
                            className={`px-3 py-1 border rounded font-bold
                                ${
                                    paginaActual === num
                                        ? "bg-black text-yellow-400"
                                        : "bg-yellow-100 dark:text-gray-800 hover:bg-black hover:text-yellow-400"
                                }`}
                        >
                            {num}
                        </button>
                    )
                )}

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

            <Link
                to="/estadisticas_partidos"
                className="grid place-items-center"
            >
                <button
                    className="px-3 py-1 border rounded font-bold bg-yellow-100 dark:text-gray-800 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ESTADÍSTICAS POR RIVAL
                </button>
            </Link>

        </div>
    );
};

export default Historial;