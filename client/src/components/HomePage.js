import React from "react";
import styled from "styled-components";
import Header from "./Header";

const HomePage = () => {
  return (
    <GalleryPage>
      <Header></Header>
      <Gallery></Gallery>
    </GalleryPage>
  );
};

const GalleryPage = styled.div``;

export default HomePage;
