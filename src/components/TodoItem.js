import React from "react";

export function TodoItem(props) {
  const { todo } = props;
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>del</td>
    </tr>
  );
}
