import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GalleryItems from "./GalleryItems";
import { GalleryGrid } from "./Gallery";
import Header from "./Header";

const SearchPage = () => {
  const { search } = useSelector((state) => state);
  search && console.log(search);
  return (
    <>
      <Header />
      {search.search && (
        <SearchTitle>You searched for: "{search.search}" </SearchTitle>
      )}
      {search.results && (
        <GalleryGrid>
          {search.results.map((result) => (
            <GalleryItems key={result.id} item={result} />
            // <div key={result.id}>{result.name}</div>
          ))}
        </GalleryGrid>
      )}
    </>
  );
};

const SearchTitle = styled.div`
  font-size: 26px;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 20px;
  border-bottom: 1px solid #8080805c;
`;

export default SearchPage;
