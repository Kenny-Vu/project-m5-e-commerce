 // get items from the backend
 export const requestItems = () => ({
    type: "REQUEST_ITEMS",
  });
  
  export const receiveItems = (items) => ({
    type: "RECEIVE_ITEMS",
    items,
  });
  
  export const receiveItemsError = () => ({
    type: "RECEIVE_ITEMS_ERROR",
  });

// add and remove items from cart
export const addItem = (item) => ({
    type: "ADD_ITEM",
    item,
  });
  
  export const removeItem = (item) => ({
    type: "REMOVE_ITEM",
    item,
  });
  
  