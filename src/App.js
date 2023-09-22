import React from 'react';
import './style.css';

import Todo from './components/Todo';
import Form from './components/Form';

export default function App({ data }) {
  const taskList = data.map((todo) => (
    <Todo name={todo.name} completed={todo.completed} />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
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
