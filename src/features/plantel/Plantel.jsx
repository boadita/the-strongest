import jugadores from "../../data/jugadores.json"
import { Link } from "react-router-dom"
import Cuerpo_tecnico from "./Cuerpo_tecnico"

const Plantel = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold dark:text-gray-800 mb-6 text-center">
        TEMPORADA 2026
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {jugadores.map(jugador => (
          <Link
            key={jugador.id}
            to={`/plantel/${jugador.id}`}
            className="bg-white rounded shadow hover:shadow-lg transition hover:scale-105"
          >
            <img
              src={`/plantel/${jugador.id}.jpg`}
              alt={jugador.nombre}
              className="w-full h-48 object-cover rounded-t"
            />

            <div className="p-3 bg-yellow-100 rounded text-center">
              <h3 className="font-semibold dark:text-gray-800">{jugador.nombre}</h3>
              <p className="text-sm text-gray-600">{jugador.posicion}</p>
            </div>
          </Link>
        ))}
      </div>
      <Cuerpo_tecnico />
    </section>
  )
}

export default Plantel
