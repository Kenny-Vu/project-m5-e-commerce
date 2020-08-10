import React from "react";
import styled from "styled-components";
import nikelogo from "../assets/nikelogo.png";

const Logo = () => {
  return <LogoImage src={nikelogo} />;
};

const LogoImage = styled.img`
  max-height: 100px;
  max-width: 200px;

  margin-right: 50px;
  margin-left: -300px;
`;

export default Logo;
