import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [ count, setCount ] = useState(0)

  const incCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  // Count renders with useEffect

  const [ renders, setRenders ] = useState(0)

  // useEffect(() => {
  //   setRenders(prevRenders => prevRenders + 1)
  //   console.log(renders)
  // })

  // ! Initial render triggers useEffect, triggers count, triggers useEffect... (infinite loop)

  return (
    <div className='main-container'>
      <div>
        <button onClick={incCount}>+</button>
        <span>{count}</span>
        <button onClick={decCount}>-</button>
      </div>
      <div>
        <h1>This page re-rendered x times</h1>
      </div>
    </div>
  )
}

export default App
