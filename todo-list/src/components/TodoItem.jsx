import React from 'react';

function TodoItem({ task, handleRemoveTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => handleRemoveTask(task.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
