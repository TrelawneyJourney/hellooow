import logo from "../../public/logo.svg";
import { LuUserRound } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  return (
    <div className="">
      <div className="bg-amber-50 py-2.5 text-center text-sm">
        <p>🚚 Envío GRATIS en compras superiores a $90.000</p>
      </div>
      <div className="flex items-center bg-amber-100">
        <div className="w-[100px]">
          <img src={logo} alt="logo" srcset="" />
        </div>
        <nav>
          <ul className="flex justify-center border border-amber-600">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <div className="flex">
          <div className="flex flex-col items-center">
            <LuUserRound />
            <p>Mi cuenta</p>
          </div>
          <div>
            <LuShoppingCart />
            <p>Mi carrito</p>
          </div>
        </div>
      </div>
    </div>
  );
}
