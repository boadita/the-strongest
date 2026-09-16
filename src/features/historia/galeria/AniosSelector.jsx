import TvSelect from "../../../components/TvSelect";
const AniosSelect = ({ anios, anioActivo, setAnioActivo }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <span className="font-bold whitespace-nowrap">Seleccione año: </span>
        <TvSelect
          value={anioActivo ?? ""}
          options={anios}
          onChange={(valor) => setAnioActivo(Number(valor))}
        />
      </div>
    </div>
  );
};

export default AniosSelect;
