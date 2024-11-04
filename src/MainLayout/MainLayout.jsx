import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function MainLayout() {
  
  return (
    <div className="bg-customGray mx-4 md:mx-10">
      {/* NavBar with custom color */}
      <div className="w-full  fixed top-0 left-0  bg-red-300 z-10 shadow-md">
        <NavBar />
      </div>

      {/* Content Area with padding to prevent overlap */}
      <div className="pt-16 md:pt-16"> 
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;