import React from 'react';

function AddTodo({ newTask, setNewTask, handleAddTask }) {
  return (
    <div>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Añadir nueva tarea" 
      />
      <button onClick={() => handleAddTask(newTask)}>Añadir tarea</button>
    </div>
  );
}

export default AddTodo;
