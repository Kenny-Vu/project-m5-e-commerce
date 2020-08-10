import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <CartWrapper>
      <BuyButton>Click me!</BuyButton>
    </CartWrapper>
  );
};

const CartWrapper = styled.div``;

export default Cart;
