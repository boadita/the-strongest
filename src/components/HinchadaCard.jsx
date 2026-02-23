const HinchadaCard = ({ item }) => {
  return (
    <div className="rounded-xl shadow bg-yellow-100 overflow-hidden hover:scale-105 transition">
      <img
        src={`/hinchada/${item.imagen}`}
        alt={item.nombre}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-xl mb-1 dark:text-gray-800 text-center">
          {item.nombre}
        </h3>

        <p className="italic text-sm text-gray-700 text-center font-semibold">
          {item.ciudad}{item.pais ? `, ${item.pais}` : ""}
        </p>

        {item.barraMadre && (
          <p className="text-sm mt-1 text-gray-800">
            Filial de <strong>{item.barraMadre}</strong>
          </p>
        )}

        <p className="mt-2 text-gray-800 text-justify">
          {item.descripcion}
        </p>
      </div>
    </div>
  );
};

export default HinchadaCard;
