import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import Button from "./Button";

const BuyButton = ({ item, numItemInStock }) => {
  const dispatch = useDispatch();

  return (
    <Button
      disabled={numItemInStock === 0 ? true : false}
      clickHandler={() => {
         dispatch(addItem(item));
      }}
    >
      Add to Cart
    </Button>
  );
};

export default BuyButton;
