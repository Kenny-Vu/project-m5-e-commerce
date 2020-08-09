import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

const GalleryItems = ({ item }) => {
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

const Price = styled.div`
  border: grey 1px solid;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;
  display: flex;
  flex-direction: column;
  width: 15%;
  align-items: center;
  text-align: center;
`;

const ItemName = styled.p`
  text-align: center;
`;

const ItemImage = styled.img`
  height: 15vh;
  width: 10vw;
`;

const Quantity = styled.div``;

export default GalleryItems;

//import info from data//
