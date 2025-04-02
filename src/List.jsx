import React from "react";
import Items from "./Items";

const List = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default List;
