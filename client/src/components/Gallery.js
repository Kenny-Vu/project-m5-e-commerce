import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";
import {
  getStoreItemArray,
  getStoreItemArrayStatus,
} from "../reducers/items-reducer";

import styled from "styled-components";
import Pagination from "./Pagination";
import GalleryItems from "./GalleryItems";

// displays gallery GalleryItems, postsperpage = amount of items per page
const Gallery = () => {
  const dispatch = useDispatch();
  const items = useSelector(getStoreItemArray);
  const status = useSelector(getStoreItemArrayStatus);

  const [postsPerPage, setPostsPerPage] = React.useState(30); //postPerpage could be changed by user. We will see

  const query = new URLSearchParams(useLocation().search);
  const currentPage = query.get("pg") ? query.get("pg") : 1;

  React.useEffect(() => {
    dispatch(requestItems());
    fetch("/items")
      .then((res) =>
        res.json().then((data) => {
          dispatch(receiveItems(data));
        })
      )
      .catch((err) => dispatch(receiveItemsError()));
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
      {items ? (
        <div>
          <GalleryGrid>
            {items.filter(pageData).map((item) => (
              <GalleryItems key={item.id} item={item} />
            ))}
          </GalleryGrid>
          <Pagination postsPerPage={postsPerPage} totalPosts={items.length} />
        </div>
      ) : (
        <p>{status}</p>
      )}
    </>
  );
};

const GalleryGrid = styled.div`
  border: pink dashed 3px;
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em;
`;

export default Gallery;
