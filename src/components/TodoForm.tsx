import React, { FC , useState} from "react";
import { Todo } from "../Tyeps";
import { v4 as uuidv4 } from "uuid";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoForm: FC<Props> = ({ todos, setTodos }) => {
  const [inputTitle, setInputTitle] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setInputTitle(e.target.value);
  };

  const handleOnSubmit = () => {
    if(inputTitle) {
      const newTodo :Todo = {
        id: uuidv4(),
        title: inputTitle,
        isCompleted: false
      }
      setTodos([...todos, newTodo])
      setInputTitle('')
    }
  }

  return (
    <div id="inputForm">
      <label>
        {"タイトル : "}
        <input type="text" value={inputTitle} onChange={handleInputChange} />
      </label>
      <input
        className="btn"
        type="submit"
        value="作成"
        onClick={handleOnSubmit}
      />
      <hr style={{ border: "1px dashed yellowgreen" }} />;
    </div>
  );
};

export default TodoForm;
