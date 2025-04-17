import { React, useState } from "react";
import Items from "./Items";

const List = ({ items, onDeleteItem, onToggleItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  }
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Order</option>
          <option value="description">Desc</option>
          <option value="packed">Status</option>
        </select>
      </div>
    </div>
  );
};

export default List;
