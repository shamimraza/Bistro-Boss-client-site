import { Outlet } from "react-router-dom";
import Footer from "../pages/shired/Footer";
import Navbar from "../pages/shired/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
