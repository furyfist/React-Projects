import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// we cant able to re-render out count variable -> need to use the usestate hook;
let count = 1;
function Increase(count){
  count = count + 1;
}

function Decrease(count){
  count = count - 1;
}

function App() {
  return (
    <div>
      count : {count}
      <br />
      <button onClick={()=> Increase(count)}>Increase</button>
      <button onClick={()=> Decrease(count)}>Decrease</button>
    </div> 
  )
}

export default App
