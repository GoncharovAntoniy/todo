import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ todos, onChange, todo = null, onSubmit }) => {
  const [value, setValue] = useState("");

  useEffect(() => {todo && setValue(todo.title)}, [todo]);

  async function formHeandler(event) {
    event.preventDefault();

    if (value) {
      await axios.post('http://127.0.0.1:8000/todo', 
      {title: value, compleated: false}).then(() => setValue('')).catch(err => console.error(err))

      onChange()
      return
    }
    alert("Сначала напишите текст задачи");
  }

  return (
    <form
      className="form"
      onSubmit={
        todos
          ? (event) => formHeandler(event)
          : (event) => onSubmit(event, value)
      }>
      <input
        value={value}
        onInput={(event) => setValue(event.target.value)}
        type="text"
        placeholder="Push Enter to add task"
      />
    </form>
  );
};

export default Form;
