//This file will have snippets of code that shouldn't be implemented yet and should be ignored when staging changes

//To follow REST principles, we will have to use a PUT method to update the item quantities in items.json
const handleUpdateItemsData = (req, res) => {
  const { itemIds, itemsQuantity } = req.body;
  const itemsToUpdate = findItems(itemIds);
  itemsToUpdate.forEach((item) => {
    //loop through itemsQuantity array?
  });
  res.status(200).json(items[0]);
};
