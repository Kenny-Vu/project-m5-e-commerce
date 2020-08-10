import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PageNav>
      <Pages>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <PageNum
              onClick={() => paginate(number)}
              href=""
              className="pagelink"
            >
              {number}
            </PageNum>
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

const PageNum = styled.a`
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
