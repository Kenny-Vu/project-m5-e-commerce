const items = require("./data/Items.json");

//SENDS ALL ITEMS IN STORE
const handleGallery = (req, res) => {
  res.status(200).json(items);
};

//SEND INFO ABOUT A SPECIFIC ITEM USING THE ITEM'S ID
const handleGetItem = (req, res) => {
  const itemId = req.params.itemId;
  const item = items.find((itemObj) => {
    //converting the itemId string from the url params to a number
    return itemObj.id === Number(itemId);
  });
  res.status(200).json(item);
};

module.exports = { handleGallery, handleGetItem };
