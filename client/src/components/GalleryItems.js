import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

const GalleryItems = ({ item }) => {
  return (
    <ItemDiv>
      <ItemName>{item.name}</ItemName>
      <PictureDiv>
        <ItemImage src={item.imageSrc}></ItemImage>
      </PictureDiv>
      <Price>{item.price}</Price>
      <Quantity>Quantity:{item.numInStock}</Quantity>
      <ButtonDiv>
        <BuyButton />
      </ButtonDiv>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  border: red 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemName = styled.div`
  border: orange 2px solid;
  height: 33%;
`;

const PictureDiv = styled.div`
  border: yellow solid 2px;
  width: 150px;
  height: 150px;
`;

const ItemImage = styled.img`
  /* height: 15vh;
  width: 10vw; */
  width: 100%;
`;

const Price = styled.div`
  border: limegreen solid 2px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

const Quantity = styled.div`
  border: solid blue 2px;
  font-size: 12px;
  padding: 5px;
`;

const ButtonDiv = styled.div`
  border: fuchsia 2px solid;
`;

export default GalleryItems;

//import info from data//
