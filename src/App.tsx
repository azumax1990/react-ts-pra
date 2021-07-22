import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from "./types/todo";


function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data)
      }
    )
  }
  return (
    <>
      <button onClick={onClickFetchData}>fetchData</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </>
  );
}

export default App;
