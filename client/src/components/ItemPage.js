import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";

import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCurrItem,
  receiveCurrItem,
  receiveCurrItemError,
} from "../actions";
import {
  getcurrentItem,
  getCurrentItemStatus,
} from "../reducers/currItem-reducer";

// displays single item page
const ItemPage = () => {
  const dispatch = useDispatch();
  const currItem = useSelector(getcurrentItem);
  const status = useSelector(getCurrentItemStatus);

  const { itemId } = useParams();

  React.useEffect(() => {
    dispatch(requestCurrItem());
    fetch(`/items/${itemId}`)
      .then((res) =>
        res.json().then((data) => {
          console.log(data);
          return dispatch(receiveCurrItem(data));
        })
      )
      .catch((err) => dispatch(receiveCurrItemError()));
  }, []);

  if (currItem) {
    return (
      <ItemProfile>
        <ItemName>{currItem.name}</ItemName>
        <ItemPicture src={currItem.imageSrc}></ItemPicture>
        <ItemPrice>{currItem.price}</ItemPrice>
        <BodyLocation>{currItem.body_location}</BodyLocation>
        <ItemCategory>{currItem.category}</ItemCategory>
        <ItemStock>{currItem.numInStock} in Stock</ItemStock>
        <BuyButton item={currItem}></BuyButton>

        <Link to="/items">
          <button>return to Gallery</button>
        </Link>
      </ItemProfile>
    );
  }
  return <div>{status}</div>;
};

const ItemProfile = styled.div``;

const ItemName = styled.div``;

const ItemPicture = styled.img``;

const ItemPrice = styled.div``;

const BodyLocation = styled.div``;

const ItemCategory = styled.div``;

const ItemStock = styled.div``;

export default ItemPage;
