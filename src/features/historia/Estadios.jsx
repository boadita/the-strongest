import { useState, useMemo } from "react";
import estadios from "../../data/estadios.json";

const Estadios = () => {
  const [tipo, setTipo] = useState("nacionales");
  const [paisSeleccionado, setPaisSeleccionado] = useState("Todos");

  /* UTILIDADES */
  const slug = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

  /* NACIONALES */
  const estadiosNacionales = useMemo(() => {
    return estadios
      .filter((e) => e.PAIS === "BOLIVIA")
      .sort((a, b) => {
    // 1. Estadio Hernando Siles primero y Rafael Mendoza Castellon segundo
    if (a.ESTADIO === "HERNANDO SILES") return -1;
    if (b.ESTADIO === "HERNANDO SILES") return 1;
    if (a.ESTADIO === "RAFAEL MENDOZA CASTELLÓN") return -1;
    if (b.ESTADIO === "RAFAEL MENDOZA CASTELLÓN") return 1;

    // 2. La Paz ciudad primero luego El Alto
    if (a.CIUDAD === "LA PAZ") return -1;
    if (b.CIUDAD === "LA PAZ") return 1;
    if (a.CIUDAD === "EL ALTO") return -1;
    if (b.CIUDAD === "EL ALTO") return 1;

    // 3. Región La Paz después
    if (a.REGION === "LA PAZ" && b.REGION !== "LA PAZ") return -1;
    if (b.REGION === "LA PAZ" && a.REGION !== "LA PAZ") return 1;

    // 4. Otras regiones ordenadas
    if (a.REGION !== b.REGION) {
      return a.REGION.localeCompare(b.REGION);
    }

    // 5. Ciudades dentro de la región
    return a.CIUDAD.localeCompare(b.CIUDAD);
  });
  }, []);

  /* INTERNACIONALES */
  const estadiosInternacionales = useMemo(() => {
    let lista = estadios.filter((e) => e.PAIS !== "BOLIVIA");

    if (paisSeleccionado !== "Todos") {
      lista = lista.filter((e) => e.PAIS === paisSeleccionado);
    }
const ciudades = Object.values(lista);

    return ciudades.sort((a, b) => {
      // 1. País
      if (a.PAIS !== b.PAIS) {
        return a.PAIS.localeCompare(b.PAIS);
      }
       // 2. Region
    if (a.REGION !== b.REGION) {
      return a.REGION.localeCompare(b.REGION);
    }

      //  3. Ciudad
      return a.CIUDAD.localeCompare(b.CIUDAD);
    });
  }, [paisSeleccionado]);

  const paises = [
    "Todos",
    ...new Set(
      estadios
        .filter((e) => e.PAIS !== "BOLIVIA")
        .map((e) => e.PAIS)
    ),
  ];

  const estadiosMostrar =
    tipo === "nacionales"
      ? estadiosNacionales
      : estadiosInternacionales;

  return (
    <div className="space-y-6">

      {/* TÍTULO */}
      <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        ESTADIOS
      </h1>

      {/* BOTONES PRINCIPALES */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setTipo("nacionales")}
          className={`px-4 py-2 rounded font-bold
            ${tipo === "nacionales"
              ? "bg-black text-yellow-400"
              : "bg-yellow-300 hover:bg-black hover:text-yellow-300"
            }`}
        >
          🇧🇴 Nacionales
        </button>

        <button
          onClick={() => setTipo("internacionales")}
          className={`px-4 py-2 rounded font-bold
            ${tipo === "internacionales"
              ? "bg-black text-yellow-400"
              : "bg-yellow-300 hover:bg-black hover:text-yellow-300"
            }`}
        >
          🌍 Internacionales
        </button>
      </div>

      {/* FILTRO POR PAÍS */}
      {tipo === "internacionales" && (
        <div className="max-w-xs">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <span className="font-bold whitespace-nowrap">Seleccione pais: </span>
            <select
              value={paisSeleccionado}
              onChange={(e) => setPaisSeleccionado(e.target.value)}
              className="border p-2 rounded bg-white font-semibold w-full"
            >
              {paises.map((pais) => (
                <option key={pais} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* GRID DE ESTADIOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {estadiosMostrar.map((estadio) => (
          <div
            key={estadio.ESTADIO}
            className="border rounded-lg shadow hover:shadow-lg transition bg-yellow-200 hover:scale-105"
          >
            <img
              src={`/estadios/${slug(estadio.ESTADIO)}.jpg`}
              alt={estadio.ESTADIO}
              className="w-full h-40 object-cover rounded-t-lg"
              onError={(e) => {
                e.target.src = "/estadios/default.jpg";
              }}
            />

            <div className="p-4 text-center bg-yellow-200">
              <h2 className="font-bold text-lg">
                {estadio.ESTADIO}
              </h2>

              <p className="text-sm text-gray-600">
                {estadio.CIUDAD} – {estadio.REGION}
              </p>

              <p className="text-sm font-semibold">
                {estadio.PAIS}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Estadios;
