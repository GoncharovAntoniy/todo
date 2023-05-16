import Form from "./Form";
import axios from "axios";

const TodoUpdate = ({ todo, showUpdate, setShowUpdate, onChange }) => {
  async function handleUpdate(event, value) {
    event.preventDefault();

    await axios.put("http://127.0.0.1:8000/todo/" + todo.id, {
        title: value,
        completed: todo.completed
      })
      .then(() =>{
        console.log(onChange)
        onChange()
      } )
      .catch((err) => console.error(err));

    setShowUpdate(!showUpdate);
  }

  return (
    <>
      <Form todo={todo} onSubmit={handleUpdate} />
    </>
  );
};

export default TodoUpdate;
