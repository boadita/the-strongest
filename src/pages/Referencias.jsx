import libros from "../data/libros.json";

const Referencias = () => {
    return (
        <div className="space-y-6">

            {/* TÍTULO */}
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                REFERENCIAS BIBLIOGRÁFICAS
            </h1>

            <p className="text-gray-700">
                Libros y publicaciones que se escribieron sobre historia, relatos
                y anécdotas sobre el club <strong> The Strongest </strong> 
                de los cuales se realizaron consultas.
            </p>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {libros.map(lib => (
                    <div
                        key={lib.id}
                        className="border rounded-lg shadow bg-yellow-200 overflow-hidden hover:scale-105 transition"
                    >
                        {/* CONTENEDOR DE IMAGEN */}
                        <div className="w-full h-56 flex items-center justify-center bg-yellow-200">
                            <img
                                src={`/libros/${lib.id}.jpg`}
                                alt={lib.titulo}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                    e.target.src = "/libros/default.jpg";
                                }}
                            />
                        </div>

                        {/* CONTENIDO */}

                        <div className="p-4 space-y-1 text-center dark:text-gray-800">
                            <h2 className="text-lg font-bold">
                                {lib.titulo}
                            </h2>

                            <p className="text-sm text-gray-600">
                                {lib.autor}
                            </p>

                            <p className="text-sm">
                                <strong>Año:</strong>{" "}
                                {lib.anio}
                            </p>

                            <p className="text-sm">
                                {lib.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Referencias;
