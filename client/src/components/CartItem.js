import React from "react";
import styled from "styled-components";
import { GoTrashcan } from "react-icons/go";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../reducers/cart-reducer";
import { getNumItemsCart } from "../reducers/cart-reducer";
import { removeItem } from "../actions";

const CartItem = ({item }) => {
  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell>
        <Quantity>{item.quantity}</Quantity>
      </TableCell>
      <TableCell>
        <Name>{item.name}</Name>
      </TableCell>
      <TableCell>
        <Price>{parseInt(item.price.split("$")[1]) * item.quantity + "$"}</Price>
      </TableCell>
      <TableCell>
        <RemoveButton
          onClick={() => {
            dispatch(removeItem(item));
          }}
        >
          <GoTrashcan
            style={{ height: "20px", width: "20px", background: "#adbdec" }}
          />
        </RemoveButton>
      </TableCell>
    </TableRow>
  );
};

const Name = styled.div`
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Quantity = styled.div`
  font-size: 16px;
  text-align: center;
`;

const RemoveButton = styled.button`
  outline: none;
  background-color: #adbdec;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
`;


export default CartItem;
