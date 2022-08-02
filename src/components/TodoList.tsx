import React, { FC } from "react";
import { Todo } from "../Tyeps";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: FC<Props> = ({ todos, setTodos }) => {

  const handleOnChangeStatus = (todo:Todo) => {
    setTodos(prev => prev.map(t => t.id===todo.id ? {id: t.id, title: t.title, isCompleted: !t.isCompleted}: t))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>タイトル</td>
            <td>進捗</td>
          </tr>
        </thead>
        <tbody>
          {todos.length <= 0
            ? (<tr><td>{"データなし"}</td></tr>)
            : todos.map((t, i) => {
                return (
                  <tr key={i}>
                    <td className={t.isCompleted ? "checked" : ""}>{t.id}</td>
                    <td className={t.isCompleted ? "checked" : ""}>
                      {t.title}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={t.isCompleted}
                        onChange={()=>handleOnChangeStatus(t)}
                      />
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
