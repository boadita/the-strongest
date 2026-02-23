import { useState, useMemo } from "react";
import estadios from "../../data/estadios.json";

const Ciudades = () => {
  const [tipo, setTipo] = useState("nacionales");
  const [paisSeleccionado, setPaisSeleccionado] = useState("Todos");

  /* UTILIDADES */
  const slug = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

  /* AGRUPAR POR CIUDAD */
  const agruparPorCiudad = (lista) => {
    return lista.reduce((acc, item) => {
      if (!acc[item.CIUDAD]) {
        acc[item.CIUDAD] = {
          ciudad: item.CIUDAD,
          region: item.REGION,
          pais: item.PAIS,
          estadios: []
        };
      }
      acc[item.CIUDAD].estadios.push(item.ESTADIO);
      return acc;
    }, {});
  };

  /* NACIONALES */
  const ciudadesNacionales = useMemo(() => {
    const bolivia = estadios.filter(e => e.PAIS === "BOLIVIA");
    const ciudades = Object.values(agruparPorCiudad(bolivia));

    return ciudades.sort((a, b) => {
      // 1️⃣ La Paz ciudad primero luego El Alto
      if (a.ciudad === "LA PAZ") return -1;
      if (b.ciudad === "LA PAZ") return 1;
      if (a.ciudad === "EL ALTO") return -1;
      if (b.ciudad === "EL ALTO") return 1;

      // 2️⃣ Región La Paz después
      if (a.region === "LA PAZ" && b.region !== "LA PAZ") return -1;
      if (b.region === "LA PAZ" && a.region !== "LA PAZ") return 1;

      // 3️⃣ Otras regiones ordenadas
      if (a.region !== b.region) {
        return a.region.localeCompare(b.region);
      }

      // 4️⃣ Ciudades dentro de la región
      return a.ciudad.localeCompare(b.ciudad);
    });
  }, []);

  /* INTERNACIONALES */
  const ciudadesInternacionales = useMemo(() => {
    let lista = estadios.filter(e => e.PAIS !== "BOLIVIA");
    if (paisSeleccionado !== "Todos") {
      lista = lista.filter(e => e.PAIS === paisSeleccionado);
    }
    const ciudades = Object.values(agruparPorCiudad(lista));

    return ciudades.sort((a, b) => {
      // 1️⃣ País
      if (a.pais !== b.pais) {
        return a.pais.localeCompare(b.pais);
      }
       // 2️⃣ Region
    if (a.region !== b.region) {
      return a.region.localeCompare(b.region);
    }

      //  3️⃣ Ciudad
      return a.ciudad.localeCompare(b.ciudad);
    });
  }, [paisSeleccionado]);

  const paises = [
    "Todos",
    ...new Set(
      estadios
        .filter(e => e.PAIS !== "BOLIVIA")
        .map(e => e.PAIS)
    )
  ];

  const ciudadesMostrar =
    tipo === "nacionales"
      ? ciudadesNacionales
      : ciudadesInternacionales;

  return (
    <div className="space-y-6">

      {/* TÍTULO */}
      <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        CIUDADES
      </h1>

      {/* BOTONES */}
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

      {/* FILTRO pais */}
      {tipo === "internacionales" && (
        <div className="max-w-xs">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <span className="font-bold whitespace-nowrap">Seleccione pais: </span>
            <select
              value={paisSeleccionado}
              onChange={(e) => setPaisSeleccionado(e.target.value)}
              className="border p-2 rounded font-semibold bg-white w-full"
            >
              {paises.map(pais => (
                <option key={pais} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {ciudadesMostrar.map(ciudad => (
          <div
            key={ciudad.ciudad}
            className="border rounded-lg shadow bg-yellow-200 overflow-hidden hover:scale-105 transition"
          >
            <img
              src={`/ciudades/${slug(ciudad.ciudad)}.jpg`}
              alt={ciudad.ciudad}
              className="w-full h-40 object-cover"
              onError={(e) => {
                e.target.src = "/ciudades/default.jpg";
              }}
            />

            <div className="p-4 space-y-2 text-center">
              <h2 className="text-xl font-bold">
                {ciudad.ciudad}
              </h2>

              <p className="text-sm text-gray-600">
                {ciudad.region} – {ciudad.pais}
              </p>

              <div>
                <h3 className="font-semibold text-sm">
                  Estadios:
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 text-justify">
                  {ciudad.estadios.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Ciudades;
