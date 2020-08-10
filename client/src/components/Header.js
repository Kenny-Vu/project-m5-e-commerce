import React from "react";
import { useSelector } from "react-redux";
import { getCart } from "../reducers/cart-reducer";
import styled from "styled-components";
import Logo from "./Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@material-ui/core";
import CartItem from "./CartItem";
import Cart from "./Cart";

const Header = () => {
  const cart = useSelector(getCart);
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  console.log(cart);
  return (
    <MainHeaderDiv>
      <NameWrapper>
        <Logo />
        <StoreName>NaN Athletics</StoreName>
      </NameWrapper>
      <HeaderWrapper>
        <NavBar>
          <SearchInput placeholder="Search"></SearchInput>
          <SearchIcon>
            <GoSearch style={{ height: "25px", width: "25px" }} />
          </SearchIcon>
        </NavBar>

        <IconsDiv>
          <CartIcon onClick={() => setSidebarVisible(!sidebarVisible)}>
            <AiOutlineShoppingCart
              style={{
                height: "30px",
                width: "30px",
                color: "grey",
                margin: "10px",
              }}
            />
          </CartIcon>
          <CartJewel>{cart.length}</CartJewel>
          <FaRegUser
            style={{
              height: "25px",
              width: "25px",
              color: "grey",
              margin: "10px",
            }}
          />
          <GiHamburgerMenu
            style={{
              height: "25px",
              width: "25px",
              color: "grey",
              margin: "10px",
            }}
          />
        </IconsDiv>
        <Drawer anchor="right" open={sidebarVisible}>
          <SideBar>
            <Cart>
              { .map((item) => {
                return (
                  <CartItem
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                );
              })}
            </Cart>
          </SideBar>
          <CloseButton onClick={() => setSidebarVisible(false)}>X</CloseButton>
        </Drawer>
      </HeaderWrapper>
    </MainHeaderDiv>
  );
};

const MainHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StoreName = styled.h1`
  font-family: "Faster One", cursive;
  font-size: 90px;
  text-align: center;
  color: #adbdec;
  text-shadow: 1px 1px 3px #931f09;
  margin: 5px 70px;
`;

const HeaderWrapper = styled.div`
  height: 60px;
  border-top: 1px grey solid;
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

const SearchInput = styled.input`
  border: none;
  width: 90%;
  height: 60%;
  &:focus {
    outline: none;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CartIcon = styled.div`
  background-color: white;
  z-index: 1;
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
  line-height: 1.6;
  text-align: center;
  font-size: 12px;
  color: white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: -20px;
  margin-top: -25px;
  justify-content: center;
  z-index: 9;
  /*display: none;*/ /*write confitional for when items in cart === true, then display*/
`;

const CloseButton = styled.button``;

const SideBar = styled.div`
  width: 400px;
  height: 100%;
  background-color: lightblue;
`;

export default Header;
