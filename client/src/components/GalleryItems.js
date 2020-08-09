import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

const GalleryItems = ({ item, galleryLoad }) => {
  return (
    <ItemDiv>
      <ItemName>{item.name}</ItemName>
      <ItemImage src={item.imageSrc}></ItemImage>
      <Price>{item.price}</Price>
      <Quantity>Quantity:{item.numInStock}</Quantity>
      <BuyButton />
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 15vh;
    width: 10vw;
  }
`;

const ItemName = styled.div``;

const ItemImage = styled.img``;

const Price = styled.div``;

const Quantity = styled.div``;

export default GalleryItems;

//import info from data//
