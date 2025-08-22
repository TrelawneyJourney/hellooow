import CardImg from "../../components/CardImg";
import { productos } from "../../constants";

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
      {productos.map((p) => (
        <CardImg
          nombre={p.nombre}
          categoria={p.categoria}
          imgUrl={p.imgUrl}
          precio={p.precio}
        />
      ))}
    </div>
  );
}
