import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Coatrack from "../contrack/Coatrack";
import Feature from "../feture/Feature";
import PopularMenu from "../populermenu/PopularMenu";
import Testimonial from "../testimonial/Testimonial";
import ChiefService from "./chifeservice/ChiefService";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChiefService></ChiefService>
      <PopularMenu></PopularMenu>
      <Coatrack></Coatrack>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
