import React from "react";
import styled from "styled-components";
import nikelogo from "../assets/nikelogo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoDiv to="/items">
      <LogoImage src={nikelogo} />
    </LogoDiv>
  );
};

const LogoDiv = styled(Link)``;

const LogoImage = styled.img`
  max-height: 100px;
  max-width: 200px;
`;

export default Logo;
