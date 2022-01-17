import { useState } from "react";

const AddTask = ( {onAdd} ) => {

  const [chore, setChore] = useState('');
  const [time, setTime] = useState('');
  const completed = false;

  const onSubmit = (e) => {
    e.preventDefault();
    if(chore === '' || time === ''){
      alert("One or more fields are empty");
      return;
    }
    onAdd({ chore, time, completed });
    setChore('');
    setTime('');
  }

    return (
      <form action="" className="AddTask" onSubmit={onSubmit}>
        
        <div className="chore">
          <label>Chore</label>
          <input type="text" value={chore} onChange={(e) => setChore(e.target.value)} />
        </div> <br />

        <div className="time">
          <label>Time</label>
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </div> <br />

        <div className="submit-task">
          <input type="submit" value={"Add Task"} className="add-task-btn" />
        </div>

      </form>
    );
}

export default AddTask
