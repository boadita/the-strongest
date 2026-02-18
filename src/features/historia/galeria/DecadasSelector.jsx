const DecadasSelect = ({ decadas, decadaActiva, setDecadaActiva }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <span className="font-bold whitespace-nowrap">Seleccione una década: </span>
        <select
          value={decadaActiva}
          onChange={(e) => setDecadaActiva(e.target.value)}
          className="px-4 py-2 rounded border font-bold bg-white"
        >
          {decadas.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DecadasSelect;
