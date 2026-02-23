import React, { useContext } from "react";

const Menu = () => {

  return (
    <nav className="bg-black text-white font-bold w-full">
  <div className="max-w-screen-xl mx-auto px-4 py-4">
    <ul className="flex flex-wrap justify-center gap-6">
      <li><a href="/">Inicio</a></li>
      <li><a href="/historia">Historia</a></li>
      <li><a href="/plantel">Plantel</a></li>
      <li><a href="/estadisticas">Estadísticas</a></li>
      <li><a href="/fixture">Fixture</a></li>
      <li><a href="/canciones">Canciones</a></li>
      <li><a href="/partidos_historicos">Partidos Históricos</a></li>
      <li><a href="/hinchada">Hinchada</a></li>
      <li><a href="/invasiones">Invasiones</a></li>
      <li><a href="/medios">Medios</a></li>
      <li><a href="/predios">Predios</a></li>
      <li><a href="/referencias">Referencias</a></li>
      <li><a href="/creditos">Creditos</a></li>
    </ul>
  </div>
</nav>

  );
};

export default Menu;