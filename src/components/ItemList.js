import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const menuImages = [
  new URL("./data/images/1.avif", import.meta.url).href,
  new URL("./data/images/2.jpg", import.meta.url).href,
  new URL("./data/images/3.png", import.meta.url).href,
  new URL("./data/images/4.jpg", import.meta.url).href,
  new URL("./data/images/5.webp", import.meta.url).href,
  new URL("./data/images/6.avif", import.meta.url).href,
  new URL("./data/images/7.avif", import.meta.url).href,
  new URL("./data/images/8.jpg", import.meta.url).href,
  new URL("./data/images/9.jpg", import.meta.url).href,
  new URL("./data/images/10.avif", import.meta.url).href,
  new URL("./data/images/11.avif", import.meta.url).href,
  new URL("./data/images/12.jpg", import.meta.url).href,
  new URL("./data/images/13.jpg", import.meta.url).href,
  new URL("./data/images/14.jpg", import.meta.url).href,
  new URL("./data/images/15.jpg", import.meta.url).href,
  new URL("./data/images/16.jpg", import.meta.url).href,
  new URL("./data/images/17.jpg", import.meta.url).href,
  new URL("./data/images/18.jpg", import.meta.url).href,
  new URL("./data/images/19.jpg", import.meta.url).href,
  new URL("./data/images/20.jpg", import.meta.url).href,
];

const getMenuImage = (itemId) => {
  const imageIndex = [...itemId].reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );
  return menuImages[imageIndex % menuImages.length];
};

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch Action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="p-4 my-3 border-b border-gray-200 flex justify-between gap-4"
          >
            {/* Food Details */}
            <div className="w-9/12">
              <h3 className="font-bold text-gray-800">{item.name}</h3>

              <p className="font-semibold mt-2">₹{item.price}</p>

              <p className="text-sm text-gray-500 mt-2">{item.description}</p>
            </div>

            {/* Food Image */}
            <div className="w-3/12 relative">
              <img
                className="w-full h-28 object-cover rounded-lg"
                src={item.image || getMenuImage(item.id)}
                alt={item.name}
              />

              <button
                className="block mx-auto -mt-4 relative bg-black text-white border border-white font-bold px-5 py-2 rounded-lg shadow-md"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
