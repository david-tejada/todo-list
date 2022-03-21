import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewTodo({ onNewTodo }) {
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    onNewTodo({
      content: text,
      id: uuidv4(),
      completed: false,
    });
    setText("");
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter new todo..."
        onChange={handleTextChange}
        value={text}
      />
      <button type="submit">+</button>
    </form>
  );
}
