import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
];
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App data={DATA} />
  </StrictMode>
);
