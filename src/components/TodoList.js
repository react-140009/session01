import React from "react";
import { TodoItem } from "./TodoItem";

const todoList = [
  { id: 1, title: "task 1" },
  { id: 2, title: "task 2" },
  { id: 3, title: "task 3" },
  { id: 4, title: "task 4" },
];
export function TodoList() {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((item) => (
          <TodoItem key={item.id} todo={item} xyz="true"></TodoItem>
        ))}
      </tbody>
    </table>
  );
}
