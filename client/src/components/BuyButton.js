import React from "react";
import styled from "styled-components";

const BuyButton = () => {
  return <Button>Add to Cart</Button>;
};

export default BuyButton;

const Button = styled.button`
  width: 100px;
  outline: none;
  border: none;
  background-color: #404041;
  box-shadow: 2px 2px 5px grey;
  color: white;
  border-radius: 5px;
  padding: 5px;
  text-shadow: 1px 1px 4px black;
  margin-bottom: -15px;
`;
