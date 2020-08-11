import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import { useHistory } from "react-router-dom";

const GalleryItems = ({ item }) => {
  const history = useHistory();

  // function for onclick of item to redirect to the specific items page
  function navigateSingleItem(e) {
    e.stopPropagation();
    history.push(`/items/${item.id}`);
  }

  return (
    <ItemDiv>
      <PictureDiv tabIndex="0" onClick={navigateSingleItem}>
        <ItemImage src={item.imageSrc}></ItemImage>
      </PictureDiv>
      <ItemName tabIndex="0" onClick={navigateSingleItem}>
        {item.name}
      </ItemName>
      <BottomDiv>
        <Price>{item.price}</Price>
        {item.numInStock >= 1 ? (
          <Quantity> {item.numInStock} in stock</Quantity>
        ) : (
          <Quantity>Out of stock</Quantity>
        )}

        <BuyButton item={item} />
      </BottomDiv>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0px 10px;
  border-radius: 12px;
  box-shadow: 1px 1px 5px #3f51b59c;
`;

const ItemName = styled.div`
  height: 33%;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PictureDiv = styled.div`
  margin-bottom: 10px;
  width: 150px;
  height: 150px;
`;

const ItemImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Price = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #646963;
`;

const Quantity = styled.div`
  font-size: 12px;
  padding: 5px;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  border-top: 1px grey solid;
  margin: 5px 0px;
  padding-top: 5px;
`;

export default GalleryItems;

//import info from data//
