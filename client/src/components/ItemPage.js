import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";
import {
  getStoreItemArray,
  getStoreItemArrayStatus,
} from "../reducers/items-reducer";
import Header from "./Header";

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
  // console.log(items);

  if (items) {
    console.log("is this null? : ", items === null, items.body_location);
    return (
      <>
        <Header />

        <MegaWrapper>
          <Wrapper>
            <ItemName>{items.name}</ItemName>
          </Wrapper>
          <ItemProfile>
            <ImageDiv>
              <ItemPicture src={items.imageSrc}></ItemPicture>
            </ImageDiv>

            <DescriptionDiv>
              <DescriptionHeader>Item Description</DescriptionHeader>
              <ItemCategory>Category: {items.category}</ItemCategory>
              <BodyLocation>
                This item is designed to be worn on your{" "}
                {items.body_location.toLowerCase()}.
              </BodyLocation>
              <ItemStock>{items.numInStock} in stock</ItemStock>
              <ItemPrice>{items.price}</ItemPrice>
              <ButtonDiv>
                <BuyButton></BuyButton>
              </ButtonDiv>
            </DescriptionDiv>
          </ItemProfile>
          <BackButton href="/items"> return to Gallery </BackButton>
        </MegaWrapper>
      </>
    );
  }
  return <div>loading</div>;
};

const MegaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const BackButton = styled(Link)`
  color: grey;
  width: 120px;
  justify-content: center;
`;

const ItemProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: #8080809c 1px solid;
  padding: 15px;
  border-radius: 20px;
`;

const ImageDiv = styled.div`
  height: 350px;
  width: 350px;
  margin: 15px;
`;

const ItemPicture = styled.img`
  min-height: 350px;
  min-width: 350px;
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.5;
  margin: 15px;
  padding: 15px;
  border: #8080809c 1px solid;
  border-radius: 5px;
  box-shadow: 1px 1px 5px grey;
`;

const ItemName = styled.div`
  font-size: 32px;
  margin-top: 20px;
  font-weight: bold;
  color: #080808ba;
`;

const DescriptionHeader = styled.div`
  font-size: 28px;
  align-self: center;
  color: #201f1f99;
  margin-top: -10px;
  border-bottom: 1px grey solid;
`;

const ItemCategory = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const BodyLocation = styled.div`
  font-size: 20px;
  margin-bottom: 40px;
`;

const ItemStock = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  border-top: 1px grey solid;
  font-size: 16px;
  color: grey;
`;

const ItemPrice = styled.div`
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  margin-top: -30px;
  color: #000000ad;
`;

const ButtonDiv = styled.div`
  align-self: center;
`;

export default ItemPage;
