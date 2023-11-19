/* eslint-disable no-undef */
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCarts();

  const { price, name, image, recipe, _id } = item;

  const handleAddToCard = () => {
    // console.log(food, user?.email);
    if (user && user.email) {
      // todo: sent cart items to database
      const cartItems = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItems).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your card`,
            showConfirmButton: false,
            timer: 1500,
          });

          //cart to the update the cart items
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Login",
        text: "Please Login to Add to the card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 w-11/12 mx-auto bg-base-100 shadow-xl my-5">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="w-full rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-10 mr-4 mt-16 px-4 rounded">
        $ {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCard}
            className="btn btn-outline bg-slate-100 border-orange-500 border-0 border-b-4 mt-4"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
