const initialState = {
  currentOrder: {},
  status: "idle",
};

const orderReducer = (state = initialState, action) => {

  switch (action.type) {
      case 'POST_ORDER' : {
          return {
              ...state,
              status: "waiting",
              currentOrder : {
                  ...action.order
              }
          }
      }
      case 'COMPLETE_ORDER' : {
        return initialState
    }
      case 'ORDER_COMPLETION_ERROR' : {
        return {
          ...state,
          status: "error",
          currentOrder : {
              ...action.order
          }
      }
    }
    default:
      return state;
  }
};

export default orderReducer;

// helpers
// here the state refers to the global state with all the reducers combined
// get the current order
export const getOrder = (state) => {
    return state.order.currentOrder;
  };
  
// get the order status
  export const getOrderStatus = (state) => {
    return state.order.status;
  };