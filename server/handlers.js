const items = require("./data/items.json");
const companies = require("./data/companies.json");
const orders = require("./data/orders.json");
const customers = require("./data/customers.json");
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
  res.status(200).json(clientOrder);
};

//CREATES NEW ORDER IN ORDERS.JSON AND UPDATES ITEM QUANTITIES IN ITEMS.JSON
const handleNewOrder = (req, res) => {
  const { billingInfo, paymentInfo, orderContent } = req.body;

  //we need to first convert the customer's order into an array so we can loop through each item
  const orderContentArray = Object.values(orderContent);
  //Next we verify if we have enough in stock of each item ordered
  const hasEnoughInStorage = orderContentArray.every((element) => {
    return items.some((item) => {
      return item.id === element.id && item.numInStock >= element.quantity;
    });
  });

  console.log(orderContent)
  //If there's enough in storage then update the numInStorage in items.json and create new order
  if (hasEnoughInStorage) {
    const approvedItems = {};
    // updating the item quantities and adding approved items to approvedItems variable so we can send this info to the FE
    items.forEach((item) => {
      orderContentArray.forEach((itemToUpdate) => {
        if (item.id === itemToUpdate.id) {
          item.numInStock -= itemToUpdate.quantity;
          approvedItems[`${item.id}`] = {
            itemId: item.id,
            newNumInStock: item.numInStock,
            amountOrdered: itemToUpdate.quantity,
          };
        }
      });
    });
    //// Then we create the new order in orders.json
    const orderId = uuidv4().toString(); //generates new random order Id
    orders[`${orderId}`] = {
      billingInfo: billingInfo,
      paymentInfo: paymentInfo,
      orderContent: orderContent,
    };
    res.status(201).json({
      //the handler will always send a message with the amount ordered and the amount in stock
      status:201,
      message: "Success! Order has been approved!",
      approvedItems: approvedItems,
      order: orders[`${orderId}`],
    });
    //if there's not enough in storage then show the FE the amount in stock vs amount ordered
  } else {
    const rejectedItems = {};
    items.forEach((item) => {
      orderContentArray.forEach((itemToUpdate) => {
        if (item.id === itemToUpdate.id) {
          rejectedItems[`${item.id}`] = {
            itemId: item.id,
            numInStock: item.numInStock,
            amountOrdered: itemToUpdate.quantity,
          };
        }
      });
    });
    res.status(400).json({
      status:400,
      message: "Failure. Not enough stock for items ordered",
      rejectedItems: rejectedItems,
    });
  }
};

//SIGN IN
const handleSignIn = (req, res) => {
  const { email } = req.body;
  const validEmail = customers[`${email}`] ? true : false;
  if (validEmail) {
    res.status(201).json({
      message: "Login successful!",
      customer: {
        email: customers[`${email}`].email,
        customer: customers[`${email}`].orders,
      },
    });
  } else {
    res.status(401).json({ mesage: "Invalid email or password" });
  }
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
  handleSignIn,
};
