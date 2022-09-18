export const checkInCart = (cart, item) => {
  return cart.find((c) => c._id === item._id);
};
