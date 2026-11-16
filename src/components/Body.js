import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import cardData from "./data/cardData.json";
import useOnlineStatus from "./utils/useOnlineStatus";
//import { withPromotedLabel } from "./RestaurantCard";

//not using keys (not acceptable) <<<<<<<<<<index as key <<<<<< unique id (best practice)

//const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants] = useState(cardData);
  const [filteredRestaurants, setFilteredRestaurants] = useState(cardData);

  const [searchText, setSearchText] = useState("");

  const onLineStatus = useOnlineStatus();
  if (onLineStatus === false) {
    return (
      <h1> Looks like you are offline !! Please check your connection.</h1>
    );
  }

  return (
    <div className="body bg-white">
      {/*Use filter for search top restaurant*/}
      <div className="filter flex">
        <div className=" search m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4  rounded-lg"
            onClick={() => {
              //Fillter the restaurantCard and update UI  ,need Search Text

              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4  rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => Number(res.info?.avgRating) >= 4,
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {filteredRestaurants.length === 0 ? (
          <p className="text-red-500 text-lg">No restaurants found!</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <div key={restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
