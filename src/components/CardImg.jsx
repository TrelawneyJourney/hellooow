export default function CardImg({ imgUrl, nombre, categoria, precio }) {
  const formatPrice = (precio) => new Intl.NumberFormat("es-AR").format(precio);

  return (
    <div className="w-full bg-white flex flex-col items-start overflow-hidden gap-2 mb-3 shadow-lg py-4 px-2">
      <img src={imgUrl} alt={nombre} className="w-full cursor-pointer" />
      <p className="font-light text-xs text-amber-400">{categoria}</p>
      <p className="text-sm uppercase tracking-widest">{nombre}</p>
      <p className="text-lg tracking-widest font-semibold">
        $ {formatPrice(precio)}
      </p>
      <button className="btn-gray">Agregar</button>
    </div>
  );
}
