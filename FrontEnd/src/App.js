// src/App.js
import React from 'react';
import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;