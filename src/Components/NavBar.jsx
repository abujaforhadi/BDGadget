import { AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar  flex items-center justify-between">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AiOutlineUnorderedList />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className=" text-xl ml-2 ">
          <span className="text-red-300">BD</span>Gadget
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-1">
        <Link className="btn bg-white rounded-full">
          <AiOutlineShoppingCart />
        </Link>
        <Link className="btn bg-white rounded-full">
        <GiSelfLove />

        </Link>
      </div>
    </div>
  );
}

export default NavBar;
