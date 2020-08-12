import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartObj, getNumItemsCart } from "../../reducers/cart-reducer";
import { getOrderStatus } from "../../reducers/order-reducer";
import {
  postOrder,
  completeOrder,
  orderCompletionError,
  emptyCart,
} from "../../actions";
import BillingPersonalInfo from "./BillingPersonalInfo";
import PaymentInfo from "./PaymentInfo";
import OrderContents from "./OrderContents";
import styled from "styled-components";
import Header from "../Header";
import Button from "../Button";
import BackLink from "../BackLink";

function CheckoutPage() {
  // BE message with order status
  const [message, setMessage] = React.useState("");

  const dispatch = useDispatch();
  const cart = useSelector(getCartObj);
  const numberItems = useSelector(getNumItemsCart);
  const status = useSelector(getOrderStatus);

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

  const sendOrder = (e) => {
    e.preventDefault();
    // create order object
    const billingInfo = {
      firstName,
      lastName,
      email,
      "telephone number": phone,
      address,
      country,
      zipCode,
    };
    const paymentInfo = {
      CreditCardNumber: creditCardNumber,
      expDate: `${month}/${year}`,
      CVC: cvc,
    };
    const orderContent = {
      ...cart,
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
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        if (data.status === 201) {
          dispatch(completeOrder());
          dispatch(emptyCart());
        } else {
          dispatch(orderCompletionError(order));
        }
      })
      .catch((err) => {
        dispatch(orderCompletionError(order));
      });
  };

  // for testing purpose only, in order to confirm order
  React.useEffect(() => {
    fetch("/orders")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Header />

      <Wrapper>
        <div>
          <OrderContents />
          <Message status={status}>{message}</Message>
        </div>

        <FormWrapper>
          <Form onSubmit={(e) => sendOrder(e)}>
            <FormSection>
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
            </FormSection>
            <FormSection>
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
              <PlaceOrderBtn disabled={numberItems === 0 ? true : false}>
                Place your order
              </PlaceOrderBtn>
              <BackLink>Return to Gallery</BackLink>
            </FormSection>
          </Form>
        </FormWrapper>
      </Wrapper>
    </div>
  );
}

const Message = styled.div`
  color: ${(props) => {
    return props.status === "error" ? "red" : "black";
  }};
  margin: 20px 0;
`;
const Form = styled.form`
  max-width: 700px;
  margin: 20px auto;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    display: block;
  }
`;

const FormSection = styled.section`
  width: 50%;
  margin: 0 30px;
`;

const PlaceOrderBtn = styled(Button)`
  margin-top: 50px;
  align-self: center;
  font-size: 18px;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 30px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: solid #8080800f 1px;
  box-shadow: 1px 1px 3px grey;
  padding: 10px;
  border-radius: 5px;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export default CheckoutPage;
