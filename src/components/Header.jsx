import logo from "../../public/logo.svg";
import { LuUserRound } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  return (
    <div className="">
      <div className="py-2.5 text-center text-sm">
        <p>🚚 Envío GRATIS en compras superiores a $90.000</p>
      </div>

      <div className="bg-amber-100 w-full py-3.5">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4">
          <div className="w-[100px]">
            <img src={logo} alt="logo" srcset="" />
          </div>
          <nav>
            <ul className="flex justify-center gap-4">
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </nav>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <LuUserRound />
              <p className="text-xs">Mi cuenta</p>
            </div>
            <div className="flex flex-col items-center">
              <LuShoppingCart />
              <p className="text-xs">Mi carrito</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
