import React from 'react';
import './style.css';

import Todo from './components/Todo';

export default function App() {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );
}
