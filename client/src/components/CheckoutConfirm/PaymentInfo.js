import React from "react";
import { Label, Input, Select, SectionTitle } from "./FormStyledComponents";
import styled from "styled-components";

const PaymentInfo = ({
  creditCardNumber,
  setCreditCardNumber,
  cvc,
  setCVC,
  month,
  setMonth,
  year,
  setYear,
  cardType,
  setCardType,
}) => {

  return (
    <PaymentWrapper>
      <SectionTitle>PaymentMethod</SectionTitle>
      <Label htmlFor="card-type">Credit card type</Label>
      <Select
        name="card-type"
        id="card-type"
        value={cardType}
        onChange={(e) => setCardType(e.target.value)}
        required
      >
        <option value="" disabled></option>
        <option>MasterCard</option>
        <option>Visa</option>
        <option>Amex</option>
      </Select>
      <Label htmlFor="credit-card-number">Credit card number</Label>
      <Input
        id="credit-card-number"
        name="credit-card-number"
        type="text"
        value={creditCardNumber}
        onChange={(e) => setCreditCardNumber(e.target.value)}
        required
      />

      <Label htmlFor="month">Month</Label>
      <Select
        id="month"
        name="month"
        value={month}
        required
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="" disabled></option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </Select>
      <Label htmlFor="year">Year</Label>
      <Select
        value={year}
        name="year"
        id="year"
        required
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="" disabled></option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </Select>
      <Label htmlFor="cvc">CVC</Label>
      <Input
        id="cvc"
        name="cvc"
        type="text"
        value={cvc}
        onChange={(e) => setCVC(e.target.value)}
        required
      />
    </PaymentWrapper>
  );
};

const PaymentWrapper = styled.div``;

export default PaymentInfo;
