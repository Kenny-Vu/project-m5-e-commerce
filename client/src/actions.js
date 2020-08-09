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

// create and cancel new order
export const createOrder = (order) => ({
  type: "CREATE_ORDER",
  order,
});

export const cancelOrder = (order) => ({
  type: "CANCEL_ORDER",
  order,
});
