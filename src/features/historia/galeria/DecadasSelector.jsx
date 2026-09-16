import TvSelect from "../../../components/TvSelect";
const DecadasSelect = ({ decadas, decadaActiva, setDecadaActiva }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <span className="font-bold whitespace-nowrap">Seleccione una década: </span>
        <TvSelect
          value={decadaActiva}
          options={decadas}
          onChange={setDecadaActiva}
        />
      </div>
    </div>
  );
};

export default DecadasSelect;
