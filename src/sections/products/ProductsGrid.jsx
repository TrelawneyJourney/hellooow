import CardImg from "../../components/CardImg";

export default function ProductsGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
      {products.length > 0 ? (
        products.map((p) => (
          <CardImg
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
  );
}
