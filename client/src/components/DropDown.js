import React from "react";
import styled from "styled-components";

export default function DropDown({ items, category, setCategory }) {
  // Gets all seven categories
  const unique = [...new Set(items.map((item) => item.category))];
  console.log(category);

  return (
    <Wrapper>
      <Select
        id="category"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        {unique.map((cat) => (
          <option key={cat} className="category">
            {cat}
          </option>
        ))}
      </Select>
      <Cancel onClick={() => setCategory("")}>x</Cancel>
    </Wrapper>
  );
}

const Cancel = styled.button`
  padding: 0 5px;
  border: 1px solid rgb(204, 204, 204); // grey
  background-color: white;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
`;
const Select = styled.select`
  border: 1px solid rgb(204, 204, 204); // grey
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;
