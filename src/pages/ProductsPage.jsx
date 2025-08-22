import { useState } from "react";
import SideBarFilters from "../sections/products/SideBarFilters";
import { productos } from "../constants/index";
import Container from "../components/Container";
import SortBar from "../components/SortBar";
import ProductsGrid from "../sections/products/ProductsGrid";

export default function ProductsPage() {
  const [selectedCategorias, setSelectedCategorias] = useState([]);
  const [precioRango, setPrecioRango] = useState({ min: 0, max: 200000 });
  const [sortOrder, setSortOrder] = useState("asc");

  const filterProducts = productos
    .filter((p) =>
      selectedCategorias.length > 0
        ? selectedCategorias.includes(p.categoria)
        : true
    )
    .filter((p) => p.precio >= precioRango.min && p.precio <= precioRango.max)
    .sort((a, b) =>
      sortOrder === "asc" ? a.precio - b.precio : b.precio - a.precio
    );

  return (
    <Container>
      <div>
        <SideBarFilters
          selectedCategorias={selectedCategorias}
          setSelectedCategorias={setSelectedCategorias}
          precioRango={precioRango}
          setPrecioRango={setPrecioRango}
        />
        <div className="flex-1">
          <SortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <ProductsGrid />
        </div>
      </div>
    </Container>
  );
}
