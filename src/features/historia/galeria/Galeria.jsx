import { useState, useEffect, useMemo } from "react";
import data from "../../../data/formaciones.json";

import DecadasSelector from "./DecadasSelector";
import AniosSelector from "./AniosSelector";
import FormacionCard from "./FormacionCard";

const Galeria = () => {

  const decadas = useMemo(() => data.map(d => d.decada), []);

  const [decadaActiva, setDecadaActiva] = useState(decadas[0]);
  const [anioActivo, setAnioActivo] = useState(null);

  const decadaData = useMemo(
    () => data.find(d => d.decada === decadaActiva),
    [decadaActiva]
  );

  const anios = useMemo(
    () => decadaData?.anios?.map(a => a.anio) || [],
    [decadaData]
  );

  // 🔥 SINCRONIZA EL AÑO CUANDO CAMBIA LA DÉCADA
  useEffect(() => {
    if (anios.length > 0) {
      setAnioActivo(anios[0]);
    }
  }, [anios]);

  const anioData = useMemo(
    () => decadaData?.anios?.find(a => a.anio === anioActivo),
    [decadaData, anioActivo]
  );

  // 🛑 Protección total
  if (!decadaData || !anioData) return null;

  return (
    <div className="space-y-6">

      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        FORMACIONES POR AÑOS
      </h1>
      <nav className="grid grid-cols-1 md:grid-cols-2">
        {/* DÉCADAS */}
        <DecadasSelector
          decadas={decadas}
          decadaActiva={decadaActiva}
          setDecadaActiva={setDecadaActiva}
        />

        {/* AÑOS */}
        <AniosSelector
          anios={anios}
          anioActivo={anioActivo}
          setAnioActivo={setAnioActivo}
        />
      </nav>

      {/* GALERÍA */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 ">
        {anioData.imagenes.map((img, i) => (
          <FormacionCard
            key={i}
            imagen={img}
            anio={anioActivo}
          />
        ))}
      </div>

    </div>
  );
};

export default Galeria;
