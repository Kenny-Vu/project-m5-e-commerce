//This file will have snippets of code that shouldn't be implemented yet and should be ignored when staging changes
//I use this file to write code I want to test or need to modify without accidentally deleting other useful code or something
const handleItemsQuantities = (req, res) => {
  const { orderContent } = req.body;
  const rejectedItems = [];
  const approvedItems = [];

  //we need to first change the object into an array so we can loop through it
  const orderContentArray = Object.values(orderContent);

  //We need to first check if we can actually sell the amount the client orders
  const hasEnoughInStorage = orderContentArray.every((element) => {
    return items.some((item) => {
      return item.id === element.id && item.numInStock > element.quantity;
    });
  });
  //If there's enough in storage then update the numInStorage in items.json
  if (hasEnoughInStorage) {
    items.forEach((item) => {
      orderContentArray.forEach((itemToUpdate) => {
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
      orderContentArray.forEach((itemToUpdate) => {
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
