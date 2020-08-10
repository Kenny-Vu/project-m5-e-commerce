import React from "react";
import { useSelector } from "react-redux";
import { getNumItemsCart, getCart } from "../reducers/cart-reducer";
import styled from "styled-components";
import Logo from "./Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@material-ui/core";
import CartItem from "./CartItem";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector(getCart);
  console.log(cart);
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  const numItemsCart = useSelector(getNumItemsCart);
  console.log(numItemsCart);

  return (
    <MainHeaderDiv>
      <NameWrapper>
        <Logo />
        <LinkDiv to="/items">
          <StoreName>NaN Athletics</StoreName>
        </LinkDiv>
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
          <CartJewel>{numItemsCart}</CartJewel>
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
            <CloseButtonDiv>
              <CloseButton onClick={() => setSidebarVisible(false)}>
                X
              </CloseButton>
            </CloseButtonDiv>
            <Cart>
              {cart.map((item) => {
                console.log(item);
                return (
                  <CartItem
                    item={item}
                  />
                );
              })}
            </Cart>
          </SideBar>
        </Drawer>
      </HeaderWrapper>
    </MainHeaderDiv>
  );
};

const LinkDiv = styled(Link)`
  text-decoration: none;
`;

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
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: #d1c1f6;
    border-radius: 50%;
  }
`;

const SearchIcon = styled.div`
  background-color: white;
  padding: 8px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: #d1c1f6;
    border-radius: 50%;
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

const CloseButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #adbdec;
  margin-top: 10px;
  font-size: 20px;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  align-self: right;
  background-color: #adbdec;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300%;
  background-color: #adbdec;
  justify-content: space-between;
  padding: 0px 15px;
  border: solid #df686861 5px;
`;

export default Header;
