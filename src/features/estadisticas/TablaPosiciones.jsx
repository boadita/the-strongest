import tablaData from "../../data/posiciones.json";

const TablaPosiciones = () => {

  // Clonamos el array para no mutar el original
  const tablaOrdenada = [...tablaData].sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return b.GD - a.GD;
  });

  return (
    <div className="overflow-x-auto items-center justify-center flex flex-col">
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">TABLA DE POSICIONES</h1>
      <h2 className='font-bold text-center'>TEMPORADA 2025</h2>
      {/* CONTENEDOR RESPONSIVE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs sm:text-sm md:text-base">

          <thead className="bg-black text-white sticky top-0 z-10">
            <tr>
              <th className="px-2 py-2 whitespace-nowrap">#</th>
              <th className="px-2 py-2 whitespace-nowrap">Equipo</th>
              <th className="px-2 py-2 whitespace-nowrap">PJ</th>
              <th className="px-2 py-2 whitespace-nowrap">PG</th>
              <th className="px-2 py-2 whitespace-nowrap">PE</th>
              <th className="px-2 py-2 whitespace-nowrap">PP</th>
              <th className="px-2 py-2 whitespace-nowrap">GF</th>
              <th className="px-2 py-2 whitespace-nowrap">GC</th>
              <th className="px-2 py-2 whitespace-nowrap">GD</th>
              <th className="px-2 py-2 whitespace-nowrap">PTS</th>
            </tr>
          </thead>

          <tbody className="bg-yellow-100">
            {tablaOrdenada.map((equipo, index) => (
              <tr
                key={equipo.EQUIPO}
                className="text-center border-b hover:bg-yellow-200 transition-colors"
              >
                <td>{index + 1}</td>
                <td className="px-2 font-bold">
                  {equipo.EQUIPO}
                </td>
                <td>{equipo.PJ}</td>
                <td>{equipo.PG}</td>
                <td>{equipo.PE}</td>
                <td>{equipo.PP}</td>
                <td>{equipo.GF}</td>
                <td>{equipo.GC}</td>
                <td>{equipo.GD}</td>
                <td className="font-bold">{equipo.PTS}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TablaPosiciones;
