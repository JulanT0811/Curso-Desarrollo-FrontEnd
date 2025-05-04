import React, { useState, useEffect } from 'react';
import './App.css'; // Importa el archivo CSS

// Aquí irían tus imports de Redux y otros componentes si es necesario

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  // Cargar tareas desde el almacenamiento local
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Guardar tareas en el almacenamiento local
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskText) {
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="todo-list">
        <div className="add-todo">
          <input
            type="text"
            placeholder="Nueva tarea"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={handleAddTask}>Añadir</button>
        </div>
        {tasks.map((task) => (
          <div key={task.id} className="todo-item">
            <span>{task.text}</span>
            <button onClick={() => handleRemoveTask(task.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="todo-count">
        Tareas restantes: {tasks.length}
      </div>
    </div>
  );
}

export default App;
