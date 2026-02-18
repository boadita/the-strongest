import figuras from "../../data/figuras.json";

const Figuras = () => {
  return (
    <section>
       <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        FIGURAS HISTÓRICAS
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {figuras.map(jugador => (
          <div key={jugador.id}
          className="bg-yellow-200 rounded shadow hover:shadow-lg hover:scale-105 transition">
            <img
              src={`/figuras_historicas/${jugador.id}.jpg`}
              alt={jugador.nombre}
              className="w-full h-48 object-cover rounded-t"
            />

            <div className="p-3 rounded text-center">
              <h3 className="font-semibold">{jugador.nombre}</h3>
              <p className="text-sm text-gray-600">{jugador.posicion}</p>
              <h4 className="font-semibold">{jugador.pais}</h4>
              <h4 className="font-semibold">PERÍODO EN THE STRONGEST</h4>
              <p className="text-sm text-gray-600">{jugador.epoca}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Figuras
