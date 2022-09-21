
import './App.css';
import React, { useState } from 'react'
import Calendar from './Calendar';

function App() {
  const today = new Date()
  const random = Math.floor(Math.random() * 11)
  const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  console.log(random)
  const nextMo = new Date(`${months[random]} 22, 2022 20:10:25`)
  const [date, setDate] = useState(today)
  
  return (
    <div id='calendar' className="App">
      <button onClick={()=>setDate(nextMo)}>Click me</button>
      <Calendar view={"dayGridMonth"} date={date} />
    </div>
  );
}

export default App;
