import { useState } from "react";
import CardImg from "../../components/CardImg";

export default function ProductsGrid({ products }) {
  const [mostrarProd, setMostrarProd] = useState(10);
  const cargarMas = () => {
    setMostrarProd((prev) => prev + 10);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {products.length > 0 ? (
          products
            .slice(0, mostrarProd)
            .map((p) => (
              <CardImg
                key={p.id}
                prodId={p.id}
                nombre={p.nombre}
                categoria={p.categoria}
                imgUrl={p.imgUrl}
                precio={p.precio}
              />
            ))
        ) : (
          <p>No hay productos que coincidan con los filtros 😿</p>
        )}
      </div>

      {mostrarProd < products.length && (
        <div className="flex justify-center mt-4">
          <button className="btn-black" onClick={cargarMas}>
            Ver más
          </button>
        </div>
      )}
    </div>
  );
}
