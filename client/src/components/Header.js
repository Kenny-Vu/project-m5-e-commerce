import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBar></NavBar>
      <CartIcon></CartIcon>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div``;

const NavBar = styled.div``;

const CartIcon = styled.img``;

export default Header;
