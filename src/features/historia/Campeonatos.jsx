const Campeonatos = () => {
    const campeonatos = {
        pacenos: {
            amateur: [
                "COPA PREFECTURAL 1911",
                "TORNEO DE LIGA 1914",
                "TORNEO DE COPA 1915",
                "TORNEO DE LIGA 1916",
                "TORNEO DE COPA 1916",
                "TORNEO DE LIGA 1917",
                "TORNEO PACEÑO 1922",
                "TORNEO PACEÑO 1923",
                "TORNEO PACEÑO 1924",
                "TORNEO PACEÑO 1925",
                "TORNEO PACEÑO 1930",
                "TORNEO PACEÑO 1935",
                "TORNEO PACEÑO 1938",
                "TORNEO PACEÑO 1943",
                "TORNEO PACEÑO 1946",
            ],
            profesional: [
                "TORNEO PACEÑO 1963",
                "TORNEO PACEÑO 1964",
                "TORNEO PACEÑO 1970",
                "TORNEO PACEÑO 1971",
                "TORNEO PACEÑO 1974",
            ]
        },
        nacionales: [
            "TORNEO MIXTO 1952",
            "COPA FBF 1958",
            "TORNEO SIMÓN BOLÍVAR 1964",
            "TORNEO SIMÓN BOLÍVAR 1974",
            "TORNEO LIGUERO 1977",
            "TORNEO LIGUERO 1986",
            "TORNEO LIGUERO 1989",
            "TORNEO LIGUERO 1993",
            "TORNEO APERTURA 2003",
            "TORNEO CLAUSURA 2003",
            "TORNEO CLAUSURA 2004",
            "TORNEO APERTURA 2011",
            "TORNEO CLAUSURA 2012",
            "TORNEO APERTURA 2012",
            "TORNEO APERTURA 2013",
            "TORNEO ADECUACIÓN 2016",
            "TORNEO ANUAL 2023",
        ],
        ganados: [
            "TORNEO APERTURA 1981",
            "TORNEO CLAUSURA 1988",
            "TORNEO CLAUSURA 1999",
        ]
    };

    return (
        <div className="space-y-10">
            {/* TÍTULO */}
            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                CAMPEONATOS
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
                {/* PACEÑOS */}
                <div>
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">
                            🏆 Campeonatos Paceños
                        </h2>
                        {/* AMATEUR */}
                        <div className="border rounded-lg shadow p-4 bg-yellow-200">
                            <h3 className="text-xl font-semibold mb-3 text-black">
                                Amateur
                            </h3>
                            <ul className="space-y-1">
                                {campeonatos.pacenos.amateur.map((item, i) => (
                                    <li key={i} className="flex gap-2 font-semibold">
                                        <span>⚽</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* PROFESIONAL */}
                        <div className="border rounded-lg shadow p-4 bg-yellow-200">
                            <h3 className="text-xl font-semibold mb-3 text-black">
                                Profesional
                            </h3>
                            <ul className="space-y-1">
                                {campeonatos.pacenos.profesional.map((item, i) => (
                                    <li key={i} className="flex gap-2 font-semibold">
                                        <span>⚽</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
                <div>
                    {/* NACIONALES */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">
                            🏅 Campeonatos Nacionales
                        </h2>
                        <div className="border rounded-lg shadow p-4 bg-yellow-200">
                            <ul className="space-y-1">
                                {campeonatos.nacionales.map((item, i) => (
                                    <li key={i} className="flex gap-2 font-semibold">
                                        <span>⚽</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    {/* GANADOS */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">
                            ⭐ Torneos Ganados
                        </h2>
                        <div className="border rounded-lg shadow p-4 bg-yellow-200">
                            {campeonatos.ganados.map((item, i) => (
                                <li key={i} className="flex gap-2 font-semibold">
                                    <span>⚽</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Campeonatos;
