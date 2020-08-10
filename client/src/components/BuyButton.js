import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import styled from "styled-components";

const BuyButton = ({item}) => {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(addItem(item))}>Add to Cart</Button>;
};



const Button = styled.button`
  width: 90%;
  outline: none;
  border: none;
  background-color: pink;
  box-shadow: 2px 2px 5px grey;
  color: white;
  border-radius: 15px;
  padding: 5px;
  text-shadow: 1px 1px 4px black;
  margin-bottom: -15px;
`;
export default BuyButton;