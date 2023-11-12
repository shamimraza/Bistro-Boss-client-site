import { Helmet } from "react-helmet-async";
import Cover from "../../../../shired/cover/Cover";
import menuImg from "../../../../../assets/menu/menu-bg.png";
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
    </div>
  );
};

export default Menu;
