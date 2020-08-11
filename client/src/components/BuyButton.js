import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import Button from "./Button";

const BuyButton = ({ item, numItemInStock, setNumItemInStock }) => {
  const dispatch = useDispatch();

  return (
    <Button
      disabled={numItemInStock === 0 ? true : false}
      clickHandler={() => {
        setNumItemInStock(numItemInStock-1)
         dispatch(addItem(item));
      }}
    >
      Add to Cart
    </Button>
  );
};

export default BuyButton;
