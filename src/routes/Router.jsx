import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/home/home/menu/Menu/Menu";
import OrderCover from "../pages/orderCover/OrderCover";
import Login from "../pages/login/Login";
import SignUp from "../pages/registation/SignUp";
import Secret from "../pages/secret/Secret";
import PrivetRoutes from "./PrivetRoutes";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/dashboard/Cart/Cart";
import HomeD from "../pages/dashboard/homed/HomeD";
import Reservation from "../pages/dashboard/Reservation";
import Reviews from "../pages/dashboard/Reviews";
import ListItems from "../pages/dashboard/ListItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <OrderCover></OrderCover>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivetRoutes>
            <Secret></Secret>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "homed",
        element: <HomeD></HomeD>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "review",
        element: <Reviews></Reviews>,
      },
      {
        path: "list",
        element: <ListItems></ListItems>,
      },
    ],
  },
]);
