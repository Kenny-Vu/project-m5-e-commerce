import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Header from "./Header";

const SearchPage = () => {
  const { search } = useSelector((state) => state);
  search && console.log(search);
  return (
    <>
      <Header />
      {search.search && <div>You searched for {search.search}</div>}
      {search.results &&
        search.results.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
    </>
  );
};

export default SearchPage;
