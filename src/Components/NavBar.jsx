import { useContext } from "react";
import { AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SelectedItem, WishlistItem } from "../MainLayout/MainLayout";

function NavBar() {
  const [selectedProduct] = useContext(SelectedItem);
  const [wishlistProduct] = useContext(WishlistItem);


  return (
    <div className="px-5">
      <div className="navbar w-full flex items-center justify-between">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <AiOutlineUnorderedList />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home </NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className=" text-2xl ml-2 font-bold">
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
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          
          <div className="indicator">
            <span className="indicator-item badge badge-secondary text-black bg-white"> {selectedProduct.length}</span>
            <Link to="/dashboard/cart" className="btn bg-white rounded-full"> <AiOutlineShoppingCart /></Link>
          </div>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary text-black bg-white"> {wishlistProduct.length}</span>
            <Link to="/dashboard/wishlist" className="btn bg-white rounded-full"> <GiSelfLove /></Link>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default NavBar;
