//Helper functions here that could potentially be reused

const items = require("./data/items.json");

//function to find specific item or company by passing the id and the array of objects as arguments(e.g. --> searchById(item.id,items))
const searchById = (id, array) => {
  return array.find((element) => element.id === Number(id));
};

const simulateDelays = (res, data) => {
  const maxDelay = 2000;
  const delay = Math.random() * maxDelay;
  setTimeout(() => {
    res.status(200).json(data);
  }, delay);
};

module.exports = { searchById, simulateDelays };
