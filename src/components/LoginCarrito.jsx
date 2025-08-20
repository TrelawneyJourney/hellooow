import { LuUserRound, LuShoppingCart } from "react-icons/lu";
export default function LoginCarrito() {
  return (
    <div className="hidden lg:flex gap-6">
      <div className="flex flex-col items-center links">
        <LuUserRound className="text-xl" />
        <p className="text-xs">Mi cuenta</p>
      </div>
      <div className="flex flex-col items-center links">
        <LuShoppingCart className="text-xl" />
        <p className="text-xs">Mi carrito</p>
      </div>
    </div>
  );
}
