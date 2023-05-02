import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShopping } from "../context/ShoppingContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShopping();
  return (
    <>
      <nav className="navbar">
        <ul className="navul">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
        </ul>
        <button className="nav-button" onClick={openCart}>
          <FaShoppingCart />
          <div className="cart">{cartQuantity}</div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;

