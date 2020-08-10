//Helper functions here that could potentially be reused

const items = require("./data/items.json");

//function to find specific item or company by passing the id and the array of objects as arguments(e.g. --> searchById(item.id,items))
const searchById = (id, array) => {
  return array.find((element) => element.id === Number(id));
};

module.exports = { searchById };
