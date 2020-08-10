//This file will have snippets of code that shouldn't be implemented yet and should be ignored when staging changes
const handleUpdateItemsData = (req, res) => {
  const { orderContent } = req.body;
  const rejectedItems = [];
  const approvedItems = [];
  //First check
  const allClear = orderContent.every((element) => {
    items.some((item) => {
      return item.id === element.id && item.numInStock > element.quantity;
    });
  });

  if (allClear) {
    items.forEach((item) => {
      orderContent.forEach((itemToUpdate) => {
        if (item.id === itemToUpdate.id) {
          item.numInStock -= itemToUpdate.quantity;
          approvedItems.push({
            itemId: item.id,
            newAmountInStock: item.numInStock,
            amountOrdered: itemToUpdate.quantity,
          });
        }
      });
    });
  } else {
    items.forEach((item) => {
      orderContent.forEach((itemToUpdate) => {
        if (item.id === itemToUpdate.id) {
          rejectedItems.push({
            itemId: item.id,
            newAmountInStock: item.numInStock,
            amountOrdered: itemToUpdate.quantity,
          });
        }
      });
    });
  }
};

//OLD HANDLEUPDATEITEMSDATA
// const handleUpdateItemsData = (req, res) => {
//     const { orderContent } = req.body;
//     const rejectedItems = [];
//     const approvedItems = [];
//     //Check client's order and update storage quantities
//     items.forEach((item) => {
//       orderContent.forEach((itemToUpdate) => {
//         if (itemToUpdate.id === item.id) {
//           //if there's enough of this item in storage then update the quantity
//           if (item.numInStock > itemToUpdate.quantity) {
//             item.numInStock -= itemToUpdate.quantity;
//             approvedItems.push({
//               itemId: item.id,
//               newAmountInStock: item.numInStock,
//               amountOrdered: itemToUpdate.quantity,
//             });
//           } else {
//             rejectedItems.push({
//               itemId: item.id,
//               numInStock: item.numInStock,
//               amountOrdered: itemToUpdate.quantity,
//             });
//           }
//         }
//       });
//     });
