import data from "../data/partidos_historicos.json";
import PartidosCard from "../components/PartidosCard";

const PartidosHistoricos = () => {
  const matches = [...data];
    return (
    <div className="p-6 space-y-8">

      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        PARTIDOS HISTORICOS
      </h1>

      {/* LISTA */}
      <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map(partidos => (
          <PartidosCard key={partidos.id} partidos={partidos} />
        ))}
      </div>

    </div>
  );
};

export default PartidosHistoricos;