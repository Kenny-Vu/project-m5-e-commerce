import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../reducers/cart-reducer";
import { createOrder } from "../actions";
import AddItemToCart from "./AddItemToCart";

const ORDER = {
  "123": {
    billingInfo: {
      "first name": "Justin",
      "last name": "Thyme",
      email: "justin@gmail.com",
      "telephone number": "123-455-6789",
      address: "124 rue titi",
      country: "canada",
    },
    paymentInfo: {
      creditCardNumber: "3456789098765",
      expDate: "10/12",
      CVC: "123",
    },
  },
};
const SendOrder = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  ORDER['123']["orderContent"] = cart
  console.log(ORDER)
  return (
    <>
      <AddItemToCart />
      <button onClick={() => dispatch(createOrder(ORDER))}>
        Add Cart to order
      </button>
    </>
  );
};

export default SendOrder;
