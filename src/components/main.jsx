// The main page which controls all the imports and routing of the website.

import App from "./App";
import React, { lazy, Suspense } from "react";
import Home from "./Home";
// Imported all the components for Lazy display and suspense.
const PList = lazy(() => import("./PList")); 
const PDetail = lazy(() => import("./PDetail"));
const CartList = lazy(() => import("./CartList"));
const Checkout = lazy(() => import("./Checkout"));
const CateList = lazy(() => import("./CateList"));
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import { store } from "../utils/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        element: (
          <Suspense fallback={<LoadingPage />}>
            <CateList />
          </Suspense>
        ),
      },
      {
        path: "/Products",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <PList />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <CartList />
          </Suspense>
        ),
      },
      {
        path: "/item/:product",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <PDetail />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
