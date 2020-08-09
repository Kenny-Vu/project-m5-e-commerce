import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

const GalleryItems = () => {
  return (
    <ItemDiv>
      <ItemName>watch</ItemName>
      <ItemImage></ItemImage>
      <Price>999$</Price>
      <BuyButton />
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  border: grey 1px solid;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;
  display: flex;
  flex-direction: column;
  width: 15%;
  align-items: center;
`;

const ItemName = styled.p`
  text-align: center;
`;

const ItemImage = styled.img``;

const Price = styled.p`
  text-align: center;
`;

export default GalleryItems;

//import info from data//
