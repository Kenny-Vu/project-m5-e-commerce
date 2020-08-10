import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate, location }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PageNav>
      <Pages>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <PageLink to={`/items?pg=${number}`} className="pagelink">
              {number}
            </PageLink>
          </li>
        ))}
      </Pages>
    </PageNav>
  );
};

const Pages = styled.ul`
  list-style-type: none;
  display: flex;
`;

const PageLink = styled(Link)`
  padding: 5px;
  margin: 5px;
`;

const PageNav = styled.div`
  display: flex;
  flex-direction: row;
  border-top: grey solid 1px;
  justify-content: center;
  padding: 15px 0px;
  margin-left: 40px;
  margin-right: 40px;
`;

export default Pagination;
