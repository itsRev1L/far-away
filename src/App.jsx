import { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";
const initialItems = [
  { id: 1, desc: "cigarettes", quantity: 500, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    console.log("Item added:", item);
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <List
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItems={handlePacked}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
