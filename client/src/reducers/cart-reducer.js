const initialState = {
  orderContent: {},
  status: "idle",
};

const cartReducer = (state = initialState, action) => {
  const id = action.item ? action.item.id : null;

  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        orderContent: {
          ...state.orderContent,
          [action.item.id]: {
            ...action.item,
            quantity: state.orderContent[id]
              ? state.orderContent[id].quantity + 1
              : 1,
          },
        },
      };
    }
    case "REMOVE_ITEM": {
      if (state.orderContent[id].quantity === 1) {
        const stateCopy = { ...state };
        delete stateCopy.orderContent[id];
        return stateCopy;
      } else {
        return {
          ...state,
          orderContent: {
            ...state.orderContent,
            [action.item.id]: {
              ...action.item,
              quantity: state.orderContent[id].quantity - 1,
            },
          },
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;

// helpers
// here the state refers to the global state with all the reducers combined
// get an array with all the order (cart) content
export const getCart = (state) => {
  return Object.values(state.cart.orderContent);
};
// get the status
export const getCartStatus = (state) => state.cart.status;

// get total number of items in cart
export const getNumItemsCart = (state) => {
  const cart = getCart(state);

  return cart.length > 0
    ? cart.map((item) => item.quantity).reduce((val, acc) => val + acc)
    : 0;
};

//get total price for cart
export const getTotalPriceCart = (state) => {
  const cart = getCart(state);

  let totalprice = 0;

  cart.forEach((item) => {
    totalprice =
      parseFloat(item.price.split("$")[1]) * item.quantity + totalprice;
  });
  return totalprice
};
