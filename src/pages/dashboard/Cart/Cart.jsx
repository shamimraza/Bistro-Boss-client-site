import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deleteCount > 0) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <section>
      <SectionTitle
        subHeading="---My Cart---"
        heading="WANNA ADD MORE?"
      ></SectionTitle>
      <div className="rounded-t-lg p-10 bg-[#F6F6F6]">
        <div className="flex justify-between ">
          <h2 className="text-4xl font-bold">Total orders: {cart.length}</h2>
          <h2 className="text-4xl font-bold">total price : $ {totalPrice}</h2>
          <button className="btn btn-primary">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full mt-8">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] ">
                <th>No :</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrash className="text-2xl text-orange-500"></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
