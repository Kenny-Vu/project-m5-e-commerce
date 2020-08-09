import React from "react";
import styled from "styled-components";

const BuyButton = () => {
  return <Button>Add to Cart</Button>;
};

export default BuyButton;

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
