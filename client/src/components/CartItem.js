import React from "react";
import styled from "styled-components";

const CartItem = ({ item }) => {
  const { name } = item;
  return <ItemWrapper>{name}</ItemWrapper>;
};

const ItemWrapper = styled.div``;

export default CartItem;
