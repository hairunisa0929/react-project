import { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);

  return (
    <>
      <button
        className="rounded-lg bg-sky-400 p-2 text-white"
        onClick={() => {
          setTodos([
            ...todos,
            {
              id: todos.length,
              text: "new to do list",
            },
            
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
