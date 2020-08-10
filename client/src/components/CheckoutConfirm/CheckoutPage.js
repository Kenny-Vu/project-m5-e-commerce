import React from "react";
import BillingPersonalInfo from "./BillingPersonalInfo";
import PaymentInfo from "./PaymentInfo";
import OrderContents from "./OrderContents";
import styled from "styled-components";
import Header from "../Header";
import Button from "../Button";

function CheckoutPage() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [creditCardNumber, setCreditCardNumber] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [cvc, setCVC] = React.useState("");
  const [cardType, setCardType] = React.useState("")

  return (
    <div>
      <Header />
      <Form>
        <OrderContents />
        <BillingPersonalInfo
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          zipCode={zipCode}
          setZipCode={setZipCode}
          country={country}
          setCountry={setCountry}
        />
        <PaymentInfo
          creditCardNumber={creditCardNumber}
          setCreditCardNumber={setCreditCardNumber}
          cvc={cvc}
          setCVC={setCVC}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cardType={cardType}
          setCardType={setCardType}
        />
        <PlaceOrderBtn>Place your order</PlaceOrderBtn>
      </Form>
    </div>
  );
}

const Form = styled.form`
  max-width: 700px;
  margin: 20px auto;
  display: flex;
  flex-flow: column wrap;
`;

const PlaceOrderBtn = styled(Button)`
  align-self: flex-end;
`;

export default CheckoutPage;
