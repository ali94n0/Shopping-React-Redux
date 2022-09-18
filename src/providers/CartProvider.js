import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { cartReducer } from "./CartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();
const initialState = {
  cart: [],
  total: 0,
};
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    dispatch({ type: "LOCAL_STORAGE", payload: savedCart });
  }, []);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);
