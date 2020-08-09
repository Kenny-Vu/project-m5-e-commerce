const initialState = {
    items: null,
    status:"idle"
}

const itemsReducer = (state = initialState, action)=> {
    switch(action.type) {
        case 'REQUEST_ITEMS' : {
            return { ...state, status: "loading" }
        }
        case 'RECEIVE_ITEMS' : {
            return {
                ...state,
                items : action.items,
                status: 'idle'
            }
        }
        case 'RECEIVE_ITEMS_ERROR' : {
            return { ...state, status: "error" }
        }
        default: return state
    }
}

export default itemsReducer;

// helpers
// here the state refers to the global state with all the reducers combined
// get an array with all the store items
export const getStoreItemArray = (state) => state.items.items;
// get the status
export const getStoreItemArrayStatus = (state) => state.items.status;