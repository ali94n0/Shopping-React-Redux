import { toast } from "react-toastify";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (updatedCartIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cart: updatedCart,
            total: state.total + action.payload.offPrice,
          })
        );
      } else {
        const updatedItem = { ...updatedCart[updatedCartIndex] };
        updatedItem.quantity++;
        updatedCart[updatedCartIndex] = updatedItem;
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cart: updatedCart,
            total: state.total + action.payload.offPrice,
          })
        );
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
        (item) => item._id === action.payload._id
      );
      const updatedItem = { ...updatedCart[updatedCartIndex] };
      if (updatedItem.quantity === 1) {
        const filteredItem = updatedCart.filter(
          (item) => item._id !== action.payload._id
        );
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cart: filteredItem,
            total: state.total - action.payload.offPrice,
          })
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
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cart: updatedCart,
            total: state.total - action.payload.offPrice,
          })
        );
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.offPrice,
        };
      }
    case "LOCAL_STORAGE":
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.total,
      };
    default:
      return state;
  }
};
