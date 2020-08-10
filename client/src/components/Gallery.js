import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import Pagination from "./Pagination";
import GalleryItems from "./GalleryItems";

// displays gallery GalleryItems, postsperpage = amount of items per page
const Gallery = () => {
  const [handleGallery, setHandleGallery] = React.useState([]); // array of items currently displayed in gallery
  const [postsPerPage, setPostsPerPage] = React.useState(30); //postPerpage could be change by user. We will see

  const query = new URLSearchParams(useLocation().search);
  const currentPage = query.get("pg") ? query.get("pg") : 1;

  React.useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setHandleGallery(data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  // pageData handles displaying only 30items at a time on the page
  function pageData(item, index) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    if (index >= indexOfFirstPost && index < indexOfLastPost) {
      return item;
    }
  }

  return (
    <>
      <GalleryGrid>
        {handleGallery.length > 0 ? (
          handleGallery
            .filter(pageData)
            .map((item) => <GalleryItems key={item.id} item={item} />)
        ) : (
          <p>loading</p>
        )}
      </GalleryGrid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={handleGallery.length}
      />
    </>
  );
};

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const GalleryGrid = styled.div`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 20%));
  grid-gap: 16px;

  /* border: pink dashed 3px; 
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em; */
`;

export default Gallery;
