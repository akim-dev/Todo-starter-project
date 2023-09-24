import React from 'react';
import './style.css';
import React, { useState } from 'react';

import Todo from './components/Todo';
import Form from './components/Form';
import { nanoid } from 'nanoid';

export default function App({ data }) {
  const [tasks, setTasks] = useState(data);

  // untuk callback yaitu passing data dari child ke APP melalui props
  function addTask(name) {
    // return console.log(`${name}`);
    // const newTask = { id: 'id', name, completed: false };
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };

    setTasks([...tasks, newTask]);
  }

  // tombol task completed
  function toggleTodoCompleted(id) {
    // console.log(id);
    const updatedTodo = tasks.map((task) => {
      if (id == task.id) return { ...tasks, completed: !task.completed };

      return task;
    });
    setTasks(updatedTodo);
  }

  const taskList = tasks.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      todoCompleted={toggleTodoCompleted}
    />
  ));

  const jumlahTask = taskList.length !== 1 ? 'Tasks' : 'task';
  const heading = `${taskList.length} ${jumlahTask}`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTodo={addTask} />
      <h2>{heading}</h2>
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
