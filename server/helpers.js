//Write helper functions here that could potentially be reused

const items = require("./data/items.json");

//function to find items using Ids and accepts array of ids as an argument
//could be used to refactor code
//difference is that it returns and array of items
const findItems = (itemIdArray) => {
  return itemIdArray.map((id) => {
    return items.find((itemObj) => {
      return itemObj.id === id;
    });
  });
};
