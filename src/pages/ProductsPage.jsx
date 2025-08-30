import { useState } from "react";
import SideBarFilters from "../sections/products/SideBarFilters";
import { productos } from "../constants/index";
import Container from "../components/Container";
import SortBar from "../components/SortBar";
import ProductsGrid from "../sections/products/ProductsGrid";
import { TiDelete } from "react-icons/ti";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const [selectedCategorias, setSelectedCategorias] = useState([]);
  const [precioRango, setPrecioRango] = useState({ min: 0, max: 200000 });
  const [sortOrder, setSortOrder] = useState("asc");

  const { categoria } = useParams();

  const filterProducts = productos
    .filter((p) =>
      categoria && categoria !== "todos" ? p.categoria === categoria : true
    )
    .filter((p) =>
      selectedCategorias.length > 0
        ? selectedCategorias.includes(p.categoria)
        : true
    )
    .filter((p) => p.precio >= precioRango.min && p.precio <= precioRango.max)
    .sort((a, b) =>
      sortOrder === "asc" ? a.precio - b.precio : b.precio - a.precio
    );

  const resetFilters = () => {
    setSelectedCategorias([]);
    setPrecioRango({ min: 0, max: 200000 });
    setSortOrder("asc");
  };
  const hasFilter =
    selectedCategorias.length > 0 ||
    precioRango.min !== 0 ||
    precioRango.max !== 200000 ||
    sortOrder !== "asc";

  return (
    <Container>
      <div className="flex flex-col lg:flex-row py-4 gap-4">
        <SideBarFilters
          selectedCategorias={selectedCategorias}
          setSelectedCategorias={setSelectedCategorias}
          precioRango={precioRango}
          setPrecioRango={setPrecioRango}
        />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center gap-0.5 text-xs cursor-pointer text-neutral-500 hover:text-neutral-800 ${
                hasFilter ? "" : "invisible"
              }`}
              onClick={hasFilter ? resetFilters : undefined}
            >
              <TiDelete className="text-lg" />
              <p>borrar filtros</p>
            </div>

            <SortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
          <ProductsGrid products={filterProducts} />
        </div>
      </div>
    </Container>
  );
}
