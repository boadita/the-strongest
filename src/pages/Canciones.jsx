import { useState } from "react";
import data from "../data/canciones.json";
import CancionCard from "../components/CancionCard";

const Canciones = () => {
  const [tipo, setTipo] = useState("Todas");

  const tipos = [
    "Todas",
    "Banda",
    "Huayño",
    "Bailable",
    "Histórica",
    "Folklore",
    "Rock",
    "Oficial"
  ];

  const cancionesFiltradas =
    tipo === "Todas"
      ? data
      : data.filter(c => c.tipo === tipo);

  return (
    <div className="p-6 space-y-8">

      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        CANCIONES DEL CLUB
      </h1>

      {/* BOTONES */}
      <div className="flex justify-center gap-3 flex-wrap">
        {tipos.map(t => (
          <button
            key={t}
            onClick={() => setTipo(t)}
            className={`px-4 py-2 rounded font-bold
              ${
                tipo === t
                  ? "bg-black text-yellow-400"
                  : "bg-yellow-100 hover:bg-black hover:text-yellow-300"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* LISTA */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cancionesFiltradas.map(cancion => (
          <CancionCard key={cancion.id} cancion={cancion} />
        ))}
      </div>

    </div>
  );
};

export default Canciones;