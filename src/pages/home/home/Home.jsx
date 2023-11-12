import Banner from "../banner/Banner";
import Category from "../category/Category";
import Feature from "../feture/Feature";
import PopularMenu from "../populermenu/PopularMenu";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
