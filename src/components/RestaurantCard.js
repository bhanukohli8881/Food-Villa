import { Link } from "react-router-dom";

const restaurantImages = {
  "restaurant-01": new URL("./data/images/19.jpg", import.meta.url).href,
  "restaurant-02": new URL("./data/images/2.jpg", import.meta.url).href,
  "restaurant-03": new URL("./data/images/3.png", import.meta.url).href,
  "restaurant-04": new URL("./data/images/5.webp", import.meta.url).href,
  "restaurant-05": new URL("./data/images/6.avif", import.meta.url).href,
  "restaurant-06": new URL("./data/images/8.jpg", import.meta.url).href,
  "restaurant-07": new URL("./data/images/7.avif", import.meta.url).href,
  "restaurant-08": new URL("./data/images/11.avif", import.meta.url).href,
  "restaurant-09": new URL("./data/images/10.avif", import.meta.url).href,
  "restaurant-10": new URL("./data/images/20.jpg", import.meta.url).href,
  "restaurant-11": new URL("./data/images/17.jpg", import.meta.url).href,
  "restaurant-12": new URL("./data/images/18.jpg", import.meta.url).href,
  "restaurant-13": new URL("./data/images/13.jpg", import.meta.url).href,
  "restaurant-14": new URL("./data/images/7.avif", import.meta.url).href,
  "restaurant-15": new URL("./data/images/1.avif", import.meta.url).href,
  "restaurant-16": new URL("./data/images/4.jpg", import.meta.url).href,
  "restaurant-17": new URL("./data/images/15.jpg", import.meta.url).href,
  "restaurant-18": new URL("./data/images/2.jpg", import.meta.url).href,
  "restaurant-19": new URL("./data/images/2.jpg", import.meta.url).href,
  "restaurant-20": new URL("./data/images/3.png", import.meta.url).href,
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { imageId, name, avgRating, cuisines, costForTwo, sla } = resData.info;

  const imagePath =
    restaurantImages[imageId] || restaurantImages["restaurant-01"];

  return (
    <Link
      className="block w-64 shrink-0 m-3 p-4 rounded-xl bg-gray-200 hover:bg-gray-300 hover:shadow-lg transition"
      to={`/restaurant/${resData.info.id}`}
    >
      <img
        className="w-full h-40 object-cover rounded-lg"
        alt={name}
        src={imagePath}
      />

      <h3 className="font-bold text-lg mt-3">{name}</h3>

      <h4 className="text-sm text-gray-600 mt-1">{cuisines.join(", ")}</h4>

      <h4 className="font-semibold mt-2">⭐ {avgRating} Star</h4>

      <h4 className="text-sm mt-1">{costForTwo}</h4>

      <h4 className="text-sm text-gray-500 mt-1">{sla.slaString}</h4>
    </Link>
  );
};
{
  /** 
// Higher Order Component
//input RestaurantCard ==> RestaurantCardpromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};*/
}

export default RestaurantCard;
