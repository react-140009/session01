import React from "react";

export function TodoItem({ todo }) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>del</td>
    </tr>
  );
}
