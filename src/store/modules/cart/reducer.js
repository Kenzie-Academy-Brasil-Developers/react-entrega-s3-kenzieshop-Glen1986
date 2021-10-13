const defaultState = JSON.parse(localStorage.getItem("cart")) || []
const cartReducer = (state = [], action) => {
  console.log("CART", action);
  switch (action.type) {
    case "@cart/ADD":
      const {product} = action;
      return [...state, product];
    case "@cart/REMOVE":
      const {list} = action;
      return list;
    default:
      return defaultState;
  }
};

export default cartReducer;
