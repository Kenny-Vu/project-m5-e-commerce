//This file will have snippets of code that shouldn't be implemented yet and should be ignored when staging changes
//I use this file to write code I want to test or need to modify without accidentally deleting other useful code or something

const handleNewOrder = (req, res) => {
  const { billingInfo, paymentInfo, orderContent } = req.body;
  const rejectedItems = {};
  const approvedItems = {};

  //validate the order first

  //we need to first change the object into an array so we can loop through it
  const orderContentArray = Object.values(orderContent);
  //We need to also check if we can actually sell the amount the client orders
  const hasEnoughInStorage = orderContentArray.every((element) => {
    return items.some((item) => {
      return item.id === element.id && item.numInStock > element.quantity;
    });
  });
  //If there's enough in storage then update the numInStorage in items.json and create new order
  if (hasEnoughInStorage) {
    // updating the item quantities
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
    //// ORDER CREATION
    const orderId = uuidv4().toString(); //generates new order Id
    orders[`${orderId}`] = {
      billingInfo: billingInfo,
      paymentInfo: paymentInfo,
      orderContent: orderContent,
    };
    res.status(201).json({
      //the handler will always send a message with the amount ordered and the amount in stock
      message: "Success! Order has been approved!",
      order: orders[`${orderId}`],
      approvedItems: approvedItems,
    });
    //if there's not enough in storage then notify the FE
  } else {
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
      message: "Failure. Not enough stock for items ordered",
      rejectedItems: rejectedItems,
    });
  }
};

//SIGN IN - POST
const handleSignIn = (req, res) => {
  const { email } = req.body;
  console.log(req.body);
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
