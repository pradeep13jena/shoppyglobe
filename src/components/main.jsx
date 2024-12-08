import App from "./App";
import React from "react";
import Home from "./Home";
import PList from "./PList";
import PDetail from "./PDetail";
import CartList from "./CartList";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";
import { store } from "../utils/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CateList from "./CateList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Categories/:category",
        element: <CateList />,
      },
      {
        path: "/Products",
        element: <PList />,
      },
      {
        path: "/cart",
        element: <CartList />,
      },
      {
        path: "/item/:product",
        element: <PDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
