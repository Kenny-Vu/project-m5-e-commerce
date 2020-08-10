const initialState = {
  currentOrder: {},
  status: "idle",
};

const orderReducer = (state = initialState, action) => {

  switch (action.type) {
      case 'CREATE_ORDER' : {
          return {
              ...state,
              [action.order.id] : {
                  ...action.order
              }
          }
      }
      case 'CANCEL_ORDER' : {
        return initialState
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