import { useState } from "react";
import { Link } from "react-router-dom";
import historial from "../../data/historial.json";

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
    const modalidadesUnicas = [...new Set(histo.map(h => h.MODALIDAD))];
    const tiposUnicos = [...new Set(histo.map(h => h.TIPO))];
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

    const ciudadesUnicas = [...new Set(histo.map(h => h.CIUDAD))];

    const estadiosFiltrados = [
        ...new Set(
            histo
                .filter(h =>
                    (ciudadSeleccionada === "" || h.CIUDAD === ciudadSeleccionada)
                )
                .map(h => h.ESTADIO)
        )
    ];

    const handleTipoChange = (e) => {
        setTipoSeleccionado(e.target.value);
        setTorneoSeleccionado("");
        setPaginaActual(1);
    };

    const handleModalidadChange = (e) => {
        setModalidadSeleccionada(e.target.value);
        setTorneoSeleccionado("");
        setPaginaActual(1);
    };

    const handleCiudadChange = (e) => {
        setciudadSeleccionada(e.target.value);
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
        <div className="space-y-6 p-6">
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* AÑO */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold whitespace-nowrap">AÑO: </span>
                    <select
                        value={anioSeleccionado}
                        onChange={e => {
                            setAnioSeleccionado(e.target.value);
                            setPaginaActual(1);
                        }}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todos los años</option>

                        {aniosUnicos.map(a => (
                            <option key={a} value={a}>
                                {a}
                            </option>
                        ))}
                    </select>
                </div>
                {/* EQUIPO */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold whitespace-nowrap">RIVAL: </span>
                    <select
                        value={equipoSeleccionado}
                        onChange={e => {
                            setEquipoSeleccionado(e.target.value);
                            setPaginaActual(1);
                        }}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todos los equipos</option>

                        {equiposUnicos.map(eq => (
                            <option key={eq} value={eq}>
                                {eq}
                            </option>
                        ))}
                    </select>
                </div>
                {/* CIUDAD */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold whitespace-nowrap">CIUDAD: </span>
                    <select
                        value={ciudadSeleccionada}
                        onChange={handleCiudadChange}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todas las ciudades</option>
                        {ciudadesUnicas.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold whitespace-nowrap">ESTADIO: </span>
                    {/* ESTADIO */}
                    <select
                        value={estadioSeleccionado}
                        onChange={e => {
                            setestadioSeleccionado(e.target.value);
                            setPaginaActual(1);
                        }}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                        disabled={!estadiosFiltrados.length}
                    >
                        <option value="">Todos los estadios</option>
                        {estadiosFiltrados.map(es => (
                            <option key={es} value={es}>{es}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold whitespace-nowrap">MODALIDAD: </span>
                    {/* MODALIDAD */}
                    <select
                        value={modalidadSeleccionada}
                        onChange={handleModalidadChange}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todas las modalidades</option>
                        {modalidadesUnicas.map(m => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold whitespace-nowrap">TIPO: </span>
                    {/* TIPO */}
                    <select
                        value={tipoSeleccionado}
                        onChange={handleTipoChange}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                    >
                        <option value="">Todos los tipos</option>
                        {tiposUnicos.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="font-bold whitespace-nowrap">TORNEO: </span>
                    {/* TORNEO */}
                    <select
                        value={torneoSeleccionado}
                        onChange={e => {
                            setTorneoSeleccionado(e.target.value);
                            setPaginaActual(1);
                        }}
                        className="border p-2 rounded bg-white font-semibold w-full md:w-40"
                        disabled={!torneosFiltrados.length}
                    >
                        <option value="">Todos los torneos</option>
                        {torneosFiltrados.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
            </nav>
            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">HISTORIAL DE PARTIDOS</h1>
            {/* RESULTADO */}
            <div className="mt-6">
                <div className="overflow-x-auto w-full">
                    <table className="min-w-[1000px] w-full border-collapse text-xs sm:text-sm md:text-base">

                        <thead className="bg-black text-white sticky top-0 z-10">
                            <tr>
                                <th className="border px-2 py-2 whitespace-nowrap">Id</th>
                                <th className="border px-2 py-2 whitespace-nowrap">FECHA</th>
                                <th className="border px-2 py-2 whitespace-nowrap">EQUIPO</th>
                                <th className="border px-2 py-2 whitespace-nowrap">RESULTADO</th>
                                <th className="border px-2 py-2 whitespace-nowrap">EQUIPO2</th>
                                <th className="border px-2 py-2 whitespace-nowrap">ESTADIO</th>
                                <th className="border px-2 py-2 whitespace-nowrap">CIUDAD</th>
                                <th className="border px-2 py-2 whitespace-nowrap">TORNEO</th>
                            </tr>
                        </thead>

                        <tbody>
                            {datosPaginados.map(h => (
                                <tr
                                    key={h.Id}
                                    className="font-semibold bg-yellow-100 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="border px-2 py-1 text-center">{h.Id}</td>
                                    <td className="border px-2 py-1 text-center whitespace-nowrap">{h.FECHA}</td>
                                    <td className="border px-2 py-1 text-center whitespace-nowrap">{h.EQUIPO}</td>
                                    <td className="border px-2 py-1 text-center">{h.RESULTADO}</td>
                                    <td className="border px-2 py-1 text-center whitespace-nowrap">{h.EQUIPO2}</td>
                                    <td className="border px-2 py-1 text-center whitespace-nowrap">{h.ESTADIO}</td>
                                    <td className="border px-2 py-1 text-center whitespace-nowrap">{h.CIUDAD}</td>
                                    <td className="border px-2 py-1 text-center whitespace-nowrap">{h.TORNEO}</td>
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
                    className="px-3 py-1 border rounded font-bold bg-yellow-100 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ⏮
                </button>

                {obtenerPaginasVisibles().map((num, index) =>
                    num === "..." ? (
                        <span key={`dots-${index}`} className="px-2 text-gray-500">
                            ...
                        </span>
                    ) : (
                        <button
                            key={num}
                            onClick={() => setPaginaActual(num)}
                            className={`px-3 py-1 border rounded font-bold
        ${paginaActual === num
                                    ? "bg-black text-yellow-400"
                                    : "bg-yellow-100 hover:bg-black hover:text-yellow-400"
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
                    className="px-3 py-1 border rounded font-bold bg-yellow-100 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ⏭
                </button>
            </div>
                <Link to="/estadisticas_partidos"
                className="grid place-items-center">
                <button
                    className="px-3 py-1 border rounded font-bold bg-yellow-100 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ESTADÍSTICAS POR RIVAL
                </button>
                </Link>
                <div className="mt-6">
      </div>
        </div>
    );
};

export default Historial;