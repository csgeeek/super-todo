
const Task = ({ task }) => {
    return (
        <div className="Task">
          <h3>{task.chore}</h3>
          <p>{task.time}</p>
        </div>
    )
}

export default Task
