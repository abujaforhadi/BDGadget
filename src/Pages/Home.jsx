import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";

function Home() {
  const categories = useLoaderData();

  return (
    <>
      <div className="pb-20 md:pb-96">
        <Hero />
      </div>
      <h1 className="py-5 text-center text-3xl font-bold">
        Explore Our Gadgets
      </h1>
      <div className="flex gap-4">
        {/* Dynamic Category Items */}
        <div className="w-1/4 px-2">
          <div className="grid gap-2 justify-center">
            {categories.map((category) => (
              <NavLink
                to={`/categories/${category.category_name}`}
                key={category.id}
                className={({ isActive }) =>
                  `btn btn-outline w-full text-left px-4 py-2 ${
                    isActive ? "bg-customPurple text-white" : ""
                  }`
                }
              >
                {category.category_name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="w-3/4">
          <div className="">
            <Outlet /> {/* Renders the selected category’s products */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
