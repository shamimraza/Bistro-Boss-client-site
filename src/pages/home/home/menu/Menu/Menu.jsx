import { Helmet } from "react-helmet-async";
import Cover from "../../../../shired/cover/Cover";
import menuImg from "../../../../../assets/menu/banner3.jpg";
import dessertImg from "../../../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../../../hooks/useMenu";
import SectionTitle from "../../../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../../../menucategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  const offered = menu.filter((items) => items.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Todays Offers"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
