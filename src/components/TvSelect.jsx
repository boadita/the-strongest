import { useEffect, useRef, useState } from "react";

const TvSelect = ({
    value,
    options = [],
    placeholder = "Seleccionar",
    onChange,
    disabled = false,
}) => {
    const [abierto, setAbierto] = useState(false);
    const [indiceActivo, setIndiceActivo] = useState(0);

    const botonRef = useRef(null);
    const opcionesRefs = useRef([]);

    // Buscar la posición de la opción actualmente seleccionada
    useEffect(() => {
        if (!options.length) {
            setIndiceActivo(0);
            return;
        }

        const indice = options.findIndex(
            opcion => String(opcion) === String(value)
        );

        setIndiceActivo(indice >= 0 ? indice : 0);
    }, [value, options]);

    // Cuando se abre el menú, enfocar la opción seleccionada
    useEffect(() => {
        if (!abierto) return;

        const opcion = opcionesRefs.current[indiceActivo];

        if (opcion) {
            opcion.focus();
        }
    }, [abierto, indiceActivo]);

    const abrir = () => {
        if (disabled || !options.length) return;

        const indice = options.findIndex(
            opcion => String(opcion) === String(value)
        );

        setIndiceActivo(indice >= 0 ? indice : 0);
        setAbierto(true);
    };

    const cerrar = () => {
        setAbierto(false);

        // Devolvemos el foco al botón principal
        setTimeout(() => {
            botonRef.current?.focus();
        }, 0);
    };

    const seleccionar = (opcion) => {
        onChange?.(opcion);
        setAbierto(false);

        setTimeout(() => {
            botonRef.current?.focus();
        }, 0);
    };

    const manejarTeclaBoton = (e) => {
        if (disabled) return;

        switch (e.key) {
            case "Enter":
            case " ":
            case "ArrowDown":
            case "ArrowUp":
                e.preventDefault();
                abrir();
                break;

            case "Escape":
            case "Esc":
                e.preventDefault();
                cerrar();
                break;

            case "ArrowLeft":
            case "ArrowRight":
                // Permitimos que el foco pueda continuar
                // hacia otro control.
                cerrar();
                break;

            default:
                break;
        }
    };

    const manejarTeclaOpcion = (e, indice) => {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();

                setIndiceActivo(
                    (indice + 1) % options.length
                );
                break;

            case "ArrowUp":
                e.preventDefault();

                setIndiceActivo(
                    (indice - 1 + options.length) % options.length
                );
                break;

            case "Enter":
            case " ":
                e.preventDefault();

                seleccionar(options[indice]);
                break;

            case "Escape":
            case "Esc":
                e.preventDefault();

                cerrar();
                break;

            case "ArrowLeft":
            case "ArrowRight":
                e.preventDefault();

                cerrar();
                break;

            default:
                break;
        }
    };

    const valorMostrado =
        value === "" ||
        value === null ||
        value === undefined
            ? placeholder
            : value;

    return (
        <div className="relative w-full md:w-40 tv:w-64">

            {/* BOTÓN PRINCIPAL */}
            <button
                ref={botonRef}
                type="button"
                disabled={disabled}
                onClick={() => {
                    if (abierto) {
                        cerrar();
                    } else {
                        abrir();
                    }
                }}
                onKeyDown={manejarTeclaBoton}
                aria-haspopup="listbox"
                aria-expanded={abierto}
                className={`
                    w-full
                    border
                    rounded
                    bg-white
                    font-semibold
                    dark:text-gray-800
                    text-left
                    flex
                    items-center
                    justify-between
                    gap-3

                    px-3
                    py-2

                    tv:px-5
                    tv:py-4
                    tv:text-2xl

                    focus:outline-none
                    focus:ring-4
                    focus:ring-yellow-400
                    focus:border-yellow-500

                    transition

                    ${disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-gray-100"
                    }
                `}
            >
                <span className="truncate">
                    {valorMostrado}
                </span>

                <span
                    className="
                        flex-shrink-0
                        text-sm
                        tv:text-2xl
                    "
                    aria-hidden="true"
                >
                    {abierto ? "▲" : "▼"}
                </span>
            </button>

            {/* LISTA DE OPCIONES */}
            {abierto && (
                <div
                    role="listbox"
                    className="
                        absolute
                        left-0
                        top-full
                        mt-2
                        z-50
                        w-full
                        bg-white
                        border
                        border-gray-300
                        rounded
                        shadow-2xl
                        overflow-hidden

                        max-h-72
                        tv:max-h-[500px]
                        overflow-y-auto
                    "
                >
                    {options.map((opcion, indice) => {
                        const seleccionado =
                            String(opcion) === String(value);

                        const activo =
                            indice === indiceActivo;

                        return (
                            <button
                                key={`${opcion}-${indice}`}
                                ref={elemento => {
                                    opcionesRefs.current[indice] =
                                        elemento;
                                }}
                                type="button"
                                role="option"
                                aria-selected={seleccionado}
                                tabIndex={0}
                                onClick={() =>
                                    seleccionar(opcion)
                                }
                                onKeyDown={e =>
                                    manejarTeclaOpcion(
                                        e,
                                        indice
                                    )
                                }
                                className={`
                                    w-full
                                    text-left
                                    px-4
                                    py-3

                                    tv:px-6
                                    tv:py-5
                                    tv:text-2xl

                                    font-semibold
                                    border-b
                                    last:border-b-0

                                    focus:outline-none

                                    ${
                                        seleccionado
                                            ? "bg-yellow-200"
                                            : "bg-white"
                                    }

                                    ${
                                        activo
                                            ? "ring-4 ring-inset ring-yellow-400 bg-yellow-100"
                                            : ""
                                    }

                                    hover:bg-yellow-100
                                    transition
                                `}
                            >
                                <span className="flex items-center justify-between gap-4">
                                    <span>
                                        {opcion}
                                    </span>

                                    {seleccionado && (
                                        <span
                                            className="
                                                font-bold
                                                text-lg
                                                tv:text-3xl
                                            "
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TvSelect;