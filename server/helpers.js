// This file is for Helper functions here that could potentially be reused
const maxDelay = 2000;
const errorRate = 0.05; // Our error simulator in "simulateDelays" isn't working as intended so we'll at least make sure there are no errors

//function to find specific item or company by passing the id and the array of objects as arguments(e.g. --> searchById(item.id,items))
const searchById = (id, array) => {
  return array.find((element) => element.id === Number(id));
};

//This helper simulates delays and errors to make the website feel more "real"
const simulateDelays = (res, data, status) => {
  const delay = Math.random() * maxDelay;
  const error = errorRate >= Math.random();
  setTimeout(() => {
    if (error) {
      status = 500;
    }
    res.status(status).json(data);
  }, delay);
};

module.exports = { searchById, simulateDelays };
