//Logic for search bar

const itemList = useSelector((state) => {
  return Object.values(state).map((item) => item.name);
  //creates array from values of state
  //creates new array by only returning item names
});

const searchItem = (userInput) => {
  //takes input submitted and search for item name that includes it
  const results = itemList.filter((item) => {
    return item.includes(userInput);
  });

  return results;

  //userInput should be at more than 2 letters?
  //can perhaps search by type
  //would need a search result page?
};
