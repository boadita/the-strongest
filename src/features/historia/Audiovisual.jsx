import data from "../../data/audiovisual.json";
import AudiovisualCard from "../../components/AudiovisualCard";

const Audiovisual = () => {

  const filmografia = [...data];

  return (
    <div className="p-6 space-y-8">

      <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        FILMOGRAFÍA
      </h1>

      {/* GRID */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {filmografia.map(item => (
          <AudiovisualCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default Audiovisual;