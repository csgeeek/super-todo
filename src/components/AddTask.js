const AddTask = () => {
    return (
      <form action="" className="AddTask">
        <div className="chore">
          <label>Chore</label>
          <input type="text" />
        </div> <br />
        <div className="time">
          <label>Time</label>
          <input type="text" />
        </div> <br />
        <div className="submit-task">
          <input type="submit" value={"Add Task"} className="add-task-btn" />
        </div>
      </form>
    );
}

export default AddTask
