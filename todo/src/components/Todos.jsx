import Todo from "./Todo";

const Todos = ({ todos, onChange }) => {




  return (
    <div className="todos">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <Todo todo={todo} onChange={onChange} todos={todos} />
          </div>
        ))}
    </div>
  );
};

export default Todos;
