
const Cuerpo_tecnico = () => {

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">
        CUERPO TECNICO
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/eduardo-villegas.png"
            alt="EDUARDO VILLEGAS"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">EDUARDO VILLEGAS</h3>
          <p className="text-sm text-gray-600">ENTRENADOR</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/horacio-barrenechea.png"
            alt="HORACIO BARRENECHEA"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">HORACIO BARRENECHEA</h3>
          <p className="text-sm text-gray-600">AYUDANTE DE CAMPO</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/jaime-jimenez.png"
            alt="JAIME JIMENEZ"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">JAIME JIMENEZ</h3>
          <p className="text-sm text-gray-600">PREPARADOR FÍSICO</p>
        </div>
        <div className="p-3 bg-yellow-100 rounded text-center hover:scale-105 transition">
          <img
            src="cuerpo-tecnico/cristian-bernadas.png"
            alt="CRISTIAN BERNADAS"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="font-semibold">CRISTIAN BERNADAS</h3>
          <p className="text-sm text-gray-600">PREPARADOR DE ARQUEROS</p>
        </div>
      </div>
    </section>
  )
}

export default Cuerpo_tecnico
