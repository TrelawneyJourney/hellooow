import logo from "../../public/logo.svg";
import { LuUserRound } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuAlignJustify } from "react-icons/lu";

export default function Header() {
  return (
    <div className="">
      <div className="py-2.5 text-center text-sm">
        <p>🚚 Envío GRATIS en compras superiores a $90.000</p>
      </div>

      <div className="w-full py-2.5 bg-amber-100 border-b border-b-neutral-300/50">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4">
          <div className="hidden md:w-[100px]">
            <img src={logo} alt="logo" srcset="" />
          </div>

          <nav>
            <ul className="hidden lg:flex justify-center gap-5 text-sm">
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </nav>

          {/**Hamburger menu */}
          <div className="hidden max-lg:flex justify-between items-center  mx-auto w-full">
            <LuAlignJustify className="text-xl" />
            <div className="w-[150px]">
              <img src={logo} alt="logo" srcset="" />
            </div>
            <LuShoppingCart className="text-xl" />
          </div>

          {/**Login - Carrito */}
          <div className="hidden lg:flex gap-6">
            <div className="flex flex-col items-center">
              <LuUserRound className="text-xl" />
              <p className="text-xs">Mi cuenta</p>
            </div>
            <div className="flex flex-col items-center">
              <LuShoppingCart className="text-xl" />
              <p className="text-xs">Mi carrito</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
