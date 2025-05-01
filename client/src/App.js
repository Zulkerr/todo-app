import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Aufgaben laden
    axios.get('/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("Es gab einen Fehler beim Laden der Aufgaben:", error);
      });
  }, []);

  const handleAddTask = () => {
    // Neue Aufgabe hinzufügen
    axios.post('/api/tasks', { title: newTask })
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask('');
      })
      .catch(error => {
        console.error("Es gab einen Fehler beim Hinzufügen der Aufgabe:", error);
      });
  };

  const handleDeleteTask = (id) => {
    // Aufgabe löschen
    axios.delete(`/api/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => {
        console.error("Es gab einen Fehler beim Löschen der Aufgabe:", error);
      });
  };

  return (
    <div className="App">
      <h1>To-Do Liste</h1>
      
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Neue Aufgabe"
        />
        <button onClick={handleAddTask}>Hinzufügen</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => handleDeleteTask(task._id)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


