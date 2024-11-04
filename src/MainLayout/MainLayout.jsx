import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { createContext, useState } from "react";
export const SelectedItem = createContext([]);
export const WishlistItem = createContext([]);

function MainLayout() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [wishlistProduct, setWishlistProduct] = useState([]);

  return (
    <WishlistItem.Provider value={[wishlistProduct, setWishlistProduct]}>
      <SelectedItem.Provider value={[selectedProduct, setSelectedProduct]}>
        <div className="bg-customGray mx-4 md:mx-10">
          {/* NavBar with custom color */}
          <div className="w-full  fixed top-0 left-0  bg-red-300 z-10 shadow-md">
            <NavBar />
          </div>

          {/* Content Area with padding to prevent overlap */}
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
