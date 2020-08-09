import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBar>
        <SearchInput></SearchInput>
        <SearchIcon>
          <GoSearch style={{ height: "30px", width: "30px" }} />
        </SearchIcon>
      </NavBar>

      <CartDiv>
        <CartIcon>
          <AiOutlineShoppingCart style={{ height: "30px", width: "30px" }} />
        </CartIcon>
        <CartJewel>2</CartJewel>
      </CartDiv>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  border: 1px grey solid;
  width: 100%;
  margin: 5px;
  justify-content: space-evenly;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavBar = styled.div`
  width: 50%;
  height: 50px;
  border: 1px grey solid;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input``;

const CartDiv = styled.div`
  width: 20%;
  border: solid orange 2px;
`;

const CartIcon = styled.div`
  border: limegreen 2px solid;
  width: 100%;
  background-color: white;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: #d1c1f6;
  }
`;

const SearchIcon = styled.div`
  border: limegreen 2px solid;
  background-color: white;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: #d1c1f6;
  }
`;

const CartJewel = styled.div`
  background-color: red;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  border: purple 2px solid;
  color: white;
  height: 18px;
  width: 18px;
  z-index: 9;
`;

export default Header;

/* cart icon, link to cart.
/* cart jewel, visibility hidden when 0, gets data from cart and displays cart item #. also link to cart.*/
