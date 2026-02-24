const AudiovisualCard = ({ item }) => {
  return (
    <div className="bg-yellow-100 rounded-xl shadow overflow-hidden">

      {/* VIDEO O IMAGEN */}
      <img
          src={`/audiovisual/${item.imagen}`}
          alt={item.titulo}
          className="w-full h-56 object-cover"
        />

      {/* INFO */}
      <div className="p-4 space-y-1">
        <h3 className="font-bold text-lg text-center">
          {item.titulo}
        </h3>

        <p className="text-sm italic text-center text-gray-700">
          {item.tipo} · {item.anio} · {item.duracion}
        </p>

        <p className="text-sm text-gray-800 text-center">
          {item.descripcion}
        </p>

        {!item.youtubeId && (
          <p className="text-xs text-center text-red-700 mt-2">
            {item.nota}
          </p>
        )}
      </div>
    </div>
  );
};

export default AudiovisualCard;