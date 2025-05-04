import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, removeTask }) => (
  <div>
    <h2>Tareas Pendientes</h2>
    <ul>
      {tasks.length === 0 ? (
        <li>No hay tareas por hacer.</li>
      ) : (
        tasks.map(task => (
          <TodoItem key={task.id} task={task} removeTask={removeTask} />
        ))
      )}
    </ul>
  </div>
);

export default TodoList;
