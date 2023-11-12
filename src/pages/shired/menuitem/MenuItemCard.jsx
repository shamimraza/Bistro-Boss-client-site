const MenuItemCard = ({ item }) => {
  const { price, name, image, recipe } = item;
  console.log(item);
  return (
    <div className="flex space-x-2 mb-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500"> ${price}</p>
    </div>
  );
};

export default MenuItemCard;
