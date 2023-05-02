import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../useLocalStorage";

type CartItem = {
  id: number;
  quantity: number;
};
type Props = {
  children: ReactNode;
};

type ShoppingContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};
const ShoppingContext = createContext({} as ShoppingContext);

export function useShopping() {
  return useContext(ShoppingContext);
}
export function ShoppingProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("sewey", []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseQuantity = (id: number) => {
    setCartItems((items) => {
      return items.find((item) => item.id === id) == null
        ? [...items, { id, quantity: 1 }]
        : items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
    });
  };
  const decreaseQuantity = (id: number) => {
    setCartItems((items) => {
      return items.find((item) => item.id === id)?.quantity === 1
        ? items.filter((item) => item.id !== id)
        : items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
    });
  };
  const removeQuantity = (id: number) => {
    setCartItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeQuantity,
        cartItems,
        openCart,
        closeCart,
        cartQuantity
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingContext.Provider>
  );
}
