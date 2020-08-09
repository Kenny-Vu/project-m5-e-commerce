import React from "react";
import BillingPersonalInfo from "./BillingPersonalInfo";
import PaymentInfo from "./PaymentInfo";
import OrderContents from "./OrderContents";
import styled from "styled-component";

function CheckoutPage() {
  return (
    <ConfirmPageContainer>
      <BillingPersonalInfo />
      <PaymentInfo />
      <OrderContents />
    </ConfirmPageContainer>
  );
}

export default CheckoutPage;
