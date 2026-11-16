import { LOGO_URL } from "./utils/contants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  //subscribe the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  // use UseContext method
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-emerald-50 ">
      <div className="logo-container">
        <img className="w-26 bg-pink-100" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  ">
            <Link to="/cart">Cart - ({cartItems.length})items</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              //setBtnNameReact("Logout");
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
