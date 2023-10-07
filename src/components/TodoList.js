import Form from "./Form";
import Item from "./Item";
import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    const updatedList = [...items, item];
    setItems(updatedList);
    console.log(updatedList);
  }

  function removeItem(track) {
    const updatedList = items.filter(function (item) {
      return item.id !== track.id;
    });
    setItems(updatedList);
  }

  function togglePlayed(track) {
    const updatedItems = items.map(function (item) {
      if (item.id === track.id) {
        item.played = !item.played;
        return item;
      } else {
        return item;
      }
    });

    setItems(updatedItems);
  }

  return (
    <div>
      <h1>Task Management App</h1>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item}
            remove={removeItem}
            togglePlayed={togglePlayed}
          />
        ))}
      </ul>
      <Form addList={addItem} />
    </div>
  );
}
