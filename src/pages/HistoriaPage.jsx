import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const HistoriaPage = () => {
  const links = [
    { path: "fundacion", label: "Fundación" },
    { path: "historia", label: "Historia General" },
    { path: "simbolos", label: "Símbolos" },
    { path: "campeonatos", label: "Campeonatos" },
    { path: "partidos_historicos", label: "Partidos históricos" },
    { path: "figuras", label: "Figuras" },
    { path: "presidentes", label: "Presidentes" },
    { path: "entrenadores", label: "Entrenadores" },
    { path: "rivales", label: "Rivales Históricos" },
    { path: "ciudades", label: "Ciudades" },
    { path: "estadios", label: "Estadios" },
    { path: "mundialistas", label: "Mundialistas" },
    { path: "galeria", label: "Galería" }
  ];

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">

      {/* ASIDE */}
      <aside className="bg-yellow-100 rounded-lg shadow p-4">
        {/* BOTÓN SOLO EN MÓVIL */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden w-full flex justify-between items-center font-bold text-yellow-400 bg-black px-4 py-2 rounded"
        >
          Historia del Club
          <span>{menuAbierto ? "▲" : "▼"}</span>
        </button>
        {/* TÍTULO SOLO DESKTOP */}
        <h2 className="hidden md:block text-xl font-bold mb-4 text-center text-black">
          Historia del Club
        </h2>

        <nav
          className={`space-y-1 mt-3 md:mt-0
          ${menuAbierto ? "block" : "hidden"} md:block`}
        >
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuAbierto(false)} // cerrar en móvil
              className={({ isActive }) =>
                `block px-3 py-2 rounded font-semibold transition
                ${isActive
                  ? "bg-black text-yellow-400"
                  : "text-black hover:bg-black hover:text-yellow-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* CONTENIDO */}
      <section className="bg-yellow-100 rounded shadow p-6">
        <Outlet />
        {/* FUENTES */}
        <br />
        <footer className="text-sm text-gray-500 border-t pt-4">
          Fuentes: Archivo Histórico The Strongest, documentación institucional,
          relatos históricos del fútbol paceño.
        </footer>
      </section>

    </div>
  );
};

export default HistoriaPage;
