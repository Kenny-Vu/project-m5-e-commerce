import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <CartWrapper>
      {/* <CartItem /> write logic for how many are rendered */}
      <BuyButton>Click me!</BuyButton>
    </CartWrapper>
  );
};

const CartWrapper = styled.div``;

export default Cart;
