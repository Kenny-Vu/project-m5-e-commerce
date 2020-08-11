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

// get companies from the backend
export const requestCompanies = () => ({
  type: "REQUEST_COMPANIES",
});

export const receiveCompanies = (items) => ({
  type: "RECEIVE_COMPANIES",
  items,
});

export const receiveCompaniesError = () => ({
  type: "RECEIVE_COMPANIES_ERROR",
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

// post order to backend
export const postOrder = (order) => ({
  type: "POST_ORDER",
  order,
});

export const completeOrder = () => ({
  type: "COMPLETE_ORDER",
});

export const orderCompletionError = (order) => ({
  type: "ORDER_COMPLETION_ERROR",
  order,
});

//KENNY-TEST
export const searchItem = (search, results) => ({
  type: "SEARCH_ITEM",
  search,
  results,
});
