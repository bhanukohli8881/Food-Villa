import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  //const cartItems = useSelector(store) => store.card.item
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <main className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold"> Cart</h1>
        {cartItems.length > 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 ? (
        <h1>Your cart is empty. Add Items to tha cart!</h1>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={`${item.id ?? item.name}-${index}`}
              className="flex justify-between border-b py-4"
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Cart;
