import React from "react";
import styled from "styled-components";
import GalleryItems from "./GalleryItems";

const Gallery = () => {
  return (
    <GalleryGrid>
      {/* write loop for generating GalleryItems */}
      <GalleryItems />
    </GalleryGrid>
  );
};

const GalleryGrid = styled.div`
  border: pink dashed 3px;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export default Gallery;
