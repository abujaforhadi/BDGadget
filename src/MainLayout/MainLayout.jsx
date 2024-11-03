import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"

function MainLayout() {
  return (
    <div className="bg-customGray px-4 md:px-10">
      {/*Nav add custom color with dynamic */}
      <div className="py-2 px-10">
      <NavBar></NavBar>
      </div>
      
     
      
      {/* dynamic */}
      <Outlet></Outlet> 
       {/* Footer */}
       <Footer></Footer>

    </div>
  )
}
export default MainLayout