const initialState = {
  search: null,
  results: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_ITEM": {
      return {
        search: action.search,
        results: action.results,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
