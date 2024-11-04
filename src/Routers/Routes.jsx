import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import CardContainer from "../Components/CardContainer";
import ProductDetails from "../Components/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () => fetch("/categories.json"),
        element: <Home />,
        children: [
          {
            path: "/",

            element: <CardContainer />,
            loader: () => fetch(`/products.json`),
          },
          {
            path: "categories/:category",
            loader: () => fetch(`/products.json`),
            element: <CardContainer />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch(`/products.json`),

      },
    ],
  },
]);

export { routes };
