import { NavLink } from "react-router-dom";
import { navItems } from "../constants";

export default function Nav({ mobile = false }) {
  return (
    <nav
      className={`${
        mobile
          ? "flex flex-col items-center gap-2"
          : "hidden lg:flex lg:justify-center lg:gap-5 text-sm"
      }`}
    >
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
