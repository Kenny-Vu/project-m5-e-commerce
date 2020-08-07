import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const OrderSummary = () => {
  return (
    <ItemSummary>
      <CartItem></CartItem>
    </ItemSummary>
  );
};

//this component will hold all the cart items,
//gotta get this info from state  //

const ItemSummary = styled.div``;

export default OrderSummary;
