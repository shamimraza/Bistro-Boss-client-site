import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCarts();

  // toDo: get admin value
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/homed">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/list">
                  <FaList></FaList>List Items
                </NavLink>
              </li>
            </>
          )}

          {/* shared nav links */}

          <div className="divider">OR</div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <CiMenuBurger></CiMenuBurger> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdEmail></MdEmail> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
