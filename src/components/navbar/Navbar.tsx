import { NavLink } from "react-router-dom";
import assets from "../../assets";
import { menuItems } from "./data/navbar-data";

const Navbar = () => {
  return (
    <nav className="bg-[#eadcc3] px-4 pt-4 text-[#17130c] sm:px-6 lg:px-10">
      <div className="flex w-full max-w-full flex-col gap-4 overflow-hidden border-2 border-[#17130c] bg-[#fffaf0] p-3 shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[6px_6px_0_#17130c] lg:flex-row lg:items-center">
        <NavLink className="flex min-w-0 items-center gap-3" to="/">
          <img
            src={assets.lengArts}
            alt="Deutsch Level Up"
            className="h-14 w-14 border-2 border-[#17130c] bg-[#ffe130] object-cover"
          />
          <span className="truncate text-base font-black uppercase tracking-[0.08em] sm:text-lg">
            Deutsch Studio
          </span>
        </NavLink>

        <ul className="flex max-w-full py-1 gap-2 overflow-x-auto pb-1 lg:ml-auto lg:flex-wrap lg:items-center lg:overflow-visible lg:pb-0">
          {menuItems.map((item) => (
            <li className="shrink-0 lg:shrink" key={item.name}>
              <NavLink
                className={({ isActive }) =>
                  `block max-w-[calc(100vw-4rem)] truncate border border-[#17130c] px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 hover:bg-[#ffe130] hover:shadow-[3px_3px_0_#17130c] lg:max-w-none ${
                    isActive
                      ? "bg-[#ff7b2f] text-white shadow-[3px_3px_0_#17130c]"
                      : "bg-[#fffaf0]"
                  }`
                }
                end={item.link === "/"}
                to={item.link}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
