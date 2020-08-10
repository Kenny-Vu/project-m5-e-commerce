import React from "react";
import styled from "styled-components";

const CartItem = ({ name, price, quantity }) => {
  return (
    <div>
      {name} {price} {quantity}
    </div>
  );
};

const ItemWrapper = styled.div``;

export default CartItem;
