import './App.css';
import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* Blueprint bish */}
      <Tasks />
    </div>
  );
}

export default App;
