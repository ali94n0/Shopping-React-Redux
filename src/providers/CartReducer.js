import { toast } from "react-toastify";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedCartIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedCartIndex] };
        updatedItem.quantity++;
        updatedCart[updatedCartIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "REMOVE_PRODUCT":
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedCartIndex] };
      if (updatedItem.quantity === 1) {
        const filteredItem = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        toast.warning(`${action.payload.name} removed from cart!`);
        return {
          ...state,
          cart: filteredItem,
          total: state.total - action.payload.offPrice,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedCartIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.offPrice,
        };
      }

    default:
      return state;
  }
};
