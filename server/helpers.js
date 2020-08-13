// This file is for Helper functions here that could potentially be reused
const maxDelay = 2000;
const errorRate = 0.05;

//function to find specific item or company by passing the id and the array of objects as arguments(e.g. --> searchById(item.id,items))
const searchById = (id, array) => {
  return array.find((element) => element.id === Number(id));
};

const simulateDelays = (res, data, status) => {
  const delay = Math.random() * maxDelay;
  const error = errorRate >= Math.random();
  setTimeout(() => {
    if (error) {
      throw new Error(error);
    } else res.status(status).json(data);
  }, delay);
};

module.exports = { searchById, simulateDelays };
