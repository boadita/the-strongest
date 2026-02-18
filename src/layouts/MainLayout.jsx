import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <Header />

      {/* Menu */}
      <Menu />

      {/* Contenido principal */}
      <main className="flex-1 bg-yellow-300">
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default MainLayout
