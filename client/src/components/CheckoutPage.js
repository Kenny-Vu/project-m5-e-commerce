import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import OrderSummary from "./OrderSummary";

const CheckoutPage = () => {
  return (
    <CheckoutWrapper>
      <OrderSummary />
      <ShippingInfo></ShippingInfo>
      <PaymentInfo></PaymentInfo>
      <BackButton></BackButton>
      <BuyButton>Click me !</BuyButton>
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.div``;

const ShippingInfo = styled.div``;
//this will contain or become a form//

const PaymentInfo = styled.div``;
//this will contain or become a form//

const BackButton = styled.button``;

export default CheckoutPage;
