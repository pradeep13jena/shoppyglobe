import App from './App'
import React from 'react'
import Home from './Home'
import PList from './PList'
import PDetail from './PDetail'
import CartList from './CartList'
import ErrorPage from './ErrorPage'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CateList from './CateList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/Categories/:category',
        element: <CateList/>
      },
      {
        path: '/Products',
        element: <PList/>
      },
      {
        path: '/cart',
        element: <CartList/>
      },
      {
        path: '/products/:product',
        element: <PDetail/>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);