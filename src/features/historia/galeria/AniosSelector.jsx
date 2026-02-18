const AniosSelect = ({ anios, anioActivo, setAnioActivo }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <span className="font-bold whitespace-nowrap">Seleccione año: </span>
        <select
          value={anioActivo ?? ""}
          onChange={(e) => setAnioActivo(Number(e.target.value))}
          className="px-4 py-2 rounded border font-semibold bg-white"
        >
          {anios.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AniosSelect;
