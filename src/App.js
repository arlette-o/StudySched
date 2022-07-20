import React from "react";
import './App.css'
import ProgressTracker from './components/ProgressTracker'
import Reminder from "./components/Reminders";

function App() {
  return (
  <div className='Cork'>
      Hello
      <ProgressTracker></ProgressTracker>
      <Reminder></Reminder>
  </div>);
}


export default App;
