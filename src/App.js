import React from 'react';
import './style.css';

import Todo from './components/Todo';
import Form from './components/Form';

export default function App({ data }) {
  // untuk callback yaitu passing data dari child ke APP melalui props
  function addTask(name) {
    return console.log('ini dari add task function yang ada di APP');
  }

  const taskList = data.map((todo) => (
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
