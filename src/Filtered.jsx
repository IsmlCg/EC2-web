/* eslint-disable array-callback-return */
import React, { useState, useMemo } from "react";
const items = [
  { name: "Apple", category: "fruit" },
  { name: "Banana", category: "fruit" },
  { name: "Cherry", category: "fruit" },
  { name: "Date", category: "fruit" },
  { name: "Elderberry", category: "fruit" },
  { name: "Fig", category: "fruit" },
  { name: "Grape", category: "fruit" },
  { name: "Honeydew", category: "fruit" },
];

function FilteredList() {
  const [query, setQuery] = useState("");
  const filterItem = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="search..!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filterItem.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default FilteredList;
