const initialState = {
    currItem: null,
    status:"idle"
}

const currItemReducer = (state = initialState, action)=> {
    switch(action.type) {
        case 'REQUEST_CURR_ITEM' : {
            return { ...state, status: "loading" }
        }
        case 'RECEIVE_CURR_ITEM' : {
            return {
                ...state,
                currItem : action.item,
                status: 'idle'
            }
        }
        case 'RECEIVE_CURR_ITEM_ERROR' : {
            return { ...state, status: "error" }
        }
        default: return state
    }
}

export default currItemReducer;

// helpers
// here the state refers to the global state with all the reducers combined
// get the current item
export const getcurrentItem = (state) => state.currItem.currItem;
// get the status
export const getCurrentItemStatus = (state) => state.currItem.status;