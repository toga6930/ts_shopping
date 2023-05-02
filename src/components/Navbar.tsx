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
            <a href="/" as={NavLink}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" as={NavLink}>
              About
            </a>
          </li>
          <li>
            <a href="/store" as={NavLink}>
              Store
            </a>
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
