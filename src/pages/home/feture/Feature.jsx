import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature-item  bg-fixed text-white">
      <section>
        <SectionTitle
          subHeading="check it out"
          heading="feature items"
        ></SectionTitle>
      </section>
      <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-60 ">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            exercitationem eum fugit sapiente nulla porro placeat laudantium
            cumque, aliquid nesciunt rerum. Cumque tenetur molestiae sequi
            magnam neque explicabo sapiente porro nostrum in quo, dolor
            laudantium, perferendis error, ex modi? Totam sequi deserunt quia
            ipsa expedita soluta quaerat, necessitatibus consectetur inventore?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
