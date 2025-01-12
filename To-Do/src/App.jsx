import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // defined to track 3 things (id, todo, status)
  const [taskIdCounter, setTaskIdCounter] = useState(1); // track and update of id count in todo

  // modern syntax to write function (arrow function) -> remover binding problem
  // Function to add a task.
  const addTask = (taskText) => {
    const newTask = { id: taskIdCounter, text: taskText, isCompleted: false };
    setTasks([...tasks, newTask]);
    setTaskIdCounter((c) => c + 1);
  };

  // Function to delete a task by id
  const deleteTask = (id) => {
    /*
     tasks is the current list of arrays.
     filter -> js array method that creates a new array containing elements which satisfies given condition.
    */
    const updatedTasks = tasks.filter((task) => task.id !== id); 
    setTasks(updatedTasks);
  };

  // Function to toggle task completion by ID
  const toggleTask = (id) => {
    // task represents individual element from an array.
    // map() returns a new array containing the results of the function applied to each element. It does not modify the original array.
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        // means: Copy all properties from task into a new object, then update the isCompleted property.
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    // this will replace the original array with the updated array made by map.
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      {/* To add task */}
      <TaskInput addTask={addTask} />
      {/* Display the list of Tasks */}
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
};

// Components for adding tasks
const TaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      addTask(inputValue); // call the add task function from props
      setInputValue(""); // clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a Task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

// Component for displaying the list of tasks
const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default App;