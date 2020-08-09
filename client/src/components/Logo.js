import React from "react";
import styled from "styled-components";
import nikelogo from "../assets/nikelogo.png";

const Logo = () => {
  return <LogoImage src={nikelogo} />;
};

const LogoImage = styled.img`
  width: 10%;
  height: 10%;
  border: blue 2px solid;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Logo;
