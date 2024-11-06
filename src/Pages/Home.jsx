import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "../Components/Hero";

function Home() {
  const categories = useLoaderData();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title="Home | BDGadget "
    const categoryFromPath = location.pathname.split("/")[2];
    setSelectedCategory(categoryFromPath ? categoryFromPath : "All");
  }, [location]);

  return (
    <>
      <div className="pb-20 md:pb-96">
        <Hero />
      </div>
      <h1 className="py-5 text-center text-3xl text-customPurple font-bold">
        Explore Our Gadgets
      </h1>
      <div className="grid grid-cols-1 md:flex gap-4">
        {/* Dynamic Category Items */}
        <div className="md:w-1/4 px-2">
          <div className="grid grid-cols-3 md:grid-cols-1 gap-2  justify-center items-center">
           
            <NavLink
              to="/categories"
              end
              onClick={() => setSelectedCategory("All")}
              className={`btn btn-outline w-full text-left px-4 py-2 ${
                selectedCategory === "All" ? "bg-customPurple text-white" : ""
              }`}
            >
              All
            </NavLink>

            {/* Dynamic Category Buttons */}
            {categories.map((category) => (
              <NavLink
                to={`/categories/${category.category_name}`}
                key={category.category_id}
                end
                onClick={() => setSelectedCategory(category.category_name)}
                className={`btn btn-outline w-full text-left px-4 py-2 ${
                  selectedCategory === category.category_name ? "bg-customPurple text-white" : ""
                }`}
              >
                {category.category_name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="md:w-3/4">
          <div key={location.pathname}> {/* Force re-render based on path */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
