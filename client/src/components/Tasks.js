import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div className='Tasks'>
          <div className="task-header">
            <h2>Tasks</h2>
          </div>
          <div className="task-container">
            {tasks.map((task) => {
              return <Task key={task.taskId} task={task} onDelete={onDelete} onToggle={onToggle} />
            })}
          </div>
        </div>
    )
}

export default Tasks
