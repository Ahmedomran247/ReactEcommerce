import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./assets/Componets/Home/Home";
import Layout from "./assets/Componets/Layout/Layout";
import Login from "./assets/Componets/Login/Login";
import Logout from "./assets/Componets/Logout/Logout";
import Cart from "./assets/Componets/Cart/Cart";
import Categories from "./assets/Componets/Categories/Categories";
import Register from "./assets/Componets/Register/Register";
import Brands from "./assets/Componets/brands/brands";
import Wishlist from "./assets/Componets/Wishlist/Wishlist";
import CounterContextProvider from "./Context/CounterContext";
import UserContextProivder from "./Context/userContext";
import ProtectRoutes from "./assets/Componets/ProtectRoutes/ProtectRoutes";
import Products from "./assets/Componets/Products/Products";
import ProductDeatils from "./assets/Componets/ProductDeatils/ProductDeatils";
import CartContextprovider from "./Context/CartContext";




function App() {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectRoutes><Home/></ProtectRoutes> },
        { path: "Cart", element: <ProtectRoutes><Cart /></ProtectRoutes> },
        { path: "Categories", element: <ProtectRoutes><Categories /></ProtectRoutes>  },
        { path: "Products", element: <ProtectRoutes><Products /></ProtectRoutes>  },
        { path: "Wishlist", element:<ProtectRoutes><Wishlist /></ProtectRoutes> },
        {path: "ProductDeatils/:id/:category", element: <ProtectRoutes><ProductDeatils /></ProtectRoutes> },
        { path: "Register", element: <Register /> },
        { path: "brands", element: <ProtectRoutes><Brands /></ProtectRoutes> },
        { path: "Login", element: <Login /> },
        { path: "Logout", element: <Logout /> },
        { path: "*", element: <h1>Page Not Found</h1> },
        
      ],
    },
  ]);

  return (
    <CartContextprovider>
      <UserContextProivder>
      <CounterContextProvider>
        <RouterProvider router={Router} />
      </CounterContextProvider>
    </UserContextProivder>
    </CartContextprovider>
  );
}

export default App;
