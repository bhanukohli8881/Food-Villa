import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return (
      <h2 className="text-center text-2xl font-bold text-red-500 mt-10">
        Restaurant Menu Not Found!
      </h2>
    );
  }

  const categories = resInfo.menuItems.reduce((groups, item) => {
    const categoryName = item.category || "Other";
    const category = groups.find((group) => group.name === categoryName);

    if (category) {
      category.items.push(item);
    } else {
      groups.push({ name: categoryName, items: [item] });
    }

    return groups;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Restaurant Header */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {resInfo.restaurantName}
        </h1>

        <p className="text-gray-500 mt-2">Explore our delicious menu</p>
      </div>

      {/* Menu Categories */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Our Menu</h2>

        {categories.map((category) => (
          <RestaurantCategory
            key={category.name}
            name={category.name}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
