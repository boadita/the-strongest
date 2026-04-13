
const Cuerpo_tecnico = () => {

  return (
    <section className="dark:text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center">
        CUERPO TECNICO
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/sixto-vizuete.png"
            alt="SIXTO VIZUETE"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">SIXTO VIZUETE</h3>
          <p className="text-sm text-gray-600">ENTRENADOR</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/fernando-torres.png"
            alt="FERNANDO TORRES"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">FERNANDO TORRES</h3>
          <p className="text-sm text-gray-600">ASISTENTE TÉCNICO</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/juan-carlos-paz-garcia.png"
            alt="JUAN CARLOS PAZ GARCÍA"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">JUAN CARLOS PAZ GARCÍA</h3>
          <p className="text-sm text-gray-600">ASISTENTE TÉCNICO</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/darwin-veloz.png"
            alt="DARWIN VELOZ"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">DARWIN VELOZ</h3>
          <p className="text-sm text-gray-600">PREPARADOR FÍSICO</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/hamlet-barrientos.png"
            alt="HAMLET BARRIENTOS"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">HAMLET BARRIENTOS</h3>
          <p className="text-sm text-gray-600">PREPARADOR DE ARQUEROS</p>
        </div>
      </div>
    </section>
  )
}

export default Cuerpo_tecnico
