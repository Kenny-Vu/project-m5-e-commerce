import styled from "styled-components";
import React from "react";

const ButtonWrapper = styled.button`
  min-height: 40px;
  font-size: 0.9rem;
  padding: 5px 9px;
  outline: none;
  border: none;
  background-color: #4848e5d6;
  box-shadow: 2px 2px 5px grey;
  color: white;
  border-radius: 5px;
  text-shadow: 1px 1px 4px black;
  cursor: pointer;
  &:hover {
    background-color: #4848e5;
  }
  &:active {
    transform: translateY(2px);
  }
  &.disabled {
    cursor: not-allowed;
    background-color: grey;
    &:active {
      transform: none;
    }
  }
`;

const Button = ({ disabled, clickHandler, children }) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      onClick={clickHandler}
      className={disabled && "disabled"}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
