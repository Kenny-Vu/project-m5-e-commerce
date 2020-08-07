const items = require("./data/Items.json");

const handleGallery = (req, res) => {
  res.status(200).json(items);
};

const handleGetItem = (req, res) => {
  const itemId = req.params.itemId;
  const item = items.find((itemObj) => {
    return itemObj.id === Number(itemId);
  });
  console.log(item);
  res.status(200).json("it worked...?");
};

module.exports = { handleGallery, handleGetItem };
