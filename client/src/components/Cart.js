import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

const Cart = ({ children }) => {
  return (
    <>
      <CartHeader>Your Cart</CartHeader>
      <OrderHeader>Order Summary</OrderHeader>
      <OrderBody>{children}</OrderBody>
      <Total>Price: $$$</Total>
      <button></button>
    </>
  );
};

const CartWrapper = styled.div``;

export default Cart;
