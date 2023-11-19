import Cover from "../shired/cover/Cover";
import orderCoverImg from "../../assets/dashboard/orders.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./ordertab/OrderTab";
import { useParams } from "react-router-dom";

const OrderCover = () => {
  const [menu] = useMenu();

  const { category } = useParams();
  console.log(category);

  const categories = ["salad", "soup", "pizza", "dessert", "drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  const pizza = menu.filter((items) => items.category === "pizza");
  const dessert = menu.filter((items) => items.category === "dessert");
  const drinks = menu.filter((items) => items.category === "drinks");

  return (
    <div className="relative">
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <div className="bg-black opacity-40 h-[300px] w-9/12 flex flex-col ml-44 items-center justify-center -mt-[500px] absolute"></div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>soup</Tab>
          <Tab>pizza</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderCover;
