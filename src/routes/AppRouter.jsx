import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import HistoriaPage from "../pages/HistoriaPage";
import Fundacion from "../features/historia/Fundacion";
import HistoriaGeneral from "../features/historia/HistoriaGeneral";
import Campeonatos from "../features/historia/Campeonatos";
import Simbolos from "../features/historia/Simbolos";
import Rivales from "../features/historia/Rivales";
import Entrenadores from "../features/historia/Entrenadores";
import Presidentes from "../features/historia/Presidentes";
import Ciudades from "../features/historia/Ciudades";
import Estadios from "../features/historia/Estadios";
import Figuras from "../features/historia/Figuras";
import Mundialistas from "../features/historia/Mundialistas";
import Galeria from "../features/historia/galeria/Galeria";
import Hinchada from "../pages/Hinchada"
import Invasiones from "../pages/Invasiones"
import PlantelPage from "../pages/PlantelPage"
import Plantel from "../features/plantel/Plantel"
import JugadorDetalle from "../features/plantel/JugadorDetalle"
import Estadisticas from "../pages/Estadisticas"
import TablaPosiciones from "../features/estadisticas/TablaPosiciones"
import Temporadas from "../features/estadisticas/Temporadas"
import Historial from "../features/estadisticas/Historial"
import EstadisticasPartidos from "../features/estadisticas/EstadisticasPartidos"
import Internacionales from "../features/estadisticas/Internacionales"
import Fixture from "../pages/Fixture"
import Canciones from "../pages/Canciones"
import PartidosHistoricos from "../pages/PartidosHistoricos"
import Predios from "../pages/Predios"
import Medios from "../pages/Medios"
import Referencias from "../pages/Referencias"
import Creditos from "../pages/Creditos"
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          {/* HISTORIA */}
          <Route path="/historia" element={<HistoriaPage />}>
            <Route index element={<Fundacion />} />
            <Route path="fundacion" element={<Fundacion />} />
            <Route path="historia" element={<HistoriaGeneral />} />
            <Route path="campeonatos" element={<Campeonatos />} />
            <Route path="simbolos" element={<Simbolos />} />
            <Route path="rivales" element={<Rivales />} />
            <Route path="entrenadores" element={<Entrenadores />} />
            <Route path="presidentes" element={<Presidentes />} />
            <Route path="ciudades" element={<Ciudades />} />
            <Route path="estadios" element={<Estadios />} />
            <Route path="figuras" element={<Figuras />} />
            <Route path="mundialistas" element={<Mundialistas />} />
            <Route path="galeria" element={<Galeria />} />
          </Route>

          {/* OTRAS SECCIONES */}
          <Route path="/plantel" element={<PlantelPage />}>
            <Route index element={<Plantel />} />
            <Route path=":id" element={<JugadorDetalle />} />
          </Route>

          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/tabla_posiciones" element={<TablaPosiciones />} />
          <Route path="/temporadas" element={<Temporadas />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/estadisticas_partidos" element={<EstadisticasPartidos />} />
          <Route path="/internacionales" element={<Internacionales />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/canciones" element={<Canciones />} />
          <Route path="/partidos_historicos" element={<PartidosHistoricos />} />
          <Route path="/hinchada" element={<Hinchada />} />
          <Route path="/invasiones" element={<Invasiones />} />
          <Route path="/medios" element={<Medios />} />
          <Route path="/predios" element={<Predios />} />
          <Route path="/referencias" element={<Referencias />} />
          <Route path="/creditos" element={<Creditos />} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default AppRouter
