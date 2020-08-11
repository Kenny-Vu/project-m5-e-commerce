const intitialState = {
  status: "idle",
  user: null,
};
export default function signinReducer(state = intitialState, action) {
  console.log("------------------", action);
  switch (action.type) {
    case "REQUEST_USER_DATA": {
      return {
        ...state,
        status: "authenticating...",
      };
    }
    // case "RECEIVE_USER_DATA": {
    //     return {
    //         ...state,
    //         status: 'authenticated',
    //         user: action.user
    //     }
    // }
    // case "RECEIVE_USER_ERROR": {
    //     return {
    //         ...state,
    //         status: 'error authenticating',
    //     }
    // }
    // case "LOGOUT": {
    //     return {
    //         ...intitialState
    //     }
    // }
    default:
      return state;
  }
}
