import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import CardContainer from "../Components/CardContainer";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage></ErrorPage>,
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
            path: "categories",
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
        children:[
          {
            path: "/dashboard",
            element: <Cart />,
          },
          {
            path: "/dashboard/cart",
            element: <Cart />,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist />,
          },

        ]
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
      {
        path: "/faq",
        element:  <Faq />,
      },
    ],
  },
]);

export { routes };
