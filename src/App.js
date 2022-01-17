import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <div className="temp">
        <form action="">
          Name: <br />
          <input type="text" /> <br />
          Name: <br />
          <input type="text" /> <br />
          Name:<br />
          <input type="text" /> <br /> <br />

          <input type="Submit" />
        </form>
      </div>
      <div className="block">
        {/* Blueprint bish */}
        <h2>Task 1</h2>
        <p>Doing dishes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</p>

        <h2>Task 2</h2>
        <p>Giving my mercedes for servicing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</p>

        <h2>Task 3</h2>
        <p>Garden work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</p>

        <h2>Task 4</h2>
        <p>Watering plants &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</p>

        <h2>Task 5</h2>
        <p>Games...? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</p>
      </div>
    </div>
  );
}

export default App;
