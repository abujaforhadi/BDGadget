import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import Card from "../Components/Card";

function Home() {
  const { products, categories } = useLoaderData();

  return (
    <>
      <div className="pb-20 md:pb-96">
        <Hero />
      </div>
      <h1 className="py-5 text-center text-3xl font-bold">
        Explore Our Gadgets
      </h1>
      <div className="flex gap-4">
        {/* Category Sidebar */}
        <div className="w-1/4  px-2">
          <div className="grid gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className="btn btn-outline w-full text-left px-4 py-2"
              >
                {category.category_name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
