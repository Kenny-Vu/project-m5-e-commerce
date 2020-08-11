import styled from "styled-components";

export const Input = styled.input`
  height: 33px;
  border: 1px solid rgb(204, 204, 204); //grey
  border-radius: 4px;
  padding: 0 4px;
  display: block;
  min-width: 200px;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 768px) {
    min-width: 70vw;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Select = styled.select`
  height: 33px;
  border: 1px solid rgb(204, 204, 204); //grey
  border-radius: 4px;
  padding: 0 4px;
  display: block;
  min-width: 200px;
  margin-bottom: 10px;
  width: 100%;
  @media (max-width: 768px) {
    min-width: 70vw;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 20px;
`;
