const Creditos = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        CRÉDITOS Y REFERENCIAS
      </h1>
      <div className="bg-yellow-100 rounded shadow p-6">
        <p className="mb-6 text-gray-700">
          Este sitio web es un proyecto informativo y educativo dedicado a la
          historia y actualidad del Club The Strongest. No tiene fines comerciales.
        </p>

        {/* Fuentes históricas */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Fuentes Históricas
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Archivo histórico del Club The Strongest</li>
            <li>Libros y publicaciones oficiales del club</li>
            <li>Prensa deportiva nacional e internacional</li>
            <li>Testimonios de socios e historiadores</li>
          </ul>
        </div>

        {/* Créditos de imágenes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Créditos de Imágenes
          </h2>
          <p className="text-gray-600 mb-2">
            Las imágenes utilizadas en este sitio pertenecen a sus respectivos
            autores y entidades. Su uso es exclusivamente ilustrativo.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Club The Strongest – Archivo institucional</li>
            <li>Fotógrafos deportivos acreditados</li>
            <li>Medios de comunicación nacionales</li>
            <li>Archivos históricos y colecciones privadas</li>
          </ul>
        </div>

        {/* Aviso legal */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Aviso Legal
          </h2>
          <p className="text-gray-600">
            Todas las marcas, escudos, imágenes y nombres relacionados con el
            Club The Strongest son propiedad de sus respectivos titulares.
            Este proyecto no busca infringir derechos de autor.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Creditos
