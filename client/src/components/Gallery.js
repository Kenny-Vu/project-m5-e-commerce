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
import DropDown from "./DropDown";

import Spinner from "./Spinner";
// displays gallery GalleryItems, postsperpage = amount of items per page
const Gallery = () => {
  const dispatch = useDispatch();
  const items = useSelector(getStoreItemArray);
  const status = useSelector(getStoreItemArrayStatus);

  // const [postsPerPage, setPostsPerPage] = React.useState(30); //postPerpage could be changed by user. We will see
  const postsPerPage = 30;
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
  }, [dispatch]);

  // pageData handles displaying only 30items at a time on the page
  function pageData(item, index) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    if (index >= indexOfFirstPost && index < indexOfLastPost) {
      return item;
    }
  }

  const SortCategory = () => {
    return console.log("hahahahahah");
  };

  return (
    <ParentDiv>
      {items ? (
        <>
          <DropDown title="Category" items={items} />
          <GalleryGrid>
            {items.filter(pageData).map((item) => (
              <GalleryItems key={item.id} item={item} />
            ))}
          </GalleryGrid>
          <Pagination postsPerPage={postsPerPage} totalPosts={items.length} />
        </>
      ) : (
        <p>{status}</p>
      )}
    </ParentDiv>
  );
};

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GalleryGrid = styled.div`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 20%));
  grid-gap: 16px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  /* border: pink dashed 3px; 
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em; */
`;

export default Gallery;
