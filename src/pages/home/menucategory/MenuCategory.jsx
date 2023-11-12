import MenuItemCard from "../../shired/menuitem/MenuItemCard";

const MenuCategory = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {items.map((item) => (
        <MenuItemCard key={item._id} item={item}></MenuItemCard>
      ))}
    </div>
  );
};

export default MenuCategory;
