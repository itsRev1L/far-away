import React from "react";

const Items = ({ item, onDeleteItem }) => {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.desc}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
      </li>
    </>
  );
};

export default Items;
