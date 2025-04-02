import { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "soosis", quantity: 52, packed: false },
// ];
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    console.log("Item added:", item);
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <List items={items} onDeleteItem={handleDeleteItem} />
        <Stats />
      </div>
    </>
  );
}

export default App;
