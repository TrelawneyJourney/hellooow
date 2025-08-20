import { NavLink } from "react-router-dom";
import { navItems } from "../constants";

export default function Nav() {
  return (
    <nav className="hidden lg:flex justify-center gap-5 text-sm">
      {navItems.map((i) => (
        <NavLink
          to={i.to}
          className={({ isActive }) =>
            isActive ? "text-amber-500" : "hover:text-amber-300"
          }
        >
          {i.item}
        </NavLink>
      ))}
    </nav>
  );
}
