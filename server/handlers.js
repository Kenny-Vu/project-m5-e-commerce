const items = require("./data/items.json");
const companies = require("./data/companies.json");
const orders = require("./data/orders.json");
const { v4: uuidv4 } = require("uuid");
const { searchById } = require("./helpers");
//Handles 404 page
const handleFourOhFour = (req, res) => {
  res
    .status(404)
    .json({ message: "Sorry we couldn't find what you were looking for..." });
};

//SENDS ALL ITEMS IN STORE
const handleGallery = (req, res) => {
  const itemList = items.map((item) => {
    const company = searchById(item.companyId, companies);
    item.companyName = company.name;
    return item; //The BE sends back each item with the companyName added so FE won't have to look for it
  });
  res.status(200).json(itemList);
};

//SENDS INFO ABOUT A SPECIFIC ITEM USING THE ITEM'S ID
const handleGetItem = (req, res) => {
  const itemId = req.params.itemId;
  const item = searchById(itemId, items);
  const company = searchById(item.companyId, companies);
  //Creates a new copy of the item but with the company name added
  const itemToSend = { ...item, companyName: company.name };

  res.status(200).json(itemToSend);
};
//SENDS ALL COMPANIES INFO
const handleGetAllCompanies = (req, res) => {
  res.status(200).json(companies);
};

//SENDS INFO ABOUT A SPECIFIC COMPANY USING COMPANY ID
const handleGetCompany = (req, res) => {
  const companyId = req.params.companyId;
  const company = searchById(companyId, companies);
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

//To follow REST principles, we will have to use a PUT method to update the item quantities in items.json
//The FE should probably fetch this PUT request first to check if there's enough items in storage and then decide what to do next
////This handler takes an array of objects as an arugment in this format:
// "orderContent":
// 	[
// 		{
// 			"id": 6543,
// 			"quantity": 2
// 		},
// 		{
// 			"id": 6545,
// 			"quantity": 2
// 		}
// 	]
//each object can have more key-value pairs but what's important is the id and the quantity.
const handleItemsQuantities = (req, res) => {
  const { orderContent } = req.body;
  const rejectedItems = [];
  const approvedItems = [];
  //We need to first check if we can actually sell the amount the client orders
  const hasEnoughInStorage = orderContent.every((element) => {
    return items.some((item) => {
      return item.id === element.id && item.numInStock > element.quantity;
    });
  });
  //If there's enough in storage then update the numInStorage in items.json
  if (hasEnoughInStorage) {
    items.forEach((item) => {
      orderContent.forEach((itemToUpdate) => {
        if (item.id === itemToUpdate.id) {
          item.numInStock -= itemToUpdate.quantity;
          approvedItems.push({
            itemId: item.id,
            newNumInStock: item.numInStock,
            amountOrdered: itemToUpdate.quantity,
          });
        }
      });
    });
    res.status(200).json({
      //the handler will always send a message with the amount ordered and the amount in stock
      message: "Success! All item quantities have been updated!",
      approvedItems: approvedItems,
    });
    //if there's not enough in storage then notify the FE
  } else {
    items.forEach((item) => {
      orderContent.forEach((itemToUpdate) => {
        if (item.id === itemToUpdate.id) {
          rejectedItems.push({
            itemId: item.id,
            numInStock: item.numInStock,
            amountOrdered: itemToUpdate.quantity,
          });
        }
      });
    });
    res.status(400).json({
      message: "Failure. Not enough stock for items ordered",
      rejectedItems: rejectedItems,
    });
  }
};

//RECEIVES CLIENT INFOS FROM THE CHECKOUT FORM AND CREATES A NEW ORDER IN ORDER.JSON
//For now, this info sent in the fetch request has to be in the same format as the orders.json file
const handleNewOrder = (req, res) => {
  const { billingInfo, paymentInfo, orderContent } = req.body;
  const orderId = uuidv4().toString(); //generates new order Id
  orders[`${orderId}`] = {
    billingInfo: billingInfo,
    paymentInfo: paymentInfo,
    orderContent: orderContent,
  };
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
  handleItemsQuantities,
};
