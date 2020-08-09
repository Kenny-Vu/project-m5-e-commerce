import React from "react";
import styled from "styled-component";

const PaymentInfo = () => {
  return (
    <PaymentInfo>
      <PaymentTitle>PaymentMethod</PaymentTitle>
      <CardType>Credit Card Type</CardType>
      <CardTypeDropDown>
        <select>
          <option>Select payment method</option>
          <option>MasterCard</option>
          <option>Visa</option>
          <option>Amex</option>
        </select>
      </CardTypeDropDown>
      <CreditCardNumber>Credit Card Number</CreditCardNumber>
      <CreditCardInput>
        <input type="text" />
      </CreditCardInput>
      <span>Exp Date</span>
      <span>Year</span>
      <span>CVC</span>
      <ExpMonthDropDown>
        <select>
          <option>Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </ExpMonthDropDown>
      <ExpYearDropDown>
        <select>
          <option>Year</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select>
      </ExpYearDropDown>
      <CVCInput>
        <input type="text"></input>
      </CVCInput>
    </PaymentInfo>
  );
};

const PaymentInfo = styled.div``;

const PaymentTitle = styled.div``;

const CardType = styled.div``;

const CardTypeDropDown = styled.div``;

const CreditCardNumber = styled.div``;

const CreditCardInput = styled.div``;

const ExpMonthDropDown = styled.div``;

const ExpYearDropDown = styled.div``;

const CVCInput = styled.div``;

export default PaymentInfo;
