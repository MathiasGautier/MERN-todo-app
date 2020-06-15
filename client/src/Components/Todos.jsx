import React, { useState, useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoService from "../Services/TodoService";
import Message from './Message';
import { AuthContext } from "../Context/AuthContext";

function Todos(props) {
  const [todo, setTodo] = useState({ name: "", description: "" });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    TodoService.postTodo(todo).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        TodoService.getTodos().then((getData) => {
          setTodos(getData.todos);
          setMessage(message);
        });
      } else if (message.msgBody === "Unauthorized") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value });
  };

  console.log(todo)

  const resetForm = () => {
    setTodo({ name: "", description: "" });
  };

  return (
    <div>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} />;
        })}
      </ul>
      <br />
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Enter Todo</label>
        <input
          type="text"
          name="name"
          value={todo.name}
          onChange={onChange}
          className="form-control"
          placeholder="Please enter a title"
        />
        <input
          type="text"
          value={todo.description}
          name="description"
          onChange={onChange}
          className="form-control"
          placeholder="Please enter a description"
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
}

export default Todos;
