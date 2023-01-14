import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./routes/authenication/authenication.component";
import { UserProvider } from "./contexts/user.context";
import Shop from "./routes/shop/shop.component";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import Checkout from "./routes/checkout/checkout.component";
import CategoriesPreview from './routes/categories-preview/categories-preview.component';
import Category from './routes/category/category.component';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <CategoriesPreview />
          },
          {
            path: ':category',
            element: <Category />
          }
        ]
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <UserProvider> */}
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
      {/* </UserProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
