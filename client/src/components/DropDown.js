import React from "react";

export default function DropDown({ items, category, setCategory }) {
  // Gets all seven categories
  const unique = [...new Set(items.map((item) => item.category))];
  console.log(category);

  return (
    <div>
      <select
        id="category"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        {unique.map((cat) => (
          <option key={cat} className="category">
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setCategory("")}>X cancel</button>
    </div>
  );
}
