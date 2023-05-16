import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Todos from "./components/Todos";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {




  const [todos, setTodos] = useState(null);


  function load() {
    axios
      .get("http://127.0.0.1:8000/todo")
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => load(), []);

  console.log(todos);

  return (
    <>
      <div className="container">
        <div className="box">
          <Header />

          <Form todos={todos}  onChange={load} />
          <Todos todos={todos} onChange={load} />
          <Footer todos={todos} setTodos={setTodos} onChange={load} />
        </div>
      </div>
     
    </>
  );
}

export default App;
