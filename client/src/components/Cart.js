import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import { getCart } from "../reducers/cart-reducer";

const Cart = ({ children }) => {
  const cart = useSelector(getCart);
  let totalprice = 0;

  cart.forEach((item) => {
    totalprice =
      parseInt(item.price.split("$")[1]) * item.quantity + totalprice;
  });

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
          <PurchaseButton>Proceed to checkout </PurchaseButton>
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
`;

const CartTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const OrderTitle = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
`;

const OrderBody = styled.div``;

const BottomDiv = styled.div``;

const Total = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
`;

const ButtonDiv = styled.div``;

const PurchaseButton = styled.button`
  background-color: #4848e5d6;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin: 20px;
`;

export default Cart;
