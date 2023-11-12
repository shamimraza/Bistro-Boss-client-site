import "./ChiefService.css";
import menuBg from "../../../../assets/menu/menu-bg.png";

const ChiefService = () => {
  return (
    <div className="chief-service h-[580px] bg-fixed">
      <div className="relative">
        <img className="w-10/12 h-[500px] mx-auto pt-20 " src={menuBg} alt="" />
      </div>
      <div className="w-6/12 h-[200px] mx-auto text-center absolute ml-52 -mt-72">
        <p className="uppercase text-3xl mb-4">Bistro Boss</p>
        <p className="mb-t">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChiefService;
