import './App.css'
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)

  const HandleIncrease = () => {
    setNumber(number + 1)
  }
  const HandleDecrease = () => {
    setNumber(number - 1)
  }
  return (
    <>
      <button type='button' onClick={HandleIncrease}>+</button>
      <h2>Current value : {number}</h2>
      <button type='button' onClick={HandleDecrease}>-</button>
    </>
  )
}

export default App
