import restaurantMenus from "../data/menuData.json";

const useRestaurantMenu = (resId) => {
  const resInfo = restaurantMenus.find(
    (restaurant) => restaurant.restaurantId === resId,
  );

  return resInfo;
};

export default useRestaurantMenu;
//it is a custom hook that takes a restaurant ID as an argument and returns the corresponding restaurant information from the menuData.json file.
//Returns the restaurant information object that matches the provided restaurant ID. If no match is found, it returns undefined.
