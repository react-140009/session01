import React from "react";

export function TodoItem({ todo, onRemoveTodo }) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <button onClick={onRemoveTodo}>❌</button>
      </td>
    </tr>
  );
}
