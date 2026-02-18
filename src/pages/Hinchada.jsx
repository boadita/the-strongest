import { useState } from "react";
import hinchada from "../data/hinchada.json";
import HinchadaCard from "../components/HinchadaCard";

const secciones = [
  { key: "barras", label: "Barras" },
  { key: "filialesLocales", label: "Filiales Locales" },
  { key: "filialesInterior", label: "Filiales del Interior" },
  { key: "filialesInternacionales", label: "Filiales Internacionales" }
];

const Hinchada = () => {
  const [seccionActiva, setSeccionActiva] = useState("barras");

  return (
    <div className="p-6 space-y-8">

      {/* TÍTULO */}
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        HINCHADA
      </h1>

      {/* BOTONES */}
      <div className="flex flex-wrap justify-center gap-4">
        {secciones.map(sec => (
          <button
            key={sec.key}
            onClick={() => setSeccionActiva(sec.key)}
            className={`px-5 py-2 rounded font-bold transition
              ${
                seccionActiva === sec.key
                  ? "bg-black text-yellow-400"
                  : "bg-yellow-100 hover:bg-black hover:text-yellow-300"
              }`}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* CONTENIDO */}
      <section className="mt-6">
        <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {hinchada[seccionActiva]?.map(item => (
            <HinchadaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Hinchada;
