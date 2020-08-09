import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import GalleryItems from "./GalleryItems";

// displays gallery GalleryItems, postsperpage = amount of items per page
const Gallery = () => {
  const [handleGallery, setHandleGallery] = React.useState([]);
  const [galleryLoad, setGalleryLoad] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  console.log("-----CurrentPage--------", currentPage);
  const [postsPerPage, setPostsPerPage] = React.useState(30);
  console.log(handleGallery);

  const test = handleGallery;
  console.log(test);
  console.log(test.length);

  React.useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setHandleGallery(data);
        setGalleryLoad(false);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  let currentPosts = [];

  // pageData handles displaying only 30items at a time on the page
  function pageData() {
    if (handleGallery) {
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      return (currentPosts = handleGallery.slice(
        indexOfFirstPost,
        indexOfLastPost
      ));
    }
  }

  pageData();

  function paginate(pageNumber) {
    console.log("-----paginate------", pageNumber);
    return setCurrentPage(pageNumber);
  }

  return (
    <>
      {galleryLoad === false ? (
        <GalleryGrid>
          {currentPosts.map((item) => (
            <GalleryItems key={item.id} item={item} galleryLoad={galleryLoad} />
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={test.length}
            paginate={paginate}
          />
        </GalleryGrid>
      ) : (
        <>
          <div>Loading</div>
        </>
      )}
    </>
  );
};

const GalleryGrid = styled.div`
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em;
`;

export default Gallery;
