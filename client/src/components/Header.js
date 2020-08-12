import React from "react";
import { useSelector } from "react-redux";
import { getNumItemsCart, getCart } from "../reducers/cart-reducer";
import styled from "styled-components";
import Logo from "./Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@material-ui/core";
import CartItem from "./CartItem";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";

const Header = () => {
  const cart = useSelector(getCart);
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  const numItemsCart = useSelector(getNumItemsCart);

  return (
    <MainHeaderDiv>
      <NameWrapper>
        <Logo />
        <LinkDiv to="/items">
          <StoreName>NaN Athletics</StoreName>
        </LinkDiv>
      </NameWrapper>
      <HeaderWrapper>
        <SearchInput placeholder="Search"></SearchInput>
        <IconsDiv>
          <CartIcon
            disabled={numItemsCart === 0 ? true : false}
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            <AiOutlineShoppingCart
              style={{
                height: "30px",
                width: "30px",
                color: "grey",
                margin: "10px",
              }}
            />
          </CartIcon>
          <CartJewel className={numItemsCart === 0 && "disabled"}>
            {numItemsCart}
          </CartJewel>
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
                return <CartItem item={item} />;
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
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
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

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CartIcon = styled.button`
  background-color: white;
  z-index: 1;
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: #d1c1f6;
  }
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: white;
    }
    &:active {
      transform: none;
    }
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
  &.disabled {
    background-color: grey;
  }
  /*display: none;*/ /*write confitional for when items in cart === true, then display*/
`;

const CloseButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 20px;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  align-self: right;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
  width: 500px;
  justify-content: space-between;
  padding: 0px 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Header;
