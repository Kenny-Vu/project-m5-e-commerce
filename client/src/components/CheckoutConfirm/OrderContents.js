import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import { getCart, getTotalPriceCart } from "../../reducers/cart-reducer";
import { SectionTitle } from "./FormStyledComponents";

const OrderContents = () => {
  const cart = useSelector(getCart);
  const totalprice = useSelector(getTotalPriceCart);
  return (
    <OrderWrapper>
      <SectionTitle>Order Contents</SectionTitle>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <OrderTotal>Total: {totalprice} $</OrderTotal>
    </OrderWrapper>
  );
};

const OrderWrapper = styled.div`
  
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto 40px;
  }
`;

const OrderTotal = styled.div`
  font-weight: bold;
`;

export default OrderContents;
