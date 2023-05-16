import { IonIcon } from "@ionic/react";
import { trashOutline, createOutline } from "ionicons/icons";
import { useState } from "react";
import TodoUpdate from "./TodoUpdate";
import axios from "axios";

const Todo = ({ todo, todos, onChange }) => {
  const [showUpdate, setShowUpdate] = useState(false);

  async function completedTodo(todo) {
    await axios
      .put("http://127.0.0.1:8000/todo/" + todo.id, {
        completed: !todo.completed,
        title: todo.title,
      })
      .then(() => onChange())
      .catch((err) => console.error(err));
  }

  async function removeTodo() {
    let confirmation = window.confirm("Вы точно хотите удалить задачу?");
    if (confirmation) {
      await axios
        .delete("http://127.0.0.1:8000/todo/" + todo.id)
        .then(() => onChange())
        .catch((err) => console.error(err));
    }
  }

  return (
    <div className="todo">
      {showUpdate ? (
        <TodoUpdate
          todo={todo}
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
          onChange={onChange}
        />
      ) : (
        <div className={todo.completed ? "completed" : ""}>
          <input
            className="checkbox"
            checked={todo.completed}
            type="checkbox"
            onChange={() => completedTodo(todo)}
          />
          <label htmlFor={`check-${todo.id}`}>
            {todo.title.length > 30
              ? `${todo.title.slice(45)}...`
              : `${todo.title}`}
          </label>
          <button onClick={() => setShowUpdate(!showUpdate)} className="button">
            <IonIcon className="icon" icon={createOutline} size="small" />
          </button>
          <button
            onClick={removeTodo}
            disabled={todo.completed ? false : true}
            className="button">
            <IonIcon className="icon" icon={trashOutline} size="small" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
