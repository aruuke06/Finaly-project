import { createBrowserRouter } from "react-router-dom";
import Layout from "./COMPONENTS/LAYOUT/Layout";
import AdminLayout from "./COMPONENTS/LAYOUT/AdminLayout";

import Ouylity from "./COMPONENTS/Ouylity/Ouylity";
import Raspberry from "./COMPONENTS/Raspberry/Raspberry";
import Food from "./COMPONENTS/Food/Food";

import Dinner from "./PAGES/Dinner";
import Fruits from "./PAGES/Fruits";
import Home from "./PAGES/Home";
import Snacks from "./PAGES/Snacks";
import Category from "./PAGES/Category";
import Breakfast from "./PAGES/Breakfast";
import Contact from "./PAGES/Contact";
import Services from "./PAGES/Services";
import Shop from "./PAGES/Shop";
import Cart from "./PAGES/Cart";
import Team from "./PAGES/Team";
import Notfound from "./PAGES/Notfound";
import Res from "./PAGES/Res";
import Like from "./PAGES/Like";
import Squirrels from "./PAGES/Squirrels";
import Fats from "./PAGES/Fats";
import Carbohydrates from "./PAGES/Carbohydrates";
import ProductsPage from "./PAGES/ProductsPage";
import ProductFormPage from "./PAGES/ProductFormPage";
import DashboardPage from "./PAGES/DashboardPage";
import Checkout from "./PAGES/Checkout";
import CheckoutSuccess from "./PAGES/CheckoutSuccess";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },

      {
        path: "shop",
        element: <Shop />,
        children: [
          { path: "breakfast", element: <Breakfast /> },
          { path: "dinner", element: <Dinner /> },
          { path: "fruits", element: <Fruits /> },
          { path: "snacks", element: <Snacks /> },
        ],
      },

      {
        path: "category",
        element: <Category />,
        children: [
          { index: true, element: <Squirrels /> },
          { path: "squirrels", element: <Squirrels /> },
          { path: "carbohydrates", element: <Carbohydrates /> },
          { path: "fats", element: <Fats /> },
        ],
      },

      { path: "team", element: <Team /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "checkout/success", element: <CheckoutSuccess /> },
      { path: "ouylity", element: <Ouylity /> },
      { path: "raspberry", element: <Raspberry /> },
      { path: "food", element: <Food /> },
      { path: "res", element: <Res /> },
      { path: "like", element: <Like /> },
      { path: "*", element: <Notfound /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/new", element: <ProductFormPage /> },
      { path: "products/:id/edit", element: <ProductFormPage /> },
    ],
  },
]);

export default myRouter;
