import { useState } from "react";
import entrenadores from "../../data/entrenadores.json";

const Entrenadores = () => {
    const entrenador = [...entrenadores];

    const filasPorPagina = 10;

    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = Math.ceil(entrenador.length / filasPorPagina);

    const indiceInicio = (paginaActual - 1) * filasPorPagina;
    const indiceFin = indiceInicio + filasPorPagina;

    const datosPaginados = entrenador.slice(indiceInicio, indiceFin);

    return (
        <div className="space-y-10">
            {/* TÍTULO */}
            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                ENTRENADORES
            </h1>
            <div className="overflow-x-auto items-center justify-center flex flex-col">
                <table className="w-200 border-collapse">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="border px-4 py-2 text-center">Año</th>
                            <th className="border px-4 py-2 text-center">Director Técnico</th>
                        </tr>
                    </thead>

                    <tbody>
  {datosPaginados.map((item, index) =>
    item.nombres.map((nombre, i) => (
      <tr
        key={`${item.año}-${i}`}
        className="text-center bg-yellow-200 hover:bg-gray-100"
      >
        {i === 0 && (
          <td
            rowSpan={item.nombres.length}
            className="border px-4 py-2 font-bold align-middle"
          >
            {item.periodo}
          </td>
        )}

        <td className="border px-4 py-2 font-semibold">
          {nombre}
        </td>
      </tr>
    ))
  )}
</tbody>
                </table>
            </div>
{/* PAGINACIÓN */}
            <div className="flex justify-center mt-4 gap-2 flex-wrap">
                <button
                    onClick={() => setPaginaActual(p => Math.max(p - 1, 1))}
                    disabled={paginaActual === 1}
                    className="px-3 py-1 border rounded font-bold bg-yellow-300 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ⏮
                </button>

                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        onClick={() => setPaginaActual(num)}
                        className={`px-3 py-1 border rounded font-bold
        ${paginaActual === num
                                ? "bg-black text-yellow-400"
                                : "bg-yellow-300 hover:bg-black hover:text-yellow-400"}`}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() =>
                        setPaginaActual(p => Math.min(p + 1, totalPaginas))
                    }
                    disabled={paginaActual === totalPaginas}
                    className="px-3 py-1 border rounded font-bold bg-yellow-300 hover:bg-black hover:text-yellow-400 disabled:opacity-50"
                >
                    ⏭
                </button>
            </div>
        </div>
    );
};

export default Entrenadores;
