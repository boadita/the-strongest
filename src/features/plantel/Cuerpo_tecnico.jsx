
const Cuerpo_tecnico = () => {

  return (
    <section className="dark:text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center">
        CUERPO TECNICO
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/antonio-carlos-zago.png"
            alt="ANTONIO CARLOS ZAGO"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">ANTONIO CARLOS ZAGO</h3>
          <p className="text-sm text-gray-600">ENTRENADOR</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/giancarlo-zago.png"
            alt="GIANCARLO ZAGO"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">GIANCARLO ZAGO</h3>
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
            src="cuerpo-tecnico/rodrigo-morales.png"
            alt="RODRIGO MORALES"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">RODRIGO MORALES</h3>
          <p className="text-sm text-gray-600">MÉDICO</p>
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
