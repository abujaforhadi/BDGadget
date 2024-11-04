import { NavLink, Outlet, useLocation } from "react-router-dom";
import Heading from "../Components/Heading";

function Dashboard() {
  const location = useLocation();

  return (
    <div>
      <div className="bg-customPurple py-5">
        <Heading
          title="Dashboard"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className="flex justify-center gap-2">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              `btn text-left px-4 py-2 ${
                isActive || location.pathname === "/dashboard"
                  ? "bg-customPurple text-white"
                  : "text-customPurple"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `btn text-left px-4 py-2 ${
                isActive ? "bg-customPurple text-white" : "text-customPurple"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
