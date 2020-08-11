import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const SearchInput = () => {
  //first we need a state to keep track of the userInput onChange
  //Reminder: input elements are controlled components have their own state managed by React
  const [userInput, setUserInput] = React.useState("");
  //We'll probably have access to the item list by using useSelector
  const itemList = useSelector((state) => {
    return (
      state.items.items && Object.values(state.items.items).map((item) => item)
    );
    //creates array from values of state
    //creates new array of items
  });
  //Logic for searchBar during an onChange event
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    //fires when user presses "enter"
    if (event.key === "Enter") {
      const searchResults = itemList.filter((item) => {
        return item.name.includes(userInput);
      });
      //either it rerenders the page or sends user to a results page
      //use
      console.log(searchResults);
    }
  };
  //userInput should be at more than 2 letters?
  //can perhaps search by type
  //would need a search result page?
  //onChange?

  return (
    <SearchBar
      placeholder="Search"
      value={userInput}
      onChange={(event) => {
        handleUserInput(event);
      }}
      onKeyPress={(event) => handleInputSubmit(event)}
    ></SearchBar>
  );
};

const SearchBar = styled.input`
  border: none;
  width: 90%;
  height: 60%;
  &:focus {
    outline: none;
  }
`;
