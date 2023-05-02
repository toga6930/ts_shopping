import currency from "./currency";
import { useShopping } from "../context/ShoppingContext";

type Props = {
  id: number;
  name: string;
  price: number;
  imgurl: string;
};

const StoreItem = ({ id, name, price, imgurl }: Props) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeQuantity
  } = useShopping();
  const quantity = getItemQuantity(id);
  return (
    <>
      <div className="store-container">
        <img src={imgurl} alt="sewey" />
        <div className="store">
          <div className="store-content">
            <h1>{name}</h1>
            <span>{currency(price)}</span>
          </div>
          <div className="store-button">
            {quantity === 0 ? (
              <button onClick={() => increaseQuantity(id)}>
                + Add To Cart
              </button>
            ) : (
              <div className="store-button">
                <button onClick={() => decreaseQuantity(id)}>-</button>
                <div className="quantity">{quantity}</div>
                <button onClick={() => increaseQuantity(id)}>+</button>
                <button
                  className="remove-button"
                  onClick={() => removeQuantity(id)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default StoreItem;
