import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { createContext, useState } from "react";

export const SelectedItem = createContext([]);
export const WishlistItem = createContext([]);

function MainLayout() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const location = useLocation();

  const navBarBgColor = 
    location.pathname === "/" || location.pathname.startsWith("/categories")
      ? "bg-customPurple text-white"
      : "bg-white";

  return (
    <WishlistItem.Provider value={[wishlistProduct, setWishlistProduct]}>
      <SelectedItem.Provider value={[selectedProduct, setSelectedProduct]}>
        <div className="bg-customGray mx-4 md:mx-10">
          <div className={`w-full fixed top-0 left-0 ${navBarBgColor} z-10 shadow-md`}>
            <NavBar />
          </div>

          <div className="pt-16 md:pt-16 min-h-[calc(100vh-200px)]">
            <Outlet />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </SelectedItem.Provider>
    </WishlistItem.Provider>
  );
}

export default MainLayout;
