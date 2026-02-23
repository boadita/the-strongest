const PartidosCard = ({ partidos }) => {
  return (
    <div className="bg-yellow-200 rounded-xl shadow overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${partidos.youtubeId}`}
          title={partidos.partido}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-center">
          {partidos.partido}
        </h3>

        <p className="text-sm font-semibold text-center text-gray-700">
          {partidos.fecha}
        </p>
      </div>
    </div>
  );
};

export default PartidosCard;