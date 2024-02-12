import { useState, useEffect, useCallback, useRef } from 'react'
import './App.scss'

function App() {
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const passRef = useRef(null);


  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    for (let i = 1; i < length; i++) {
      const position = Math.floor(Math.random() * str.length + 1); //generate random number upto string length 0.000
      pass += str.charAt(position) //get character from string using random number
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed])
  const copyPassToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    // passRef.current.style.color = 'red';
    // passRef.current.style.background = 'gray';
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <div className="app">
        <div className="form">
          <textarea cols="30" rows="2"
            value={password}
            readOnly
            ref={passRef}
          >
          </textarea>
          <button type='button' onClick={copyPassToClipboard}>Copy</button>
        </div>
        <div className="options">
          <div className="inputs">
            <input type="range"
              max={100} min={3} id='range'
              value={length}
              onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="range">{length}</label>
          </div>
          <div className="inputs">
            <input
              type="checkbox" id='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="uppercase">Numbers</label>
          </div>
          <div className="inputs">
            <input
              type="checkbox" id='charInput'
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
