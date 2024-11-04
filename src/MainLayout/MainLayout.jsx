import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function MainLayout() {
  
  return (
    <div className="bg-customGray px-4 md:px-10">
      {/* NavBar with custom color */}
      <div className="py-2 md:px-6  fixed top-0 left-0 w-full bg-red-300 z-10 shadow-md">
        <NavBar />
      </div>

      {/* Content Area with padding to prevent overlap */}
      <div className="pt-16 md:pt-20"> 
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
