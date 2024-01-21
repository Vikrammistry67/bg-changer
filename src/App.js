import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [color, setColor] = useState("white");
  return (
    <div  style={{ backgroundColor: color }}  className='App absolute w-full h-full'>
      <div className='App w-10/12 h-20 bg-slate-400 ml-24 flex justify-evenly items-center  absolute bottom-8 border rounded-full' >
        
        <button style={{ backgroundColor: "red" }} onClick={() => setColor("red")} className="p-3 border font-medium rounded-full px-8"><h1>Red</h1></button>
        <button style={{ backgroundColor: "green" }} onClick={() => setColor("green")} className="p-3 border font-medium rounded-full px-8"><h1>Green</h1></button>
        <button style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")} className="p-3 border font-medium rounded-full px-8"><h1>Blue</h1></button>
        <button style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")} className="p-3 border font-medium rounded-full px-8"><h1>Orange</h1></button>
        <button style={{ backgroundColor: "black" }} onClick={() => setColor("black")} className="p-3 border font-medium rounded-full px-8"><h1>Black</h1></button>
        <button style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")} className="p-3 border font-medium rounded-full px-8"><h1>Yellow</h1></button>
        <button style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")} className="p-3 border font-medium rounded-full px-8"><h1>Gray</h1></button>


      </div>
    </div>
  )
}

export default App