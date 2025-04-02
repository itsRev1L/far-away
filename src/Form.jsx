import { React, useState } from "react";
const Form = ({ onAddItems }) => {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSumit(e) {
    e.preventDefault();

    if (!desc) return;
    const newItem = { desc, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSumit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
