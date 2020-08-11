import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartObj } from "../../reducers/cart-reducer";
import { postOrder, completeOrder, orderCompletionError } from "../../actions";
import BillingPersonalInfo from "./BillingPersonalInfo";
import PaymentInfo from "./PaymentInfo";
import OrderContents from "./OrderContents";
import styled from "styled-components";
import Header from "../Header";
import Button from "../Button";

function CheckoutPage() {
  const dispatch = useDispatch();
  const cart = useSelector(getCartObj);

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
  const [cardType, setCardType] = React.useState("");

  const sendOrder = () => {
    // create order object
    // add zipcode
    const billingInfo = {
      firstName,
      lastName,
      email,
      "telephone number": phone,
      address,
      country,
    };
    const paymentInfo = {
      CreditCardNumber: creditCardNumber,
      expDate: `${month}/${year}`,
      CVC: cvc,
    };
    const orderContent = {
      cart,
    };
    const order = {
      billingInfo,
      paymentInfo,
      orderContent,
    };
    dispatch(postOrder(order));

    fetch("/orders", {
      method: "POST",
      body: JSON.stringify({ billingInfo, paymentInfo, orderContent }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return dispatch(completeOrder());
      })
      .then((err) => dispatch(orderCompletionError(order)));
  };

  // for testing purpose only, in order to confirm order
  React.useEffect(() => {
      fetch("/orders")
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
    []);

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
        <PlaceOrderBtn onClick={sendOrder}>Place your order</PlaceOrderBtn>
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
