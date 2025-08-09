import { nuevosIngresos } from "../constants";
import Button from "./Button";

export default function CardImg() {
  return (
    <div className="flex flex-col">
      {nuevosIngresos.map((p) => (
        <div className="card-item max-w-3xs bg-white flex flex-col items-start overflow-hidden gap-2 mb-3">
          <img src={p.imgUrl} alt={p.nombre} className="w-full" />
          <p className="font-light text-xs text-amber-400">{p.categoria}</p>
          <p className="text-sm uppercase tracking-widest">{p.nombre}</p>
          <p className="text-lg tracking-widest font-semibold">{p.precio}</p>
          <Button>Agregar</Button>
        </div>
      ))}
    </div>
  );
}
