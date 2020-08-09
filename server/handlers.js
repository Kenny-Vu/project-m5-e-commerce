const items = require("./data/items.json");
const companies = require("./data/companies.json");
const orders = require("./data/orders.json");
const { v4: uuidv4 } = require("uuid");

//Handles 404 page
const handleFourOhFour = (req, res) => {
  res
    .status(404)
    .json({ message: "Sorry we couldn't find what you were looking for..." });
};

//SENDS ALL ITEMS IN STORE
const handleGallery = (req, res) => {
  res.status(200).json(items);
};

//SENDS INFO ABOUT A SPECIFIC ITEM USING THE ITEM'S ID
const handleGetItem = (req, res) => {
  const itemId = req.params.itemId;
  const item = items.find((itemObj) => {
    //converting the itemId string from the url params to a number
    return itemObj.id === Number(itemId);
  });
  res.status(200).json(item);
};
//SENDS ALL COMPANIES INFO
const handleGetAllCompanies = (req, res) => {
  res.status(200).json(companies);
};

//SENDS INFO ABOUT A SPECIFIC COMPANY USING COMPANY ID
const handleGetCompany = (req, res) => {
  const companyId = req.params.companyId;
  const company = companies.find((companyObj) => {
    //converting the itemId string from the url params to a number
    return companyObj.id === Number(companyId);
  });
  res.status(200).json(company);
};

// GETS LIST OF ORDERS
//There's 2 dummy orders for testing at the moment
//For the moment, I separated each order by Id.
const handleGetAllOrders = (req, res) => {
  res.status(200).json(orders);
};

//RETRIEVES SPECIFIC ORDER
const handleGetOrder = (req, res) => {
  const { orderId } = req.params;
  const clientOrder = orders[`${orderId}`];
  console.log(clientOrder);
  res.status(200).json(clientOrder);
};

//RECEIVES CLIENT INFOS FROM THE CHECKOUT FORM AND CREATES A NEW ORDER IN ORDER.JSON
//Post method
const handleNewOrder = (req, res) => {
  const { billingInfo, paymentInfo, orderContent } = req.body;
  orders.push({
    id: uuidv4().toString(),
    billingInfo: billingInfo,
    paymentInfo: paymentInfo,
    orderContent: orderContent,
  });
  res.status(201).json({ orders });
};

module.exports = {
  handleGallery,
  handleGetItem,
  handleGetAllCompanies,
  handleGetCompany,
  handleGetAllOrders,
  handleGetOrder,
  handleNewOrder,
  handleFourOhFour,
};
