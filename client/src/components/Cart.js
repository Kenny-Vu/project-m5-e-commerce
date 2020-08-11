import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import BuyButton from "./BuyButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";

import { getCart, getTotalPriceCart } from "../reducers/cart-reducer";

const Cart = ({ children }) => {
  const totalprice = useSelector(getTotalPriceCart);

  return (
    <>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <OrderTitle>Order Summary</OrderTitle>
      </CartHeader>

      <OrderBody>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Quantity>Quantity</Quantity>
              </TableCell>
              <TableCell>
                <Item>Item</Item>
              </TableCell>
              <TableCell>
                <Price>Price</Price>
              </TableCell>
              <TableCell>
                <Edit>Edit</Edit>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </OrderBody>
      <BottomDiv>
        <Total>Total: {totalprice} $</Total>
        <ButtonDiv>
          <Link to="/checkout">
            <PurchaseButton>Proceed to checkout </PurchaseButton>
          </Link>
        </ButtonDiv>
      </BottomDiv>
    </>
  );
};

const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
const Item = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Edit = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const CartHeader = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: solid grey 2px;
  background-color: #f4f4fa;
`;

const CartTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 1px solid grey;
`;

const OrderTitle = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
`;

const OrderBody = styled.div``;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid grey;
  align-items: center;
  background-color: #f4f4fa;
`;

const Total = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
`;

const ButtonDiv = styled.div``;

const PurchaseButton = styled.button`
  background-color: #4848e5d6;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  text-shadow: 1px 1px 3px black;
  box-shadow: 2px 2px 5px grey;
  &:hover {
    background-color: blue;
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
`;

export default Cart;
