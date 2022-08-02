import React, { useState, FC } from "react";
import { Todo } from "./Tyeps";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const TodoPage: FC = () => {
  const InitialTodos: Todo[] = [];

  const [todos, setTodos] = useState(InitialTodos);

    return (
    <div>
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
};

export default TodoPage;
