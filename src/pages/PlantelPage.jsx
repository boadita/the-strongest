import { Outlet } from "react-router-dom"

const PlantelPage = () => {
  return (
    <section className="space-y-6">
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        PLANTEL PROFESIONAL
      </h1>

      {/* AQUÍ se renderiza Jugadores o JugadorDetalle */}
      <Outlet />
    </section>
  )
}

export default PlantelPage
