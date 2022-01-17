import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
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
  return (
    <div className="App">
      <Header />
      {/* Blueprint bish */}
      {tasks.length === 0? <h2>No tasks found!</h2>: <Tasks tasks={tasks} onDelete={onDeleteTask} />}
    </div>
  );
}

export default App;
