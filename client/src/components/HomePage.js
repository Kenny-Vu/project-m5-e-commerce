import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Gallery from "./Gallery";

const HomePage = () => {
  return (
    <GalleryPage>
      <Header></Header>
      <Gallery></Gallery>
    </GalleryPage>
  );
};

const GalleryPage = styled.div`
  width: 100%;
  border: fuchsia 3px solid;
`;

export default HomePage;
