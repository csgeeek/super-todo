import React from 'react'

const Tasks = () => {
  const tasks = [
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
  ];
    return (
        <div>
          {tasks.map((task) => {
            return <h2>{task.chore}</h2>
          })}
        </div>
    )
}

export default Tasks
