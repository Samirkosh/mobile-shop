import { createBrowserRouter, Link } from "react-router-dom";
import { LayoutPage } from "../layout/LayoutPage";
import { MainPage } from "../layout/MainPage";
import { AboutPages } from "../pages/AboutPages";
import { PhonePages } from "../pages/PhonePages";
import { ProfilePages } from "../pages/ProfilePages";
import { Cart } from "../pages/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/cart/:cartId",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <AboutPages />,
      },
      {
        path: "/phones",
        element: <PhonePages />,
      },
      {
        path: "/profile",
        element: <ProfilePages />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div>
        <h1>404 Not found</h1>
        <button>
          <Link to="/">go to home</Link>
        </button>
      </div>
    ),
  },
]);
