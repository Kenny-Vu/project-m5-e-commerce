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

const Item = styled.div``;

export default GalleryItems;

//import info from data//
