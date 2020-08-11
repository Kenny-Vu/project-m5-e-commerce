import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { searchItem } from "../actions";
import { useHistory } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const handleInputSubmit = () => {
    //fires when user presses "enter"
    return itemList.filter((item) => {
      return item.name.toLowerCase().includes(userInput.toLowerCase());
      //either it rerenders the page or sends user to a results page
    });
  };
  //userInput should be at more than 2 letters?
  //can perhaps search by type
  //would need a search result page?
  //onChange?

  return (
    <SearchWrapper>
      <SearchBar
        placeholder="Search"
        value={userInput}
        onChange={(event) => {
          handleUserInput(event);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            dispatch(searchItem(userInput, handleInputSubmit()));
            history.push("/search"); //This will add a new endpoint to our history
            history.goForward(); // and then we'll travel in time forward to that endpoint. Pretty cool eh?
          }
        }}
      ></SearchBar>
      <SearchIcon
        onClick={(event) => {
          dispatch(searchItem(userInput, handleInputSubmit()));
          history.push("/search");
          history.goForward();
        }}
      >
        <GoSearch style={{ height: "25px", width: "25px" }} />
      </SearchIcon>
    </SearchWrapper>
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

const SearchIcon = styled.button`
  background-color: white;
  padding: 8px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: #d1c1f6;
    border-radius: 50%;
  }
`;

const SearchWrapper = styled.div`
  width: 50%;
  height: 50px;
  border: 1px grey solid;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
