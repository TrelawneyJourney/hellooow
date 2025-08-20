import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import { LuShoppingCart, LuAlignJustify } from "react-icons/lu";
import Nav from "../components/Nav";
import LoginCarrito from "../components/LoginCarrito";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="">
      <div className="py-2.5 text-center text-sm">
        <p>🚚 Envío GRATIS en compras superiores a $90.000</p>
      </div>

      <div className="w-full py-2.5 bg-amber-100 border-b border-b-neutral-300/50">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4">
          {/**logo */}
          <div className="hidden lg:block md:w-[100px]">
            <Link to="/">
              <img src={logo} alt="logo" className="cursor-pointer" />
            </Link>
          </div>

          <Nav />

          {/**Hamburger menu */}
          <div className="hidden max-lg:flex justify-between items-center  mx-auto w-full">
            <LuAlignJustify className="text-xl" />
            <div className="w-[150px]">
              <Link>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <LuShoppingCart className="text-xl" />
          </div>

          {/**Login - Carrito */}
          <LoginCarrito />
        </div>
      </div>
    </div>
  );
}
