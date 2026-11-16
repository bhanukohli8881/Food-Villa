import { useNavigate } from "react-router-dom";
import { ABOUT_URL } from "./utils/contants";

const About = () => {
  const navigate = useNavigate();
  return (
    <div
      className=" min-h-[550px] bg-cover bg-center flex items-center justify-center text-center px-5"
      style={{
        backgroundImage: `url(${ABOUT_URL})`,
      }}
    >
      <div className="max-w-2xl bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-5">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          Discover delicious food from your favourite restaurants. Fresh food,
          great taste and happy moments!
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black hover:bg- text-white px-8 py-3 rounded-xl"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default About;
