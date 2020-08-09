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
  border: pink dashed 3px;
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em;
`;

export default Gallery;
