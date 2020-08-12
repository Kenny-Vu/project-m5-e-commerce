import React from "react";
import styled from "styled-components";
import { GoTrashcan } from "react-icons/go";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const CartItem = ({ item }) => {
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
        <Price>
          {(Number(item.price.split("$")[1]) * item.quantity).toFixed(2) + "$"}
        </Price>
      </TableCell>
      <TableCell>
        <RemoveButton
          onClick={() => {
            dispatch(removeItem(item));
          }}
        >
          <GoTrashcan
            style={{ height: "20px", width: "20px", background: "white" }}
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
  background-color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export default CartItem;
