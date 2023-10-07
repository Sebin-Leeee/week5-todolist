import { useState } from "react";
import { nanoid } from "nanoid";

export default function Form(props) {
  const [item, setItem] = useState("");

  function handleItemChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      item: item,
      id: nanoid(),
      played: false
    };
    props.addList(newItem);
    setItem("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Add new task..."
            onChange={handleItemChange}
            value={item}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
