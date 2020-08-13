import React from "react";

export default function DropDown({ items }) {
  // Gets all seven categories
  const unique = [...new Set(items.map((item) => item.category))];
  console.log(unique);

  return (
    <div>
      <select id="category" name="category">
        {unique.map((cat) => (
          <option key={cat} className="category">
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
