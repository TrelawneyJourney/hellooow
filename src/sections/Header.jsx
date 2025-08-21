import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.svg";
import { LuShoppingCart, LuAlignJustify, LuX } from "react-icons/lu";
import Nav from "../components/Nav";
import LoginCarrito from "../components/LoginCarrito";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOut = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOut);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [menuOpen]);

  return (
    <div className="">
      <div className="py-2.5 text-center text-sm">
        <p>🚚 Envío GRATIS en compras superiores a $90.000</p>
      </div>

      <div className="w-full py-2.5 bg-amber-100 border-b border-b-neutral-300/50 relative">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4">
          {/**logo */}
          <div className="hidden lg:block md:w-[100px]">
            <Link to="/">
              <img src={logo} alt="logo" className="cursor-pointer" />
            </Link>
          </div>

          <Nav />

          {/**Hamburger menu */}
          <div className="hidden max-lg:flex justify-between items-center mx-auto w-full">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <LuX className="text-2xl" />
              ) : (
                <LuAlignJustify className="text-xl" />
              )}
            </button>

            {/**logo mobile */}
            <div className="w-[150px]">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            {/**carrito */}
            <LuShoppingCart className="text-xl links" />
          </div>

          {/**Login - Carrito */}
          <LoginCarrito />

          {menuOpen && (
            <div
              className="absolute top-full left-0 w-full bg-amber-100 shadow-md lg:hidden px-4 z-40"
              ref={menuRef}
            >
              <div className="flex flex-col items-center gap-4 py-4">
                <Nav mobile />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
