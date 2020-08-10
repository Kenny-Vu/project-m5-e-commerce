import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

const GalleryItems = ({ item }) => {
  return (
    <ItemDiv>
      <PictureDiv>
        <ItemImage src={item.imageSrc}></ItemImage>
      </PictureDiv>
      <ItemName>{item.name}</ItemName>
      <BottomDiv>
        <Price>{item.price}</Price>
        <Quantity>Quantity:{item.numInStock}</Quantity>
        <BuyButton />
      </BottomDiv>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  border: red 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0px 10px;
`;

const ItemName = styled.div`
  border: orange 2px solid;
  height: 33%;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
`;

const PictureDiv = styled.div`
  border: yellow solid 2px;
  margin-bottom: 10px;
  width: 150px;
  height: 150px;
`;

const ItemImage = styled.img`
  /* height: 15vh;
  width: 10vw; */
  max-width: 150px;
  max-height: 150px;
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

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  border: 2px blue dotted;
  margin: 5px 0px;
`;

export default GalleryItems;

//import info from data//
