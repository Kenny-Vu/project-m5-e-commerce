import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";
import {
  getStoreItemArray,
  getStoreItemArrayStatus,
} from "../reducers/items-reducer";

// displays single item page
const ItemPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(getStoreItemArray);
  const status = useSelector(getStoreItemArrayStatus);

  const { itemId } = useParams();

  React.useEffect(() => {
    dispatch(requestItems());
    fetch(`/items/${itemId}`)
      .then((res) =>
        res.json().then((data) => {
          dispatch(receiveItems(data));
        })
      )
      .catch((err) => dispatch(receiveItemsError()));
  }, []);

  console.log(items);
  console.log(items);

  if (items) {
    return (
      <ItemProfile>
        <ItemName>{items.name}</ItemName>
        <ItemPicture src={items.imageSrc}></ItemPicture>
        <ItemPrice>{items.price}</ItemPrice>
        <BodyLocation>{items.body_location}</BodyLocation>
        <ItemCategory>{items.category}</ItemCategory>
        <ItemStock>{items.numInStock} in Stock</ItemStock>
        <BuyButton></BuyButton>
        <button>
          <a href="/items">return to Gallery</a>
        </button>
      </ItemProfile>
    );
  }
  return <div>loading</div>;
};

const ItemProfile = styled.div``;

const ItemName = styled.div``;

const ItemPicture = styled.img``;

const ItemPrice = styled.div``;

const BodyLocation = styled.div``;

const ItemCategory = styled.div``;

const ItemStock = styled.div``;

export default ItemPage;
