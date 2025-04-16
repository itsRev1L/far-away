import React from "react";

const Stats = ({ items }) => {
  let num = items.length;
  let packed = items.filter((item) => item.packed).length;
  let percent = Math.round((packed / num) * 100);
  return (
    <footer className="stats">
      <em>
        you have {num} items on your list, and you already packed {packed} (
        {percent}%)
      </em>
    </footer>
  );
};

export default Stats;
