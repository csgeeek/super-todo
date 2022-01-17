import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

const App = () => {

  const [tasks, setTasks] = useState([ /* Default state */
    {
      id: 1,
      chore: "Doing dishes",
      time: "9AM Sunday",
      completed: false
    },
    {
      id: 2,
      chore: "Giving my mercedes for servicing",
      time: "11AM Sunday",
      completed: true
    },
    {
      id: 3,
      chore: "Garden work",
      time: "4PM Sunday",
      completed: false
    },
    {
      id: 4,
      chore: "Watering plants",
      time: "5PM Sunday",
      completed: false
    },
  ]);
  const onDeleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter( (task) => {
        return task.id !== id? task: '';
    }) );
  }
  const onSearchTask = (searchString) => {
    searchString = 'D';
    let n = searchString.length;
    console.log(n);
    n === 0? setTasks(tasks):
    setTasks(tasks.filter( (task) => {
      return ((task.chore).substring(0, n) === searchString)? task: '';
    } ))
  }
  return (
    <div className="App">
      <Header />
      {/* Blueprint bish */}
      <SearchBar onSearch={onSearchTask} />
      {tasks.length === 0? <h2>No tasks found!</h2>: <Tasks tasks={tasks} onDelete={onDeleteTask}  />}
    </div>
  );
}

export default App;
/*
1. Sort tasks
2. Search tasks
*/