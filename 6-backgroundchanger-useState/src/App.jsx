import { useState } from 'react'
import './App.scss'
import Button from './components/Button'

function App() {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [fontColor, setFontColor] = useState("black");
  const changeBackground = (color) => {
    setBackgroundColor(color);
    setFontColor("white");
  }
  console.log(backgroundColor)

  return (
    <div className="app" style={{ backgroundColor: backgroundColor && backgroundColor }}>
      <p style={{ color: fontColor }}>Background Changer</p>

      <div className="buttons">
        <Button color="red" changeBGFunc={changeBackground} />
        <Button color="green" changeBGFunc={changeBackground} />
        <Button color="blue" changeBGFunc={changeBackground} />
      </div>
    </div>
  )
}

export default App
