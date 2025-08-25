import { categorias } from "../../constants";

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
  return (
    <aside className="w-64 p-4 shadow-xl">
      <h3 className="text-xl py-2">Filtrar por</h3>

      {/**categorias */}
      <div className="px-5">
        <p className="pb-1">Categoría</p>
        {categorias.map((cat) => (
          <label key={cat} className="flex items-center gap-2 px-3.5">
            <input
              type="checkbox"
              checked={selectedCategorias.includes(cat)}
              onChange={() => handleCambioCategoria(cat)}
              value={cat}
            />
            {cat}
          </label>
        ))}
      </div>

      {/**precio */}
      <div className="mt-4 px-5">
        <p className="">Precio</p>
        <div className="flex gap-2">
          <input
            type="number"
            value={precioRango.min}
            onChange={(e) =>
              setPrecioRango({
                ...precioRango,
                min: +e.target.value === "" ? 0 : parseInt(e.target.value),
              })
            }
            className="border w-20 p-1 rounded"
            placeholder="de"
          />
          <input
            type="number"
            value={precioRango.max}
            onChange={(e) =>
              setPrecioRango({
                ...precioRango,
                max:
                  +e.target.value === ""
                    ? 200000
                    : parseInt(e.target.value, 10),
              })
            }
            className="border w-20 p-1 rounded"
            placeholder="hasta"
          />
        </div>
      </div>
    </aside>
  );
}
