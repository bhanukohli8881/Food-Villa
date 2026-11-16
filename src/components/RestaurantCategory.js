import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ name, items }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full my-4 bg-white shadow-md rounded-xl p-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between text-left"
          aria-expanded={showItems}
          onClick={handleClick}
        >
          <span className="font-bold text-lg text-gray-800">
            {name} ({items.length})
          </span>
          <span className="text-xl">{showItems ? "🔼" : "🔽"}</span>
        </button>
      </div>

      {/* Accordion Body */}
      {showItems && <ItemList items={items} />}
    </div>
  );
};

export default RestaurantCategory;
