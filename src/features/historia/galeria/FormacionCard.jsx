const FormacionCard = ({ imagen, anio }) => {
  return (
    <div className="bg-yellow-200 p-3 rounded-xl shadow hover:scale-105 transition">
      
      <img
        src={`/formaciones/${imagen.src}`}
        alt={imagen.descripcion}
        className="rounded-xl w-full h-64 object-cover mt-2"
      />

      <p className="text-sm text-center mt-2 font-semibold">
        {imagen.descripcion}
      </p>
    </div>
  );
};

export default FormacionCard;
