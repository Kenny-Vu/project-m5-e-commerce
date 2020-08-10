import React from "react";
import styled from "styled-components";

const ItemPage = () => {
  return (
    <ItemProfile>
      <ItemName>Items Page test</ItemName>
      <ItemPicture></ItemPicture>
      <ItemPrice></ItemPrice>
      <BodyLocation></BodyLocation>
      <ItemCategory></ItemCategory>
      <ItemStock></ItemStock>
      <button> Return to Gallery</button>
    </ItemProfile>
  );
};

const ItemProfile = styled.div``;

const ItemName = styled.div``;

const ItemPicture = styled.img``;

const ItemPrice = styled.div``;

const BodyLocation = styled.div``;

const ItemCategory = styled.div``;

const ItemStock = styled.div``;

export default ItemPage;
