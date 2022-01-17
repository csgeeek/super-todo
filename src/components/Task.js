import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
    return (
        <div className="Task">
          <div className="text">
            <h3>{task.chore}</h3>
            <p>{task.time}</p>
          </div>
          <div className="delete">
            <FaTimes style={{color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)} />
          </div>
        </div>
    )
}

export default Task
