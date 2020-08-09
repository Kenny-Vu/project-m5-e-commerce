import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

const GalleryItems = () => {
  return (
    <ItemDiv>
      <ItemName></ItemName>
      <ItemImage></ItemImage>
      <Price></Price>
      <BuyButton />
    </ItemDiv>
  );
};

const ItemDiv = styled.div``;

const ItemName = styled.p``;

const ItemImage = styled.img``;

const Price = styled.p``;

export default GalleryItems;

//import info from data//
