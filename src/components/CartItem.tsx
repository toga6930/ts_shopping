import { useShopping } from "../context/ShoppingContext";
import products from "../product.json";
import currency from "./currency";

type Props = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: Props) => {
  const { removeQuantity } = useShopping();
  const item = products.find((i) => i.id === id);
  if (!item) {
    return null;
  }
  return (
    <>
      <div className="cart-container">
        <img src={item.imgurl} alt="sewey" />
        <div style={{ flexGrow: 1 }}>
          <div>
            {item.name} {quantity > 1 && <span>X{quantity}</span>}
          </div>
          <div style={{ color: "#6c757d", fontSize: "1rem" }}>
            {currency(item.price)}
          </div>
        </div>
        <div>{currency(item.price * quantity)}</div>
        <button className="cart-button" onClick={() => removeQuantity(item.id)}>
          &times;
        </button>
      </div>
    </>
  );
};
export default CartItem;
