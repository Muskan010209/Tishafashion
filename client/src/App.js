import React from "react"
import Header from "./components/Header";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";

import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { productsData } from "./api/Api";
import Product from "./components/Product";


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },

      {
        path:"/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/Login",
        element: <Login/>
      },
    ]

  }
])
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
