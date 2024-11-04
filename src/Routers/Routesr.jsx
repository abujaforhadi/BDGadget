import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: async () => {
          const productsResponse = await fetch("/products.json");
          const categoriesResponse = await fetch("/categories.json");

          if (!productsResponse.ok || !categoriesResponse.ok) {
            throw new Response("Failed to fetch data", { status: 500 });
          }

          const products = await productsResponse.json();
          const categories = await categoriesResponse.json();
          
          return { products, categories };
        },
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export { routes };
