import { Link } from "react-router-dom";
import Cover from "../../shired/cover/Cover";
import MenuItemCard from "../../shired/menuitem/MenuItemCard";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8 relative">
      {title && <Cover img={img} title="Our menu"></Cover>}
      <div className="bg-black opacity-20 h-[300px] w-9/12 flex flex-col ml-44 items-center justify-center -mt-[500px] absolute"></div>
      <div className="grid md:grid-cols-2 gap-3 my-16">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/order">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
