const FoodCard = ({ item }) => {
  const { price, name, image, recipe } = item;

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
          <button className="btn btn-outline bg-slate-100 border-orange-500 border-0 border-b-4 mt-4">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
