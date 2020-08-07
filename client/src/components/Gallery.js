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

const GalleryGrid = styled.div``;

export default Gallery;
