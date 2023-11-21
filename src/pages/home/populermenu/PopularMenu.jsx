import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItemCard from "../../shired/menuitem/MenuItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  // console.log(menu);
  const popular = menu.filter((items) => items.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  // console.log(menu);
  return (
    <section>
      <SectionTitle
        subHeading="Popular Items"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-3">
        {popular.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="flex items-center text-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
