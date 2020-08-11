import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackLink = ({children}) => {
  return <Wrapper to="/items">{children} </Wrapper>;
};

const Wrapper = styled(Link)`
  color: grey;
  justify-content: center;
  margin: 20px 0;
`;

export default BackLink;
