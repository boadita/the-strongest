import { useState } from "react";

const imagenes = import.meta.glob(
  '../../assets/rivalidades/*.png',
  {
    eager: true,
    import: 'default'
  }
)

const rivalesPaceños = [
    {
        id: "nimbles-sport",
        nombre: "Nimbles Sport",
        descripcion:
            "Rivalidad histórica surgida de enfrentamientos estudiantiles en los inicios del fútbol paceño. Representa una de las primeras grandes disputas del Tigre en la era amateur."
    },
    {
        id: "colmil",
        nombre: "Colmil",
        descripcion:
            "Una rivalidad intensa de los primeros años del club, marcada por el ambiente castrense y partidos de gran tensión entre 1911 y 1922."
    },
    {
        id: "universitario-lp",
        nombre: "Universitario",
        descripcion:
            "Clásico paceño de los años 20 y 30, cuando ambos clubes disputaban el dominio local. Su rivalidad se apagó tras la Guerra del Chaco, pero dejó partidos memorables."
    },
    {
        id: "bolivar",
        nombre: "Bolívar",
        descripcion:
            "La rivalidad más grande del fútbol boliviano. Nació en 1927 y ha definido títulos nacionales en varias ocasiones. Un clásico cargado de historia, pasión y orgullo paceño."
    }
];

const rivalesNacionales = [
    {
        id: "oruro-royal",
        nombre: "Oruro Royal",
        descripcion:
            "Uno de los primeros grandes duelos interdepartamentales del país. Fue considerado el clásico nacional antes de la era liguera."
    },
    {
        id: "oriente-petrolero",
        nombre: "Oriente Petrolero",
        descripcion:
            "Rivalidad moderna entre dos clubes que nunca descendieron. Han definido títulos nacionales, con varios enfrentamientos decisivos en finales de liga."
    },
    {
        id: "jorge-wilstermann",
        nombre: "Jorge Wilstermann",
        descripcion:
            "Clásico entre dos de los clubes más grandes de Bolivia. Rivalidad fuerte desde los años 80, marcada por la lucha constante por títulos y protagonismo nacional."
    },
    {
        id: "san-jose",
        nombre: "San José",
        descripcion:
            "Rival histórico del interior del país. Sus partidos se caracterizan por la intensidad y la disputa por el protagonismo y la popularidad de sus hinchadas."
    },
    {
        id: "blooming",
        nombre: "Blooming",
        descripcion:
            "Rivalidad cruceña consolidada en la era liguera. Ambos clubes se han enfrentado en definiciones importantes, con títulos ganados en terreno rival."
    },
    {
        id: "always-ready",
        nombre: "Always Ready",
        descripcion:
            "Rivalidad reactivada en los últimos años, con ambos equipos peleando los primeros lugares del torneo nacional y protagonizando duelos de alta tensión."
    }
];

const Rivales = () => {
    const [categoria, setCategoria] = useState("paceños");

    const rivalesMostrar =
        categoria === "paceños" ? rivalesPaceños : rivalesNacionales;
    return (
        <div className="space-y-6">
            <h1 className="font-bold dark:text-gray-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">RIVALES</h1>
            {/* BOTONES */}
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setCategoria("paceños")}
                    className={`px-4 py-2 rounded font-bold
            ${categoria === "paceños"
                            ? "bg-black text-yellow-400"
                            : "bg-yellow-300 hover:bg-black hover:text-yellow-300"
                        }`}
                >
                    Paceños
                </button>

                <button
                    onClick={() => setCategoria("nacionales")}
                    className={`px-4 py-2 rounded font-bold
            ${categoria === "nacionales"
                            ? "bg-black text-yellow-400"
                            : "bg-yellow-300 hover:bg-black hover:text-yellow-300"
                        }`}
                >
                    Nacionales
                </button>
            </div>

            {/* LISTA */}
            <div className="space-y-4">
                {rivalesMostrar.map((rival) => (
                    <div
                        key={rival.nombre}
                        className="flex gap-4 items-center border rounded-lg p-4 bg-yellow-200 shadow hover:scale-105 transition"
                    >
                        {/* IMAGEN */}
                        <img
                            src={imagenes[`../../assets/rivalidades/${rival.id}.png`]}
                            alt={rival.nombre}
                            className="w-20 h-20 object-contain"
                        />

                        {/* TEXTO */}
                        <div>
                            <h2 className="text-xl font-bold text-center">
                                {rival.nombre}
                            </h2>
                            <p className="text-gray-700 text-justify font-semibold">
                                {rival.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rivales;