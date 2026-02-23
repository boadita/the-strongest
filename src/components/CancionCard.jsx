const CancionCard = ({ cancion }) => {
  return (
    <div className="bg-yellow-100 rounded-xl shadow overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${cancion.youtubeId}`}
          title={cancion.titulo}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg dark:text-gray-800 text-center">
          {cancion.titulo}
        </h3>

        <p className="text-sm italic text-center text-gray-700">
          {cancion.tipo}
        </p>

        <p className="text-sm mt-2 text-gray-800 text-center">
          {cancion.descripcion}
        </p>
      </div>
    </div>
  );
};

export default CancionCard;