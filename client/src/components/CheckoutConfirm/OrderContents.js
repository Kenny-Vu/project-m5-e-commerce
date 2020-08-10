import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import { getCart } from "../../reducers/cart-reducer";

const OrderContents = () => {
  const cart = useSelector(getCart);
  return (
    <OrderWrapper>
      <OrderTitle>Order Contents</OrderTitle>
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
      <OrderTotal>total:</OrderTotal>
    </OrderWrapper>
  );
};

const OrderWrapper = styled.div``;

const OrderTitle = styled.div``;


const OrderTotal = styled.div``;

export default OrderContents;
