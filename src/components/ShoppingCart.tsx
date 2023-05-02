import { useShopping } from "../context/ShoppingContext";
import CartItem from "./CartItem";
import currency from "./currency";
import products from "../product.json";

type Props = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: Props) => {
  const { closeCart, cartItems } = useShopping();
  return (
    <>
      <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-button" onClick={closeCart}>
            X
          </button>
        </div>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="total">
          <span>Total</span>
          <div>
            {currency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
