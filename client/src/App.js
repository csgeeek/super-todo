import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import SearchBar from './components/SearchBar';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      setTempTasks(tasksFromServer);
    }

    getTasks()
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/tasks');
    const data = res.json();
    return data;
  }

  // useEffect( () => {
  //   const getTempTasks = async () => {
  //     const selectedTasksFromServer = await fetchTempTasks();
  //     console.log(selectedTasksFromServer);
  //     setTempTasks(selectedTasksFromServer);
  //   }

  //   getTempTasks()
  // }, []);

  // const fetchTempTasks = async () => {
  //   const res = await fetch('http://localhost:8080/tasks/name');
  //   const data = res.json();
  //   return data;
  // }
  const [tempTasks, setTempTasks] = useState([]);

  const [showForm, setFormState] = useState(false);

  const onDeleteTask = async (id) => {
    // console.log(id);
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(
      tasks.filter( 
        (task) => {
          console.log(task);
          return task.taskId !== id? task: '';
        }
      ) 
    );
    // setPermTasks(
    //   permTasks.filter( 
    //     (task) => {
    //       return task.id !== id? task: '';
    //     }
    //   ) 
    // );
  }

  const onSearchTask = async (searchString) => {

    let n = searchString.length;
    searchString = searchString.toLowerCase();
    console.log(searchString);
    // console.log(tempTasks);
    await fetch(`http://localhost:8080/tasks/name/${searchString}`, {
      method: 'GET'
    })

    console.log(tempTasks);
    // setTasks(tempTasks);

    (n === 0)? setTasks(tasks):
    setTasks(
      tempTasks.filter( 
        (task) => {
          return (((task.chore).toLowerCase()).substring(0, n) === searchString)? task: '';
        } 
      )
    )
  }

  const toggleTaskCompletion = async (id) => {

    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: 'PUT'
    })

    console.log(id);
    setTasks(
      tasks.map( (task) => task.taskId === id?
        { ...task, completed: !task.completed }: task 
      )
    )
    console.log(tasks);
    // setPermTasks(permTasks.map( (task) => task.id === id?
    // { ...task, completed: !task.completed }: task ))
  }

  const onAddingTask = (taskPart) => {
    const id = Math.floor(Math.random()*10000);
    const newTask = {id, ...taskPart};

    setTasks([...tasks, newTask]);
    // setPermTasks([...permTasks, newTask]);
  }

  const onToggleForm = () => {
    setFormState(!showForm);
  }

  return (
    <div className="App">
      <Header onToggle={onToggleForm} showForm={showForm} />
      {showForm === true?<AddTask onAdd={onAddingTask} />: ''}
      <SearchBar onSearch={onSearchTask} />
      {tasks.length === 0? <h2>No tasks found!</h2>: 
        <Tasks tasks={tasks} onDelete={onDeleteTask} onToggle={toggleTaskCompletion} />}
    </div>
  );
}

export default App;
/*
 1. Sort tasks
~2. Search ~
*/