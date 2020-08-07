const items = require("./data/items.json");
const companies = require("./data/companies.json");

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

//RECEIVES CLIENT INFOS FROM THE CHECKOUT FORM
const handleOrder = (req, res) => {
  const order = req.body; //need to deconstruct once team decides what info
  //store customer info in data
  //perhaps do a check to validate info? (e.g. address in a valid country)
  //CREATE NEW ORDER AND UPDATE ITEM QUANTITY IN ITEMS.JSON?
};

module.exports = {
  handleGallery,
  handleGetItem,
  handleGetAllCompanies,
  handleGetCompany,
};
