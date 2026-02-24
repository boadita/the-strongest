const AudiovisualCard = ({ item }) => {
    return (
        <div className="bg-yellow-200 rounded-xl shadow overflow-hidden hover:scale-105 transition">

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

                <p className="text-sm font-bold text-center text-gray-700">
                    {item.tipo.toUpperCase()} · {item.anio} · {item.duracion}
                </p>

                <p className="text-sm text-gray-800 text-center">
                    {item.descripcion}
                </p>

                {!item.youtubeID ? (
                    <p className="text-xs text-center text-red-700 font-bold mt-2">
                        {item.nota}
                    </p>
                ) : (
                    <a href={`https://www.youtube.com/watch?v=${item.youtubeID}
            `} target="blank">
                        <div className="grid place-items-center">
                            <p className="text-center px-3 sm:px-4 py-2 rounded font-bold text-sm sm:text-base bg-yellow-500 hover:bg-black hover:text-yellow-400">
                                VER
                            </p>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
};

export default AudiovisualCard;