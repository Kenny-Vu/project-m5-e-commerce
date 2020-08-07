import React from "react";
import BillingPersonalInfo from "./BillingPersonalInfo";
import PaymentInfo from "./PaymentInfo";
import OrderContents from "./OrderContents";

function CheckoutPage() {
  return (
    <ConfirmPageContainer>
      <BillingPersonalInfo></BillingPersonalInfo>

      <PaymentInfo></PaymentInfo>

      <OrderContents></OrderContents>
    </ConfirmPageContainer>
  );
}

export default CheckoutPage;
