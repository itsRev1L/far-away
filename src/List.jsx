import React from "react";
import Items from "./Items";

const List = ({ items, onDeleteItem, onToggleItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
