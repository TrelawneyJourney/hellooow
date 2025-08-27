import { useState, useRef } from "react";
import Filtros from "../../components/Filtros";
import { LuX } from "react-icons/lu";
import { useClickOut } from "../../hooks/useClickOut";

export default function SideBarFilters({
  selectedCategorias,
  setSelectedCategorias,
  precioRango,
  setPrecioRango,
}) {
  const handleCambioCategoria = (cat) => {
    if (selectedCategorias.includes(cat)) {
      setSelectedCategorias(selectedCategorias.filter((c) => c !== cat));
    } else {
      setSelectedCategorias([...selectedCategorias, cat]);
    }
  };

  const [filterOpen, setFilterOpen] = useState(false);

  const filterRef = useRef();
  useClickOut(filterRef, () => setFilterOpen(false));

  const toggleFilter = () => {
    setFilterOpen((prev) => !prev);
  };

  return (
    <div className="">
      {/**mobile */}
      <div className="hidden max-lg:flex justify-start items-end text-xs">
        <button
          onClick={toggleFilter}
          className="border border-amber-200 px-4 py-2"
        >
          {filterOpen ? <LuX className="text-xs" /> : "filtros"}
        </button>
      </div>

      <aside className="hidden lg:block lg:w-64 p-4 shadow-xl">
        <h3 className="text-xl py-2">Filtrar por</h3>
        {/**categorias */}
        <Filtros
          selectedCategorias={selectedCategorias}
          handleCambioCategoria={handleCambioCategoria}
          setPrecioRango={setPrecioRango}
          precioRango={precioRango}
        />
      </aside>
      {filterOpen && (
        <div
          className="absolute top-auto left-auto py-8 px-3 shadow-xl bg-white"
          ref={filterRef}
        >
          <Filtros
            selectedCategorias={selectedCategorias}
            handleCambioCategoria={handleCambioCategoria}
            setPrecioRango={setPrecioRango}
            precioRango={precioRango}
          />
        </div>
      )}
    </div>
  );
}
