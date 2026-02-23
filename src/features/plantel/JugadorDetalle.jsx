import { useParams } from "react-router-dom"
import jugadores from "../../data/jugadores.json"

const JugadorDetalle = () => {
  const { id } = useParams()
  const jugador = jugadores.find(j => j.id === id)

  if (!jugador) {
    return <p>Jugador no encontrado</p>
  }

  return (
    <section className="max-w-4xl mx-auto bg-yellow-100 rounded">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={`/plantel/${jugador.id}.jpg`}
          alt={jugador.nombre}
          className="w-64 h-auto rounded mx-auto md:mx-0"
        />

        <div>
          <h2 className="text-3xl font-bold dark:text-gray-800 text-center">
            {jugador.nombre}
          </h2>
          <p className="text-gray-600 mb-4 text-2xl font-bold text-center">{jugador.posicion}</p>

          <ul className="space-y-1 text-gray-700">
            <li><strong>Fecha de nacimiento:</strong> {jugador.fechaNacimiento}</li>
            <li><strong>Nacionalidad:</strong> {jugador.nacionalidad}</li>
            <li><strong>Altura:</strong> {jugador.altura} cm</li>
            <li><strong>Peso:</strong> {jugador.peso} kg</li>
            <li><strong>Números:</strong> {jugador.numero}</li>
            <li><strong>Partidos jugados:</strong> {jugador.partidosJugados}</li>
            <li><strong>Goles:</strong> {jugador.goles}</li>
          </ul>
        </div>
      </div>

      {/* Trayectoria */}
      <div className="mt-8 flex flex-col items-center md:items-start">
        <h3 className="text-xl font-semibold dark:text-gray-800 mb-3">Trayectoria:</h3>
        <ul className="list-disc list-inside text-gray-700 font-semibold">
          {jugador.trayectoria.map((club, index) => (
            <li key={index}>
              {club.club} ({club.desde} – {club.hasta})
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default JugadorDetalle
