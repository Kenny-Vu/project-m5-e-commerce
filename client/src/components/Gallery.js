import React, { useEffect } from "react";
import styled from "styled-components";
import GalleryItems from "./GalleryItems";

const Gallery = () => {
  const [handleGallery, setHandleGallery] = React.useState(null);

  console.log(handleGallery);
  React.useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setHandleGallery(data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <GalleryGrid>
      {handleGallery
        ? handleGallery.map((item) => (
            <GalleryItems key={item.id} item={item} />
          ))
        : null}
    </GalleryGrid>
  );
};

const GalleryGrid = styled.div`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 25%));
  grid-gap: 16px;
  border: 2px fuchsia solid;

  /* border: pink dashed 3px; 
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em; */
`;

export default Gallery;
