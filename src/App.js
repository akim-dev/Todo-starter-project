import React from 'react';
import './style.css';
import React, { useState } from 'react';

import Todo from './components/Todo';
import Form from './components/Form';
import nanoid from 'nanoid';

export default function App({ data }) {
  const [tasks, setTasks] = useState(data);

  // untuk callback yaitu passing data dari child ke APP melalui props
  function addTask(name) {
    // return console.log(`${name}`);
    const newTask = { id: 'id', name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks.map((todo) => (
    <Todo name={todo.name} completed={todo.completed} />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTodo={addTask} />
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
