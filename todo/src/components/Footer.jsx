import axios from "axios";

const Footer = ({ todos, setTodos }) => {

  function filterTodos(type) {
    axios
      .get("http://127.0.0.1:8000/todo", {
        params: {
          type: type,
        },
      })
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }

  return (
    <div className="footer">
      <span onClick={() => filterTodos("all")} className="filterButton all">
        {todos ? todos.length : "0"} &nbsp; задач
      </span>
      <span
        onClick={() => filterTodos("open")}
        className="filterButton completed">
        {todos ? todos.filter((todo) => !todo.completed).length : "0"} &nbsp;
        открыты
      </span>
      <span onClick={() => filterTodos("completed")} className="filterButton open">
        {todos ? todos.filter((todo) => todo.completed).length : "0"} &nbsp;
        завершены
      </span>
    </div>
  );
};

export default Footer;
