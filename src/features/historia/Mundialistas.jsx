import { useState } from "react";
import mundialistas from "../../data/mundialistas.json";

const Mundialistas = () => {
  const [rol, setRol] = useState("Todos");

  const listaFiltrada =
    rol === "Todos"
      ? mundialistas
      : mundialistas.filter(m => m.rol === rol);

  return (
    <div className="space-y-6">

      {/* TÍTULO */}
      <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        MUNDIALISTAS
      </h1>

      <p className="text-gray-700">
        Jugadores y entrenadores que representaron a sus selecciones en Copas
        del Mundo y que, en algún momento de su carrera, formaron parte de
        <strong> The Strongest</strong>.
      </p>

      {/* FILTROS */}
      <div className="flex justify-center gap-2 flex-wrap px-2">
        {["Todos", "Jugador", "Entrenador"].map(op => (
          <button
            key={op}
            onClick={() => setRol(op)}
            className={`px-3 sm:px-4 py-2 rounded font-bold text-sm sm:text-base
              ${
                rol === op
                  ? "bg-black text-yellow-400"
                  : "bg-yellow-300 hover:bg-black hover:text-yellow-300"
              }`}
          >
            {op === "Todos" ? "Todos" : `${op}es`}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {listaFiltrada.map(persona => (
          <div
            key={persona.nombre}
            className="border rounded-lg shadow bg-yellow-200 overflow-hidden hover:scale-105 transition"
          >
            <img
              src={`/mundialistas/${persona.id}.jpg`}
              alt={persona.nombre}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "/mundialistas/default.jpg";
              }}
            />

            <div className="p-4 space-y-1 text-center">
              <h2 className="text-lg font-bold">
                {persona.nombre}
              </h2>

              <p className="text-sm text-gray-600">
                {persona.rol} – {persona.pais}
              </p>

              <p className="text-sm">
                <strong>Mundiales:</strong>{" "}
                {persona.mundiales.join(", ")}
              </p>

              <p className="text-sm">
                <strong>Etapa en The Strongest:</strong>{" "}
                {persona.etapaStrongest}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Mundialistas;
