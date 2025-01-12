import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  return (
    <div className="container"> 
      <div >
      <h1>Counter</h1>
        <p> count : {count} </p>
        
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <button onClick={()=> setCount(count - 1)}>Decrease</button>
      </div>

    </div>
    
  )
}

export default App
