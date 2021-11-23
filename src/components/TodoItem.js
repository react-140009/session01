import React from "react";

export function TodoItem(props) {
  return (
    <tr>
      <td>{props.todo.id}</td>
      <td>{props.todo.title}</td>
      <td>del</td>
    </tr>
  );
}
