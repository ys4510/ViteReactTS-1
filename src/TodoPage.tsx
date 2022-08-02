import React, { useState, FC } from "react";
import { Todo } from "./Tyeps";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
// import FormInput from './components/FormInput';
// import FormList from './components/FormList';

const TodoPage: FC = () => {
  const InitialTodos: Todo[] = [];

  const [todos, setTodos] = useState(InitialTodos);
  const [titleInput, setTitleInput] = useState("");

  const handleOnChangeStatus = (todo: Todo) => {
    setTodos((prev) =>
      prev.map((t) =>
        todo.id === t.id ? { ...todo, isCompleted: !todo.isCompleted } : t
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  const handleOnSubmit = () => {
    if (titleInput) {
      const newTodo: Todo = {
        id: uuidv4(),
        title: titleInput,
        isCompleted: false,
      };
      setTodos((todo) => [...todo, newTodo]);
      setTitleInput("");
    }
  };

  return (
    <div className="App">
      <Header />
      <div id="inputForm">
        <label>
          {"タイトル : "}
          <input type="text" value={titleInput} onChange={handleInputChange} />
        </label>
        <input
          className="btn"
          type="submit"
          value="作成"
          onClick={handleOnSubmit}
        />
      </div>
      <hr style={{ border: "1px dashed yellowgreen" }} />
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
            ? "データなし"
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
                        onChange={() => handleOnChangeStatus(t)}
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

export default TodoPage;
